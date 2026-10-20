# Adapted from https://medium.com/@balazs.csaba.diy/optimized-dockerfile-for-sveltekit-applications-from-experience-and-best-practices-99603d8d1303

# Use a specific lightweight Node.js base image with Alpine Linux for smaller image size; use this image version twice 
ARG NODE_IMAGE=node:26.12.0-alpine3.23

# --- Build stage ---
FROM ${NODE_IMAGE} AS builder
WORKDIR /app

# Copy over package manager config and required manifest files
COPY .npmrc package.json package-lock.json ./

# Install dependencies fresh - using 'npm ci' ensures clean install matching package-lock.json
RUN npm ci

# Copy the rest of the source files
COPY . ./

# Run Drizzle ORM sync and then build the SvelteKit app
# After build, delete source maps to keep build folder lean
RUN node --run build && \
    find build -name "*.map" -delete

# --- Runtime stage ---
FROM ${NODE_IMAGE} AS runner

# Add descriptive metadata about this image for easier maintenance
# LABEL org.opencontainers.image.description=""
# LABEL org.opencontainers.image.vendor=""
# LABEL org.opencontainers.image.source=""
# LABEL org.opencontainers.image.url=""

# Upgrade base Alpine Linux packages
RUN apk upgrade -U

WORKDIR /app

# Copy only necessary config and manifest files from local context
# No need to create node user and node groups, because these are exist by default
COPY --chown=node:node .npmrc package.json package-lock.json ./

# Install production dependencies only
RUN npm ci --omit=dev && \
    # Clean up npm cache to reduce image size
    npm cache clean --force && \
    # Remove unnecessary files and folders from node_modules such as docs, tests, maps, git metadata
    find node_modules \( \
        -type d -empty \
        -o -iname "license*" \
        -o -name "*.md" \
        -o -name "*.txt" \
        -o -name "*.map" \
        -o -name ".git*" \
        -o -name "*.yml" \
        -o -name "*.yaml" \
        -o -name "*.json" -path "*/test/*" \
        -o -name "*.json" -path "*/tests/*" \
        -o -name "test" -type d \
        -o -name "tests" -type d \
        -o -name "__tests__" -type d \
        -o -name "coverage" -type d \
        -o -name ".nyc_output" -type d \
    \) -delete && \
    # Remove leftover tmp and cache files
    rm -rf /tmp/* /var/cache/apk/* /root/.npm && \
    # Remove globally installed npm to save space and remove vulnerability
    npm r -g npm

# Copy build artifacts from the builder stage
COPY --from=builder --chown=node:node /app/build ./build

# Make extra sure build sourcemaps are deleted
RUN find build -name "*.map" -delete

# Prepare a data volume with appropriate permissions for persistent data storage (app cannot create folder, because runs as node user)
RUN mkdir -p /data && chown -R node:node /data

# Switch to non-root user
USER node

# Set environment variable
ENV NODE_ENV=production

# Expose the port the app will run on
EXPOSE 3000

# Declare the volume to persist data outside the container
VOLUME ["/data"]

# Define the default command to launch the built app
CMD ["node", "build"]

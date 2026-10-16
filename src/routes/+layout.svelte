<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
	import '@fontsource-variable/quicksand';
	import '@fontsource-variable/sometype-mono';
	import '@fontsource-variable/urbanist';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<meta name="color-scheme" content="light dark" />
	<script>
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  	document.documentElement.dataset['theme'] = savedTheme ?? (prefersDark ? 'dark' : 'light');
	</script>
</svelte:head>

{@render children()}

<style>
	:global :root {
		color-scheme: light dark;
		
		--color-scale-5: #291c1c;
		--color-scale-4: #5d524d;
		--color-scale-3: #9e9089;
		--color-scale-2: #c0b7b2;
		--color-scale-1: #f0ece5;

		* {
			transition-property: color, background-color, border-color, outline-color, text-decoration-color;
			transition-duration: .5s;
			transition-timing-function: ease;
		}
	}

	@media screen {
		:global :root[data-theme="dark"] {
			--color-scale-5: #f0ece5;
			--color-scale-4: #c0b7b2;
			--color-scale-3: #9e9089;
			--color-scale-2: #5d524d;
			--color-scale-1: #291c1c;
		}
	}

  :global(body) {
    --spacing: 16px;

		--color-background: var(--color-scale-1);
		--color-border: var(--color-scale-2);
		--color-text: var(--color-scale-5);

		--font-heavy: 'Urbanist Variable', sans-serif;
		--font-regular: 'Quicksand Variable', sans-serif;
		--font-light: 'Sometype Mono Variable', monospace;

		box-sizing: border-box;
		:global(*, *::before, *::after) {
			box-sizing: inherit;
		}

		position: relative;
		margin: var(--spacing);

    color: var(--color-text);
		background-color: var(--color-background);
  }

	:global(.font-heavy) {
		font-family: var(--font-heavy);
		font-weight: 700;
		text-transform: uppercase;
		font-size: 1em;
	}

	:global(.font-regular) {
		font-family: var(--font-regular);
		font-weight: 400;
		font-size: .9em;
		letter-spacing: 2%;
	}

	:global(.font-light) {
		font-family: var(--font-light);
		font-weight: 100;
		font-size: 1em;
	}

	@media print {
		:global(body) {
			--color-background: none;

			margin: 1px;
		}
	}

	@page {
		size: A4 portrait;
		margin: 7mm;
	}
</style>
<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
	import '@fontsource-variable/quicksand';
	import '@fontsource-variable/sometype-mono';
	import '@fontsource-variable/urbanist';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

{@render children()}

<style>
  :global(body) {
    --spacing: 16px;
		
		--color-dark: #291c1c;
		--color-medium-dark: #5d524d;
		--color-medium: #9e9089;
		--color-medium-light: #c0b7b2;
		--color-light: #f0ece5;

		--color-border: var(--color-medium-light);

		--font-heavy: 'Urbanist Variable', sans-serif;
		--font-regular: 'Quicksand Variable', sans-serif;
		--font-light: 'Sometype Mono Variable', monospace;

		box-sizing: border-box;
		:global(*, *::before, *::after) {
			box-sizing: inherit;
		}

    color: var(--color-dark);
		background-color: var(--color-light);
    
		font-family: var(--font-regular);
    font-weight: 200;
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
</style>
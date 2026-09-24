<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
	import '@fontsource-variable/commissioner';
	import '@fontsource/barlow/200.css';
	import '@fontsource/barlow/600.css';
	import '@fontsource/barlow-condensed/200.css';
	import '@fontsource-variable/urbanist';
	import '@fontsource-variable/quicksand';
	import '@fontsource-variable/vazirmatn';
	import '@fontsource/fira-sans/200.css';
	import '@fontsource/fira-sans/600.css';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

{@render children()}

<style>
  :global(body) {
    --spacing: 16px;
		--color-job: #008786;
		--color-job-light: #249e91;
		--color-formation: #6a9f87;
		--color-formation-light: #81bea1;
		--color-main: #667f8c;
		--color-main-light: #7d9aa9;

    color: white;
    /* font-family: 'Commissioner Variable', sans-serif; */
    /* font-family: 'Urbanist Variable', sans-serif; */
    /* font-family: 'Quicksand Variable', sans-serif; */
    /* font-family: 'Vazirmatn Variable', sans-serif; */
    /* font-family: 'Fira Sans', sans-serif; */
    font-family: 'Barlow', sans-serif;
    font-weight: 200;
  }
</style>
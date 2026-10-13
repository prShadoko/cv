<script>
    import Mark from './Mark.svelte';

  const { readme } = $props();
</script>

<div id="readme">
  <Mark position="top-left" direction="right" />
  <Mark position="top-right" direction="left" />
  <Mark position="bottom-left" direction="top-right" />
  <Mark position="bottom-right" direction="top-left" />
  <div class="head font-light">readme.txt<span class="num">05</span></div>
  <div class="body">
    {#each readme as readmeBlock}
    <div>{readmeBlock}</div>
    {/each}
  </div>
</div>


<style>
  #readme {
    position: relative;
  }

  .body {
    padding: var(--spacing);
    display: flex;
    flex-direction: column;
    gap: calc(.5 * var(--spacing)) var(--spacing);

    :global .icon {
      width: 1em;
      height: 1em;
      margin-right: calc(var(--spacing) / 2);

      /* Make the icons vertically aligned with text*/
      display: inline-block;
      vertical-align: -0.125em;
      line-height: 0;
    }
  }
</style>
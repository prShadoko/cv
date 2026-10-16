<script>
    import Mark from './Mark.svelte';

  const { readme } = $props();
</script>

<div id="readme">
  <Mark position="top-left" direction="right" />
  <Mark position="top-right" direction="left" />
  <Mark position="bottom-left" direction="right" />
  <Mark position="bottom-right" direction="left" />

  <div class="head border font-light">readme.txt<span class="num">05</span></div>
  <div class="body border">
    {#each readme as readmeBlock}
    <div>{readmeBlock}</div>
    {/each}
  </div>
</div>


<style>
  #readme {
    position: relative;

    display: flex;
    flex-direction: column;
    gap: 1px;
  }

  .body {
    position: relative;

    display: flex;
    flex-direction: column;
    gap: calc(.5 * var(--spacing)) var(--spacing);
    
    padding: var(--spacing);
    flex-grow: 1;

    text-align: justify;

    &::after {
      position: absolute;
      bottom: 0;
      right: 0;
      padding: var(--spacing);
      content: '[EOF]';
      color: var(--color-scale-3);
      font-size: .8em;
    }
  }
</style>
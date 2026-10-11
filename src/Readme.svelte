<script>
  const { readme } = $props();
</script>

<div id="readme">
  <div class="head">Readme</div>
  <div class="body">
    {#each readme as readmeBlock}
    <div>{readmeBlock}</div>
    {/each}
  </div>
</div>


<style>
  .head {
    background-color: #127189;
    border-radius: 4px 4px 0 0;
    padding: calc(.5 * var(--spacing)) var(--spacing);
    font-weight: 600;
    font-size: 1.05rem;
  }

  .body {
    background-color: #1a87a3;
    border-radius: 0 0 4px 4px;
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
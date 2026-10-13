<script>
    import Mark from './Mark.svelte';

  const { hobbies } = $props();
</script>

<div id="hobbies">
  <Mark position="top-left" direction="right" />
  <Mark position="top-right" direction="left" />
  <div class="head font-light">loisirs.sav<span class="num">03</span></div>
  <div class="body">
    {#each hobbies as hobby}
    <div class="hobby">{hobby}</div>
    {/each}
  </div>
</div>


<style>
  #hobbies {
    position: relative;
  }
  
  .body {
    padding: var(--spacing);
    /* display: flex; */
    gap: calc(.5 * var(--spacing)) var(--spacing);
    /* flex-wrap: wrap; */
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
</style>
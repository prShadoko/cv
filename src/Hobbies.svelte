<script>
  const { hobbies } = $props();
</script>

<div id="hobbies">
  <div class="head">Loisirs</div>
  <div class="body">
    {#each hobbies as hobby}
    <div class="hobby">{hobby}</div>
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
    /* display: flex; */
    gap: calc(.5 * var(--spacing)) var(--spacing);
    /* flex-wrap: wrap; */
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
</style>
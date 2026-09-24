<script lang="ts">
  import Experience from '../Experience.svelte';

  const { data } = $props();
</script>

<div id="timeline">
  <div class="branch" id="main"></div>
  <div class="branch" id="formation"></div>
  <div class="branch" id="job"></div>
  <div id="xp">
    {#each data.experiences as experience, i}
    <Experience {...experience}></Experience>
    {/each}
  </div>
</div>

<style>
  #timeline {
    display: flex;
    flex-direction: row;
    gap: var(--spacing);
    width: fit-content;
    height: max-content;

    .branch {
      width: 8px;

      &#main {
        background-color: var(--color-main);
      }

      &#formation {
        background-color: var(--color-formation);
      }

      &#job {
        background-color: var(--color-job);
      }
    }
  }

  #xp {
    display: flex;
    flex-direction: column-reverse;
    gap: 8px;
    width: fit-content;
    height: max-content;
  }
</style>
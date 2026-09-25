<script lang="ts">
  import Timeline from '../Timeline.svelte';

  const { data } = $props();
</script>

<div id="timeline">
  <div id="branches">
    <div class="branch" id="main"></div>
    <div class="branch" id="formation"></div>
    <div class="branch" id="job"></div>
  </div>
  <Timeline experiences={data.experiences}></Timeline>
</div>

<style>
  #timeline {
    position: relative;
  }

  #branches {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 4px;
    display: flex;
    flex-direction: row;
    gap: var(--spacing);
    width: fit-content;
    height: 100%;

    .branch {
      width: 8px;
      height: 100%;

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
</style>
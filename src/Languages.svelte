<script>
    import Mark from './Mark.svelte';

  const { languages } = $props();
</script>

<div id="languages">
  <Mark position="top-left" direction="right" />
  <Mark position="top-right" direction="left" />

  <div class="head border font-light">langues.xlf<span class="num">02</span></div>
  <div class="body border">
    {#each languages as { lang, level, certificates }}
    <div class="language">
      <div class="label">{lang}</div>
      <div class="level">{level}</div>
      <div class="certificates">
        {#each certificates as { name, year, score }}
        <div class="certificate">{name} {score} ({year})</div>
        {/each}
      </div>
    </div>
    {/each}
  </div>
</div>


<style>
  #languages {
    position: relative;

    display: flex;
    flex-direction: column;
    gap: 1px;
  }

  .body {
    padding: var(--spacing);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: calc(.5 * var(--spacing)) var(--spacing);
    
    .language {
      display: flex;
      justify-content: space-between;
      gap: calc(.5 * var(--spacing)) var(--spacing);

      & > * {
        display: inline-block;
      }

      & > .label {
        text-transform: capitalize;
      }

      & > .level {
        flex-grow: 1;
      }
    }
  }
</style>
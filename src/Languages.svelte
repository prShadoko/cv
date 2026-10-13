<script>
    import Mark from './Mark.svelte';

  const { languages } = $props();
</script>

<div id="languages">
  <Mark position="top-left" direction="right" />
  <Mark position="top-right" direction="left" />
  <div class="head font-light">langues.xlf<span class="num">02</span></div>
  <div class="body">
    {#each languages as { lang, level, certificates }}
    <div class="language">
      <span class="label">{lang}</span>
      <span class="level">{level}</span>
    </div>
    {#each certificates as { name, year, score }}
    <div class="certificate">
      <span class="name">{name}</span>
      <span class="year">({year})</span>
      <span class="score">{score}</span>
    </div>
    {/each}
    {/each}
  </div>
</div>


<style>
  #languages {
    position: relative;
  }

  .body {
    padding: var(--spacing);
    /* display: flex; */
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: calc(.5 * var(--spacing)) var(--spacing);

    .language {
      grid-column: 1;

      & > .label {
        text-transform: capitalize;
      }

      .level {
        flex-grow: 1;
      }
    }

    .certificate {
      grid-column: 2;

      .name,
      .year,
      .score {
        font-size: .9em;
      }
    }

    .level, .score {
      margin-left: 1em;
    }
  }
</style>
<script>
  const { languages } = $props();
</script>

<div id="languages">
  <div class="head">Langues</div>
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
  /*
  #1a87a3
  #127189
  
  #004757
  #b9cad0
  */
  .head {
    background-color: #667f8c;
    border-radius: 4px 4px 0 0;
    padding: calc(.5 * var(--spacing)) var(--spacing);
    font-weight: 600;
    font-size: 1.05rem;
  }

  .body {
    background-color: #7d9aa9;
    border-radius: 0 0 4px 4px;
    padding: var(--spacing);
    /* display: flex; */
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: calc(.5 * var(--spacing)) var(--spacing);

    .language {
      /* display: contents; */
      grid-column: 1;

      & > .label {
        /* grid-column: 1; */
        font-weight: 600;
        text-transform: capitalize;
      }
      /* &:not(:first-child) > .label {
        margin-top: var(--spacing);
      } */

      .level {
        flex-grow: 1;
      }
    }

    .certificate {
      grid-column: 2;

      .name,
      .year,
      .score {
        font-style: italic;
        font-size: .9em;
      }
    }

    .level, .score {
      margin-left: 1em;
    }
  }
</style>
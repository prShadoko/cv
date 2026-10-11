<script>
  const { abilities: abilitiesGroup } = $props();
</script>

<div id="abilities">
  <div class="head">Compétences</div>
  <div class="body">
    {#each abilitiesGroup as { category, abilities }}
    <div class="category">
      <div class="label">{category}</div>
      {#each abilities as { ability, level }}
      <div class="ability">
        <div class="label">{ability}</div>
        <div class={['level', `level-${level}`]}>
          {#each { length: 5 }}
          <div></div>
          {/each}
        </div>
      </div>
      {/each}
    </div>
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
  #abilities {
    height: fit-content;
  }

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
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    /* display: flex; */
    /* flex-direction: column; */
    /* gap: var(--spacing); */
    gap: calc(.5 * var(--spacing)) var(--spacing);

    .category {
      /* display: grid; */
      display: contents;
      /* grid-template-columns: repeat(2, 1fr); */
      /* gap: calc(.5 * var(--spacing)) var(--spacing); */

      & > .label {
        /* font-weight: 600; */
        text-transform: uppercase;
        grid-column: 1 / 3;
        border-bottom: 1px white solid;
      }
      &:not(:first-child) > .label {
        margin-top: var(--spacing);
      }

      .ability {
        & > .label {
          display: inline-block;
          background-color: #1a87a3;
          /* background-color: #1a87a3e6; */
          /* background-color: #1a87a3d0; */
          /* background-color: #127189; */
          border-radius: 4px;

          font-size: 1.05em;
          position: relative;
          z-index: 1;
          padding: 0 8px 4px;
          margin-left: 4px;
        }

        .level {
          margin-top: -8px;

          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: stretch;
          flex-wrap: nowrap;
          gap: 4px;
          
          & > div {
            width: 28px;
            height: .9lh;
            
            background-color: #ffffff;
            border-radius: 2px;
          }

          &.level-1 > div:nth-child(2),
          &.level-1 > div:nth-child(3),
          &.level-1 > div:nth-child(4),
          &.level-1 > div:nth-child(5),
          &.level-2 > div:nth-child(3),
          &.level-2 > div:nth-child(4),
          &.level-2 > div:nth-child(5),
          &.level-3 > div:nth-child(4),
          &.level-3 > div:nth-child(5),
          &.level-4 > div:nth-child(5) {
            background-color: #ffffff50;
          }
        }
      }
    }
  }
</style>
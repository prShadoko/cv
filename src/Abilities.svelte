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
        <div class="level">
          <div class={`level-${level}`}>
            {#each { length: 5 }}
            <div></div>
            {/each}
          </div>
        </div>
        <div class="label">{ability}</div>
      </div>
      {/each}
    </div>
    {/each}
  </div>
</div>


<style>
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
    gap: calc(.5 * var(--spacing)) var(--spacing);

    .category {
      display: contents;

      & > .label {
        color: #ffffff60;
        font-weight: 600;
        font-size: 2.6rem;
        text-transform: uppercase;
        text-align: right;
        grid-column: 1 / 3;
        margin-bottom: -.5em;
      }
      &:not(:first-child) > .label {
        margin-top: var(--spacing);
      }

      .ability {
        & > .label {
          display: inline-block;
          background-color: #1a87a3;
          /* TODO: use some blur or stick strictly to flat design? */
          /* background-color: #1a87a3a3; */
          /* backdrop-filter: blur(2px); */
          border-radius: 4px;

          font-size: 1.05em;
          padding: 4px 8px 0;
          margin-left: 4px;
        }

        .level {
          margin: 0 calc(-.25 * var(--spacing)) calc(-.75 * var(--spacing));
          background-color: #1a87a3;
          padding: calc(.25 * var(--spacing));
          border-radius: 4px;

          & > div {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: stretch;
            flex-wrap: nowrap;
            gap: 4px;
            
            & > div {
              flex-grow: 1;
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
  }
</style>
<script>
    import Mark from './Mark.svelte';

  const { abilities: abilitiesGroup } = $props();
</script>

<div id="abilities">
  <Mark position="top-left" direction="bottom" />
  <Mark position="top-right" direction="left" />
  <div class="head font-light">compétences.log<span class="num">01</span></div>
  <div class="body">
    {#each abilitiesGroup as { category, abilities }}
    <div class="category">
      <div class="label font-heavy">{category}</div>
      {#each abilities as { ability, level }}
      <div class="ability">
        <Mark position="top-left" direction="bottom-right" arm={3} color="var(--color-medium-light)" />
        <Mark position="top-right" direction="bottom-left" arm={3} color="var(--color-medium-light)" />
        <Mark position="bottom-left" direction="top-right" arm={3} color="var(--color-medium-light)" />
        <Mark position="bottom-right" direction="top-left" arm={3} color="var(--color-medium-light)" />
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
  #abilities {
    height: fit-content;
    position: relative;
  }

  .body {
    padding: var(--spacing);
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1px;

    .category {
      display: contents;

      & > .label {
        text-transform: uppercase;
        text-align: right;
        grid-column: 1 / 3;
        margin-bottom: 2px;
      }
      &:not(:first-child) > .label {
        margin-top: var(--spacing);
      }

      .ability {
        position: relative;

        & > .label {
          display: inline-block;
          background-color: var(--color-light);
          border-radius: 4px;

          padding: 0 4px;
        }

        .level {
          padding: calc(.25 * var(--spacing));

          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: stretch;
          flex-wrap: nowrap;
          gap: 4px;
          
          & > div {
            flex-grow: 1;
            height: .9lh;
            
            background-color: var(--color-medium-dark);
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
            background: none;
            border: solid 1px var(--color-dark);
          }
        }
      }
    }
  }
</style>
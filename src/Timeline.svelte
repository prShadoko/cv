<script>
  const { experiences } = $props();
</script>

<div id="timeline">
  <div id="branches">
    <div class="branch" id="main"></div>
    <div class="branch" id="formation"></div>
    <div class="branch" id="job"></div>
  </div>
  <div id="xp">
    {#each experiences as { branch, start, end = undefined, duration = undefined, title, location = undefined, missions = undefined, stack = undefined }, i}
    <div class={['peg', branch]}>
      <div></div>
    </div>
    <div class={['timestamp', branch]}>
      <div class="period">{start}{end ? ` - ${end}` : ''}</div>
      {#if duration}
      <div class="duration">{duration}</div>
      {/if}
    </div>
    <div class={['content', branch]}>
      <div class="title">{@html title}</div>
      {#if location}
      <div class="location">@&nbsp;{@html location}</div>
      {/if}
      {#if missions}
      <div class="missions">{@html missions.join(' ; ')}</div>
      {/if}
      {#if stack}
      <div class="stack">{@html stack.join(' ; ')}</div>
      {/if}
    </div>
    {/each}
  </div>
</div>


<style>
  /* prevent sup tags from increasing line height (https://css-tricks.com/snippets/css/prevent-superscripts-and-subscripts-from-affecting-line-height/) */
  :global(sup) {
    vertical-align: baseline;
    position: relative;
    top: -0.4em;
    line-height: 0;
  }

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

  #xp {
    position: relative;
    display: grid;
    grid-template-columns: 76px auto auto;
    row-gap: 8px;
    width: fit-content;
    height: max-content;
  }

  .peg {
    height: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;

    div {
      height: 16px;
    }
  }

  .timestamp,
  .content {  
    min-height: 2rem;
    line-height: 130%;
  }

  :global(.job) {
    &.content {
      background-color: var(--color-job-light);
    }

    &.timestamp,
    &.peg > div {
      background-color: var(--color-job);
    }
    &.peg > div {
      width: 28px;
      clip-path: path("M 28,12 v -8 H 14.926826 a 8,8,0,1,0,0,8 Z");
    }
  }

  :global(.formation) {
    &.content {
      background-color: var(--color-formation-light);
    }
    
    &.timestamp,
    &.peg > div {
      background-color: var(--color-formation);
    }
    &.peg > div {
      width: 52px;
      clip-path: path("M 52,12 v -8 H 14.926826 a 8,8,0,1,0,0,8 Z");
    }
  }

  :global(.main) {
    &.content {
      background-color: var(--color-main-light);
    }
    
    &.timestamp,
    &.peg > div {
      background-color: var(--color-main);
    }
    &.peg > div {
      width: 76px;
      clip-path: path("M 76,12 v -8 H 14.926826 a 8,8,0,1,0,0,8 Z");
    }
  }

  /*
  #1a87a3
  #127189

  #004757
  #b9cad0
  */

  .timestamp {
    display: inline-flex;
    flex-direction: column;
    justify-content: center;
    flex-shrink: 0;
    padding: var(--spacing);
    border-radius: 4px 0 0 4px;

    text-align: center;
    width: 76px;
    
    .period {
      /* font-family: 'Barlow Condensed', sans-serif; */
      letter-spacing: -3%;
    }
  }

  .content {
    display: inline-flex;
    flex-direction: row;
    flex-wrap: wrap;
    flex-grow: 1;
    justify-content: space-between;
    align-items: center;
    padding: var(--spacing);
    border-radius: 0 4px 4px 0;

    & > * {
      flex-shrink: 0;
      flex-grow: 0;
    }
  }

  .title {
    font-size: 1.05rem;
    font-weight: 600;
    flex-shrink: 0;
  }

  .location {
    width: fit-content;
  }

  .missions,
  .stack {
    flex-basis: 100%;
  }

  .duration,
  .location,
  .stack {
    font-size: .9em;
  }

  .stack {
    font-style: italic;
  }

  /* add spacing after title row, only if there is another row */
  .location + * {
    margin-top: .3em;
  }
</style>
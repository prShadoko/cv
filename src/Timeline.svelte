<script>
    import Mark from './Mark.svelte';

  const { experiences } = $props();
</script>

<div id="timeline" class="border">
  <Mark position="top-left" direction="right" />
  <Mark position="bottom-right" direction="top" />

  {#each experiences as { branch, start, end = undefined, duration = undefined, title, location = undefined, missions = undefined, stack = undefined }, i}
  <div class={['timestamp', branch, 'font-light']}>
    {#if duration}
    <div class="duration">{duration} /&nbsp;</div>
    {/if}
    <div class="period">{start}{end ? `-${end}` : ''}<span class="font-light">&nbsp;&gt;&gt;&gt;&gt;&nbsp;</span></div>
  </div>
  <div class={['content', branch]}>
    <div class="title font-heavy">{@html title}</div>
    {#if location}
    <div class="location font-light">@&nbsp;{@html location}</div>
    {/if}
    {#if missions}
    <!-- <div class="missions">{@html missions.map((m) => m.replace(' ', '&nbsp;')).join('&nbsp;/ ')}</div> -->
    <div class="missions">
      {#each missions as m, i}
      <div>{@html m}</div>
      {/each}
    </div>
    {/if}
    {#if stack}
    <div class="stack font-light">[ {@html stack.join(' | ')} ]</div>
    {/if}
  </div>
  {/each}
</div>


<style>
  /* prevent sup tags from increasing line height (https://css-tricks.com/snippets/css/prevent-superscripts-and-subscripts-from-affecting-line-height/) */
  :global(sup) {
    vertical-align: baseline;
    position: relative;
    top: -0.4em;
    line-height: 0;
    text-transform: none;
  }

  .sep {
    color: var(--color-medium);
  }

  #timeline {
    position: relative;
    
    display: inline-grid;
    grid-template-columns: auto auto;
    /* gap: calc(.5 * var(--spacing)); */
    gap: var(--spacing) 0;
    width: fit-content;
    height: fit-content;
    padding: var(--spacing);
  }

  .timestamp,
  .content {  
    line-height: 1.3rem;
    padding: calc(.5 * var(--spacing)) 0;
  }

  .timestamp {
    display: inline-flex;
    justify-content: end;
    letter-spacing: -8%;
    font-size: .8rem;
    /* padding-right: 0; */

    .duration {
      color: var(--color-medium);
    }

    .period > span {
      display: inline-block;
      color: var(--color-medium);
    }
  }

  .content {
    display: inline-flex;
    flex-direction: row;
    flex-wrap: wrap;
    flex-grow: 1;
    justify-content: space-between;

    & > :not(:last-child) {
      margin-bottom: 4px;
    }
  }

  .title {
    font-size: 1.05rem;
    flex-shrink: 0;
  }

  .location {
    width: fit-content;
    font-size: .8rem;
  }

  .missions,
  .stack {
    flex-basis: 100%;
  }

  .stack {
    font-size: .75rem;
  }
</style>
<script>
    import Mark from './Mark.svelte';

  const { experiences } = $props();
</script>

<div id="timeline">
  <Mark position="top-left" direction="right" />
  <Mark position="bottom-right" direction="top" />
  {#each experiences as { branch, start, end = undefined, duration = undefined, title, location = undefined, missions = undefined, stack = undefined }, i}
  <div class={['timestamp', branch, 'font-light']}>
    {#if duration}
    <div class="duration">{duration} /&nbsp;</div>
    {/if}
    <div class="period">{start}{end ? `-${end}` : ''}<span class="font-light">&gt;&gt;&gt;&gt;</span></div>
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
      <div>{@html m}{#if i < missions.length - 1}&nbsp;/ {/if}</div>
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

  #timeline {
    position: relative;
    
    display: grid;
    grid-template-columns: auto auto;
    /* gap: calc(.5 * var(--spacing)); */
    gap: var(--spacing) calc(.25 * var(--spacing));
    width: fit-content;
    height: fit-content;
    padding: var(--spacing);

    color: #291c1c;
  }

  .timestamp,
  .content {  
    line-height: 1.3rem;
    padding: calc(.5 * var(--spacing));
  }

  .timestamp {
    display: inline-flex;
    justify-content: end;
    letter-spacing: -8%;
    font-size: .8rem;
    padding-right: 0;

    .duration {
      color: var(--color-medium);
    }

    .period > span {
      display: inline-block;
      padding: 0 calc(.5 * var(--spacing));
      color: var(--color-medium);
    }
  }

  .content {
    display: inline-flex;
    flex-direction: row;
    flex-wrap: wrap;
    flex-grow: 1;
    justify-content: space-between;
    padding-left: 0;

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
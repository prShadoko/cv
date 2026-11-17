<script lang="ts">
  import Mark from './Mark.svelte';
  import type { Experience } from './routes/data';

  const { experiences }: { experiences: Experience[] } = $props();
  const jobs = $derived(experiences.filter(({ branch }) => branch === 'job'));
  const education = $derived(experiences.filter(({ branch }) => branch === 'formation'));
</script>

<div id="timeline" class="body border">
  <Mark position="top-left" direction="right" />
  <Mark position="bottom-right" direction="top" />

  <div class="head border font-light">expériences.log<span class="num">01-A</span></div>
  {#each jobs as { branch, start, end = undefined, duration = undefined, title, location = undefined, missions = undefined, stack = undefined }, i}
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

  <div class="head border font-light">
    <Mark position="top-left" direction="right" />
    <Mark position="top-right" direction="left" />
    <span>études.log</span>
    <span class="num">01-B</span>
  </div>
  
  {#each education as { branch, start, end = undefined, duration = undefined, title, location = undefined, missions = undefined, stack = undefined }, i}
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
    color: var(--color-scale-3);
  }

  #timeline {
    position: relative;
    gap: 1px;

    display: inline-grid;
    grid-template-columns: auto auto;
    gap: var(--spacing) 0;
    padding-bottom: var(--spacing);

    .head {
      grid-column: 1 / 3;
    }
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
    padding-left: var(--spacing);

    .duration {
      color: var(--color-scale-3);
    }

    .period > span {
      display: inline-block;
      color: var(--color-scale-3);
    }
  }

  .content {
    display: inline-flex;
    flex-direction: row;
    flex-wrap: wrap;
    flex-grow: 1;
    justify-content: space-between;
    padding-right: var(--spacing);

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
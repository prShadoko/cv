<script>
  const { branch, start, end = undefined, duration = undefined, title, location = undefined, missions = undefined, stack = undefined } = $props();
</script>

<div class={['experience', branch]}>
  <div class="peg"></div>
  <div class="timestamp">
    <div class="period">{start}{end ? ` - ${end}` : ''}</div>
    {#if duration}
    <div class="duration">{duration}</div>
    {/if}
  </div>
  <div class="content">
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
</div>

<style>
  .experience {
    position: relative;
    display: flex;
    min-height: 4em;
    /* overflow: hidden; */

    line-height: 130%;

    :global(sup) {
      vertical-align: baseline;
      position: relative;
      top: -0.4em;
      line-height: 0;
    }

    &.job {
      & > .content {
        background-color: var(--color-job-light);
      }

      & > .timestamp,
      .peg {
        background-color: var(--color-job);
      }

      .peg {
        /* aspect-ratio: 1.75; */
        /* clip-path: shape(from 57.14% 50%,arc by -28.57% 50% of 28.57% 50% small cw,arc by -28.57% -50% of 28.57% 50% small cw,arc by 28.57% -50% of 28.57% 50% small cw,arc by 28.57% 50% of 28.57% 50% small cw,close,close,move to 42.86% 25%,hline by 57.14%,vline by 50%,hline by -57.14%,close); */
        /* clip-path: path("m 40.99078,89.669979 a 2.1166668,2.1166668 0 0 0 -2.116667,2.116667 2.1166668,2.1166668 0 0 0 2.116667,2.116666 2.1166668,2.1166668 0 0 0 1.833479,-1.058333 h 3.458187 V 90.728312 H 42.824259 A 2.1166668,2.1166668 0 0 0 40.99078,89.669979 Z"); */
        clip-path: path("M 28.5 12 V 4 H 15.42682625 A 8 8 0 1 0 15.42682625 12 Z");
        position: absolute;
        height: 16px;
        width: 29px;
        top: 19px;
        left: -28px;
        z-index: 1;
      }
    }

    &.formation {
      & > .content {
        background-color: var(--color-formation-light);
      }
      
      & > .timestamp,
      .peg {
        background-color: var(--color-formation);
      }
    }

    &.main {
      & > .content {
        background-color: var(--color-main-light);
      }
      
      & > .timestamp,
      .peg {
        background-color: var(--color-main);
      }
    }

    /*
    #1a87a3
    #127189

    #004757
    #b9cad0
    */
  }

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
    font-size: 1.05em;
    font-weight: 600;
    flex-shrink: 0;
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

  /* add spacing after title only if there is another row */
  .location + * {
    margin-top: .3em;
  }
</style>
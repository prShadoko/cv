<script lang="ts">
  import Abilities from '../Abilities.svelte';
  import Contact from '../Contact.svelte';
  import Hobbies from '../Hobbies.svelte';
  import Languages from '../Languages.svelte';
  import Mark from '../Mark.svelte';
  import Readme from '../Readme.svelte';
  import Timeline from '../Timeline.svelte';

  const { data } = $props();

  const terminal = [
    `ps -C 'candidate_search'<br />  PID TTY         TIME CMD<br /> 1337 tty1    00:00:00 candidate_search`,
    `kill 1337`,
    `sudo hire \\<br />--name='thomas richard'\\<br />--job='dev backend'<br />Password:█`,
  ];
  const footerMessage = '========WW91IGFjdHVhbGx5IHRvb2sgdGhlIHRpbWUgdG8gZGVjb2RlIHRoaXM/IEkgbXVzdCBoYXZlIGNhdWdodCB5b3VyIGV5ZSwgdGhlbi4gV2VsbCwgeW91IGtub3cgd2hhdCB0byBkbyBuZXh04oCm========';
</script>

<div class="main">
  <div id="header" class="border font-heavy">
    <Mark position="top-left" direction="bottom-right" />
    <Mark position="top-right" direction="bottom-left" />
    <div id="titles">
      <h1>Développeur Full-Stack</h1>
      <h2>Thomas RICHARD</h2>
    </div>
    <div id="photo">
      <Mark position="top-left" direction="bottom-right" color="var(--color-medium-light)" />
      <Mark position="top-right" direction="bottom-left" color="var(--color-medium-light)" />
      <Mark position="bottom-left" direction="top-right" color="var(--color-medium-light)" />
      <Mark position="bottom-right" direction="top-left" color="var(--color-medium-light)" />
      <img src="octopus.jpg" alt="my face (almost)" />
    </div>
  </div>
  <Timeline experiences={data.experiences}></Timeline>
  <div id="aside">
    <Abilities abilities={data.abilities}></Abilities>
    <Languages languages={data.languages}></Languages>
    <Hobbies hobbies={data.hobbies}></Hobbies>
    <Contact contact={data.contact}></Contact>
    <div id="terminal" class="font-light">
    {#each terminal as t}
    <div>{@html t}</div>
    {/each}
    </div>
  </div>
  <Readme readme={data.readme}></Readme>
  <div id="footer" class="border font-light">
    <Mark position="bottom-left" direction="top-right" />
    <Mark position="bottom-right" direction="top-left" />
    {footerMessage}
  </div>
</div>


<style>
.main {
  position: relative;

  width: 1100px;
  /* Make it look nice to print on A4 */
  aspect-ratio: 210 / 297;
  margin: auto;

  display: grid;
  grid-template-columns: auto auto;
  grid-template-rows: auto auto 1fr auto;
  gap: 1px;

  border: 1px solid var(--color-border);

  :global(& > *) {
    display: inline-block;
  }

  #header {
    --header-spacing: 1.6rem;

    padding: var(--header-spacing);
    text-align: right;

    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: var(--header-spacing);

    #titles,
    #photo {
      display: inline-block;
    }

    #titles {
      flex-grow: 1;

      h1, h2 {
        margin: 0;
      }

      h1 {
        font-size: 4rem;
      }
      
      h2 {
        font-size: 1.8rem;
      }
    }
    
    #photo {
      position: relative;
      
      img {
        aspect-ratio: 1 / 1;
        height: 9rem;
        clip-path: circle(50%);
        background-color: pink;
      }
    }
  }

  #aside {
    display: flex;
    flex-direction: column;
    gap: 1px;
  }

  #terminal {
    flex-grow: 1;
    padding: calc(.5 * var(--spacing));
    background-color: var(--color-medium-light);
    color: var(--color-medium-dark);
    font-size: .8em;

    & > div {
      white-space: pre-wrap;
      &::before {
        content: '$> ';
      }
    }
  }

  #header,
  :global(#readme),
  #footer {
    grid-column: 1 / 3;
  }

  #footer {
    padding: calc(.5 * var(--spacing)) var(--spacing);
    font-size: .75em;
    color: var(--color-medium);
    text-align: center;
  }
}

/* GLOBAL STYLES */

/* TODO: add animations */
:global .glitch {
  animation: 1.5s step-end 0s infinite glitch-color;
}

@keyframes glitch-color {
  0% {
    box-shadow: 6px 2px magenta, -3px -4px cyan, -8px 5px yellow;
    text-shadow: 6px 2px magenta, -3px -4px cyan, -8px 5px yellow;
  }
  5% {
    box-shadow: -2px 4px magenta, -6px -6px cyan, 0px 2px yellow;
    text-shadow: -2px 4px magenta, -6px -6px cyan, 0px 2px yellow;
  }
  13% {
    box-shadow: 6px 3px magenta, -3px -4px cyan, 2px -5px yellow;
    text-shadow: 6px 3px magenta, -3px -4px cyan, 2px -5px yellow;
  }
  20% {
    box-shadow: 3px -1px magenta, -2px -6px cyan, 0px 2px yellow;
    text-shadow: 3px -1px magenta, -2px -6px cyan, 0px 2px yellow;
  }
  30% {
    box-shadow: -2px -4px magenta, 0px 6px cyan, 6px 3px yellow;
    text-shadow: -2px -4px magenta, 0px 6px cyan, 6px 3px yellow;
  }
  40% {
    box-shadow: none;
    text-shadow: none;
  }
}

:global .border {
  border: 1px solid var(--color-border);
  margin: -1px;
}

:global .head {
  margin: -1px;
  padding: calc(.5 * var(--spacing)) var(--spacing);

  display: flex;
  justify-content: space-between;

  .num {
    color: var(--color-medium);
  }
}

:global .button {
  position: relative;
  display: inline-block;
  padding: 0 calc(.75 * var(--spacing));
  cursor: pointer;
  
  &::before,
  &::after {
    content: '';
    position: absolute;
    border: 1px solid var(--color-medium);
    width: 4px;
    top: -1px;
    bottom: -1px;
  }
  
  &::before {
    border-right: none;
    left: -1px;
  }
  
  &::after {
    border-left: none;
    right: -1px;
  }
}
</style>
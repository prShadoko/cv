<script lang="ts">
  import Abilities from '../Abilities.svelte';
  import Contact from '../Contact.svelte';
  import Hobbies from '../Hobbies.svelte';
  import Languages from '../Languages.svelte';
  import Mark from '../Mark.svelte';
  import Metadata from '../Metadata.svelte';
  import Readme from '../Readme.svelte';
  import Timeline from '../Timeline.svelte';
  import { onMount } from 'svelte';
  import { Bug, BugOff, Moon, Printer, Sun, X } from '@lucide/svelte';

  const { data } = $props();
  let isDarkTheme = $state(undefined);
  let isGlitching = $state(undefined);
  let themeButton, glitchButton, printButton;

  const terminal = [
    `pkill candidate_search`,
    `sudo hire \\<br />   --name='thomas richard' \\<br />   --job='dev backend'<br />Password:█`,
  ];
  const footerMessage = '========WW91IGFjdHVhbGx5IHRvb2sgdGhlIHRpbWUgdG8gZGVjb2RlIHRoaXM/IEkgbXVzdCBoYXZlIGNhdWdodCB5b3VyIGV5ZSwgdGhlbi4gV2VsbCwgeW91IGtub3cgd2hhdCB0byBkbyBuZXh04oCm========';

  const toggleTheme = () => {
    isDarkTheme = !isDarkTheme;
  };
  $effect(() => {
    if (isDarkTheme != undefined) {
      document.documentElement.setAttribute('data-theme', isDarkTheme ? 'dark' : 'light');
      localStorage.setItem('theme', isDarkTheme ? 'dark' : 'light');
    }
  });

  const glitchTargets = [
    'header',
    'timeline',
    'abilities',
    'languages',
    'hobbies',
    'contact',
    'readme',
    'terminal',
    'footer',
  ];

  const glitchDuration = 750; // ms
  const glitchDelay = { min: 500, max: 4000 }; // ms
  const glitch = () => {
    if (!isGlitching) {
      return;
    }

    const delay = Math.floor(glitchDelay.min + Math.random() * glitchDelay.max );

    setTimeout(
      () => {
        // We could clear the timeout before it triggers but this will do the job
        if (!isGlitching) {
          return;
        }
        const id = glitchTargets[Math.floor(Math.random() * glitchTargets.length)];
        const elt = document.getElementById(id);
        elt.classList.add('glitch');

        setTimeout(
          () => {
            elt.classList.remove('glitch');
            glitch();
          },
          glitchDuration
        );
      },
      delay
    );
  }
  const toggleGlitch = () => {
    isGlitching = !isGlitching;
    localStorage.setItem('glitch', isGlitching);
  };

  onMount(() => {
    isDarkTheme = document.documentElement.dataset['theme'] === 'dark';
    themeButton.addEventListener('click', toggleTheme);

    isGlitching = localStorage.getItem('glitch') === 'true' ?? true;
    glitchButton.addEventListener('click', () => {
      toggleGlitch();
      glitch();
    });
    glitch();

    printButton.addEventListener('click', () => print());

    return () => {
      isGlitching = false;
      glitchButton.removeEventListener('click', toggleGlitch);
      printButton.removeEventListener('click', print);
    };
  });
</script>

<div id="buttons">
  <button id="theme-button" style={`--button-tooltip: '${isDarkTheme ? 'Dark theme' : 'Light theme'}';`} bind:this={themeButton}>
    {#if isDarkTheme}<Moon class="icon" />{:else}<Sun class="icon" />{/if}
  </button>
  <button id="glitch-button" style={`--button-tooltip: '${isGlitching ? 'Disable glitch' : 'Enable glitch'}';`} bind:this={glitchButton}>
    {#if isGlitching}<Bug class="icon" />{:else}<BugOff class="icon" />{/if}
  </button>
  <button id="print-button" style={`--button-tooltip: 'Print';`} bind:this={printButton}>
    <Printer class="icon" />
  </button>
</div>

<div class="main" style="--glitch-duration: {`${glitchDuration / 1000}s`};">
  <div id="header" class="border font-heavy">
    <Mark position="top-left" direction="bottom-right" />
    <Mark position="top-right" direction="bottom-left" />
    <div id="titles">
      <h1>Développeur Full-Stack</h1>
      <h2>Thomas RICHARD</h2>
    </div>
    <div id="photo">
      <Mark position="top-left" direction="bottom-right" color="var(--color-scale-2)" />
      <Mark position="top-right" direction="bottom-left" color="var(--color-scale-2)" />
      <Mark position="bottom-left" direction="top-right" color="var(--color-scale-2)" />
      <Mark position="bottom-right" direction="top-left" color="var(--color-scale-2)" />
      <img src="octopus.jpg" alt="my face (almost)" />
    </div>
  </div>
  <Timeline experiences={data.experiences}></Timeline>
  <div id="aside">
    <Abilities abilities={data.abilities}></Abilities>
    <Languages languages={data.languages}></Languages>
    <Hobbies hobbies={data.hobbies}></Hobbies>
    <Contact contact={data.contact}></Contact>
    <Metadata metadata={data.metadata}></Metadata>
    <div id="terminal" class="font-light border">
      <div class="head border">terminal<X class="icon" strokeWidth={3.5} /></div>
      <div class="body">
        {#each terminal as t}
        <div>{@html t}</div>
        {/each}
      </div>
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
#buttons {
  --color-border-button: var(--color-scale-2);
  --color-border-button-hover: var(--color-scale-3);

  position: fixed;
  top: var(--spacing);
  right: var(--spacing);
  z-index: 100;
  display: flex;
  flex-direction: column;
  align-items: end;
  gap: calc(.5 * var(--spacing));

  :global(.icon) {
    margin: calc(.5 * var(--spacing));
    width: 1.6em;
    height: 1.6em;
  }

  button {
    display: flex;
    align-items: center;

    padding: 0;
    width: fit-content;

    border: none;
    background-color: var(--color-background);
    border: 1px solid var(--color-border-button);
    border-radius: 4px;
    box-shadow: 0px 2px 1px var(--color-border-button);
    cursor: pointer;
    color: var(--color-text);
    
    overflow: hidden;
    
    &::after {
      opacity: 0;
      width: 0;

      padding-right: 0;

      content: var(--button-tooltip);
      text-wrap: nowrap;

      transition: all .5s;
    }
    
    &:hover {
      border: 1px solid var(--color-border-button-hover);
      box-shadow: 0px 2px 1px var(--color-border-button-hover);

      &::after {
        opacity: 100%;
        width: calc-size(fit-content, size);
        padding-right: calc(.5 * var(--spacing));
      }
    }
  }
}

.main {
  position: relative;

  width: 1100px;
  /* Make it look nice to print on A4 (7mm margins) */
  aspect-ratio: calc(210 - 2 * 7)  / calc(297 - 2 * 7);
  margin: auto;

  display: grid;
  grid-template-columns: auto auto;
  grid-template-rows: auto auto 1fr auto;
  gap: 1px;

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
        font-size: 2.4rem;
      }
    }
    
    #photo {
      position: relative;
      
      img {
        display: block;
        aspect-ratio: 1 / 1;
        height: 9rem;
        clip-path: circle(50%);
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

    & > .head > :global(.icon) {
      height: 1em;
      width: 1em;
      color: var(--color-scale-3);
    }
    
    & > .body {
      padding: calc(.5 * var(--spacing));
      font-size: .75rem;
      div {
        white-space: pre-wrap;
        &::before {
          content: '$> ';
        }
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
    color: var(--color-scale-3);
    text-align: center;
  }
}

/* GLOBAL STYLES */

:global .glitch {
  animation: var(--glitch-duration) step-end 0s 1 glitch-color, var(--glitch-duration) step-end 0s 1 glitch-deform;
}

@keyframes glitch-color {
  0% {
    filter: drop-shadow(6px 2px magenta) drop-shadow(-3px -4px cyan) drop-shadow(-8px 5px yellow);
  }
  10% {
    filter: drop-shadow(-2px 4px magenta) drop-shadow(-6px -6px cyan) drop-shadow(0px 2px yellow);
  }
  26% {
    filter: drop-shadow(6px 3px magenta) drop-shadow(-3px -4px cyan) drop-shadow(2px -5px yellow);
  }
  40% {
    filter: drop-shadow(3px -1px magenta) drop-shadow(-2px -6px cyan) drop-shadow(0px 2px yellow);
  }
  60% {
    filter: drop-shadow(-2px -4px magenta) drop-shadow(0px 6px cyan) drop-shadow(6px 3px yellow);
  }
  80% {
    filter: none;
  }
}

@keyframes glitch-deform {
  0% {
    transform: skew(0, -1deg);
  }
  10% {
    transform: skew(2deg, 0);
  }
  26% {
    transform: skew(0, 5deg), translate(6px, 0);
  }
  40% {
    transform: skew(0), translate(-2px, 4px);
  }
  60% {
    transform: none;
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
  align-items: center;

  font-weight: 600;

  .num {
    color: var(--color-scale-3);
  }
}

:global(a) {
  /* inherit caused a delay on the color transition */
  color: var(--color-text);
  text-decoration: none;
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
    border: 1px solid var(--color-scale-3);
    width: 4px;
    top: -1px;
    bottom: -1px;

    transition: all .2s ease;
  }
  
  &::before {
    border-right: none;
    left: -1px;
  }
  
  &::after {
    border-left: none;
    right: -1px;
  }

  &:hover {
    &::before,
    &::after {
      width: calc(1px + 50%);
      top: -4px;
      bottom: -4px;
    }
  }
}
	
@media print {
  #buttons {
    display: none;
  }

  .main {
    margin: 0;
  }

  :global .glitch {
    animation: none;
  }
}
</style>
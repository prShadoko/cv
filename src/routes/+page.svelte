<script lang="ts">
  import Abilities from '../Abilities.svelte';
  import Contact from '../Contact.svelte';
  import Hobbies from '../Hobbies.svelte';
  import Languages from '../Languages.svelte';
  import Mark from '../Mark.svelte';
  import Readme from '../Readme.svelte';
  import Timeline from '../Timeline.svelte';

  const { data } = $props();
</script>

<div class="body">
  <div id="header" class="font-heavy">
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
  <Abilities abilities={data.abilities}></Abilities>
  <Languages languages={data.languages}></Languages>
  <Hobbies hobbies={data.hobbies}></Hobbies>
  <Contact contact={data.contact}></Contact>
  <div id="terminal" class="font-light">$&gt; sudo hire --name='thomas richard'<br />Password:█</div>
  <Readme readme={data.readme}></Readme>
</div>


<style>
/* TODO: add animations */
/* :global .glitch {
  box-shadow: 6px 2px magenta, -3px -4px cyan, 2px -5px yellow;
  text-shadow: 6px 2px magenta, -3px -4px cyan, 2px -5px yellow;
} */

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

.body {
  position: relative;

  width: 1100px;
  margin: auto;

  display: grid;
  /* align-content: start; */
  grid-template-columns: 5fr 2fr;
  grid-template-rows: repeat(5, auto) 1fr auto;
  gap: 1px;

  border: 1px solid var(--color-border);

  :global(& > *) {
    border: 1px solid var(--color-border);
    margin: -1px;
  }

  #header {
    --header-spacing: 1.6rem;

    grid-column: 1 / 3;
    grid-row: 1;

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

  :global #timeline {
    grid-column: 1;
    grid-row: 2 / 7;
  }

  :global #abilities {
    grid-column: 2;
    grid-row: 2;
  }

  :global #languages {
    grid-column: 2;
    grid-row: 3;
  }

  :global #hobbies {
    grid-column: 2;
    grid-row: 4;
  }

  :global #contact {
    grid-column: 2;
    grid-row: 5;
  }

  #terminal {
    grid-column: 2;
    grid-row: 6;

    padding: calc(.25 * var(--spacing));
    background-color: var(--color-medium-light);
    color: var(--color-medium-dark);
    font-size: .6em;
  }

  :global #readme {
    grid-column: 1 / 3;
    grid-row: 7;
  }

  :global .head {
    border: 1px solid var(--color-border);
    margin: -1px;
    padding: calc(.5 * var(--spacing)) var(--spacing);

    display: flex;
    justify-content: space-between;

    .num {
      color: var(--color-medium);
    }
  }
}
</style>
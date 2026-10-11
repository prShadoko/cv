<script lang="ts">
  import Abilities from '../Abilities.svelte';
  import Contact from '../Contact.svelte';
  import Hobbies from '../Hobbies.svelte';
  import Languages from '../Languages.svelte';
  import Readme from '../Readme.svelte';
  import Timeline from '../Timeline.svelte';

  const { data } = $props();
</script>

<div class="body">
  <Timeline experiences={data.experiences}></Timeline>
  <Abilities abilities={data.abilities}></Abilities>
  <!-- <Languages languages={data.languages}></Languages> -->
  <Languages languages={data.languages}></Languages>
  <Hobbies hobbies={data.hobbies}></Hobbies>
  <Contact contact={data.contact}></Contact>
  <Readme readme={data.readme}></Readme>
</div>


<style>
.body {
  min-width: 1200px;
  width: 70%;
  margin: auto;

  display: grid;
  grid-template-columns: 1fr auto;
  /* grid-template-rows: repeat(6, auto); */
  /* grid-auto-rows: auto; */
  gap: var(--spacing);

  :global #timeline {
    grid-column: 1;
    grid-row: 1 / 6;
  }

  /* #grid-abilities { */
  :global #abilities {
    grid-column: 2;
    grid-row: 1;
  }

  :global #languages {
    grid-column: 2;
    grid-row: 2;
  }

  :global #hobbies {
    grid-column: 2;
    grid-row: 3;
  }

  :global #contact {
    grid-column: 2;
    grid-row: 4;
  }
  
  :global #readme {
    grid-column: 1 / 3;
    grid-row: 6;
  }

  .todo {
    padding: var(--spacing);
    background-color: darkslategrey;
  }
}
</style>
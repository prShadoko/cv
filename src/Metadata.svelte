<script>
  const { metadata } = $props();

  import { Globe, CodeXml } from '@lucide/svelte';
  import Mark from './Mark.svelte';
</script>

<div id="metadata">
  <Mark position="top-left" direction="right" />
  <Mark position="top-right" direction="left" />
  <Mark position="bottom-left" direction="right" />
  <Mark position="bottom-right" direction="left" />

  <div class="head border font-light">.metadata<span class="num">05</span></div>
  <div class="body border">
    <div>
      <a href="{metadata.web}" class="button"><Globe class="icon" />{metadata.web}</a>
    </div>
    <div>
      <a href="{metadata.source}" class="button"><CodeXml class="icon" />{metadata.source}</a>
    </div>
  </div>
</div>


<style>
  #metadata {
    position: relative;

    display: flex;
    flex-direction: column;
    gap: 1px;
  }

  .body {
    padding: var(--spacing);
    display: flex;
    flex-direction: column;
    gap: calc(.5 * var(--spacing)) var(--spacing);

    :global(.icon) {
      width: 1em;
      height: 1em;
      margin-right: calc(var(--spacing) / 2);

      /* Make the icons vertically aligned with text*/
      display: inline-block;
      vertical-align: -0.125em;
      line-height: 0;
    }
  }
</style>
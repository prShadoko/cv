<script>
  const { contact } = $props();

  import { Mail, MapPin, Phone } from '@lucide/svelte';
  import Mark from './Mark.svelte';
</script>

<div id="contact">
  <Mark position="top-left" direction="right" />
  <Mark position="top-right" direction="left" />
  <Mark position="bottom-left" direction="right" />
  <Mark position="bottom-right" direction="left" />

  <div class="head border font-light">contact.vcf<span class="num">04</span></div>
  <div class="body border">
    <div>
      <a href="tel:{contact.phone}" class="button glitchable-before glitchable-after"><Phone class="icon" />{contact.phone}</a>
    </div>
    <div>
      <a href="mailto:{contact.email}" class="button glitchable-before glitchable-after"><Mail class="icon" />{contact.email}</a>
    </div>
    <div>
      <a href={contact.addressMap} target="_blank" class="button glitchable-before glitchable-after"><MapPin class="icon" />{@html contact.address}</a>
    </div>
  </div>
</div>


<style>
  #contact {
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

    :global .icon {
      width: 1em;
      height: 1em;
      margin-right: calc(var(--spacing) / 2);

      /* Make the icons vertically aligned with text*/
      display: inline-block;
      vertical-align: -0.125em;
      line-height: 0;
    }

    a {
      color: inherit;
      text-decoration: none;
    }
  }
</style>
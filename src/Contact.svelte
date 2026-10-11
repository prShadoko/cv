<script>
  const { contact } = $props();

  import { Mail, MapPin, MoveRight, Phone } from '@lucide/svelte';
</script>

<div id="contact">
  <div class="head">Contact</div>
  <div class="body">
    <div>
      <a href="tel:{contact.phone}"><Phone class="icon" />{contact.phone}</a>
    </div>
    <div>
      <a href="mailto:{contact.email}"><Mail class="icon" />{contact.email}</a>
    </div>
    <div>
      <a href={contact.addressMap} target="_blank"><MapPin class="icon" />{@html contact.address}</a>
    </div>
  </div>
</div>


<style>
  .head {
    background-color: #667f8c;
    border-radius: 4px 4px 0 0;
    padding: calc(.5 * var(--spacing)) var(--spacing);
    font-weight: 600;
    font-size: 1.05rem;
  }

  .body {
    background-color: #7d9aa9;
    border-radius: 0 0 4px 4px;
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
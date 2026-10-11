<script>
  const { contact } = $props();

  import { Mail, MapPin, Phone } from '@lucide/svelte';
</script>

<div id="contact">
  <div class="head">Contact</div>
  <div class="body">
    <div>
      <Phone class="icon" /><span>{contact.phone}</span>
    </div>
    <div>
      <Mail class="icon" /><span>{contact.email}</span>
    </div>
    <div>
      <MapPin class="icon" /><span>{@html contact.address}</span>
    </div>
  </div>
</div>


<style>
  /*
  #1a87a3
  #127189
  
  #004757
  #b9cad0
  */
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
  }
</style>
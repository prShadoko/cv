<script lang="ts">
  interface Props {
    direction?: 'all' | 'top' | 'bottom' | 'left' | 'right' | 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
    position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
    color?: string;
    arm?: number;
    thickness?: number;
    class?: string;
  }
  
  const { direction = 'all', position, color = 'var(--color-dark)', arm = 5, thickness = 1, class: cssClass = '' }: Props = $props();

  const classes = $derived([
    ...(Array.isArray(cssClass) ? cssClass : cssClass.split(' ')),
    'mark',
    direction.replace('-', ' '),
    position.split('-').map((pos) => `p-${pos}`),
  ]);

  const cssVars = $derived(
    Object.entries({
      color,
      arm: `${arm}px`,
      thickness: `${thickness}px`,
    })
      .filter(([_, v]) => v !== undefined)
      .map(([k, v]) => `--${k}: ${v};`)
      .join(' '),
    );
</script>

<div class={classes} style={cssVars}>
  <div class="v"></div>
  <div class="h"></div>
</div>


<style>
.mark {
  --dimension: calc(2 * var(--arm) + var(--thickness));
  --half: calc(var(--arm) + var(--thickness));
  --half-neg: calc(-1 * var(--half));

  position: absolute;
  z-index: 100;
  width: var(--dimension);
  height: var(--dimension);

  &[class~="p-bottom"] {
    bottom: 0;
  }
  
  &[class~="p-top"] {
    top: 0;
  }
  
  &[class~="p-right"] {
    right: 0;
  }

  &[class~="p-left"] {
    left: 0;
  }

  /* translate based on the position prop */
  &[class~="p-top"][class~="p-left"] {
    transform: translate(var(--half-neg), var(--half-neg));
  }
  &[class~="p-top"][class~="p-right"] {
    transform: translate(var(--half), var(--half-neg));
  }
  &[class~="p-bottom"][class~="p-left"] {
    transform: translate(var(--half-neg), var(--half));
  }
  &[class~="p-bottom"][class~="p-right"] {
    transform: translate(var(--half), var(--half));
  }
}


.v, .h {
  position: absolute;
  background-color: var(--color);
}

.v {
  height: var(--dimension);
  width: var(--thickness);
  left: var(--arm);
}

.h {
  height: var(--thickness);
  width: var(--dimension);
  top: var(--arm);
}

.mark[class~="top"] .v {
  height: var(--half);
  top: var(--thickness); /* take the margin into account */
  margin-top: calc(-1 * var(--thickness));
}

.mark[class~="bottom"] .v {
  height: var(--half);
  bottom: var(--thickness); /* take the margin into account */
  margin-bottom: calc(-1 * var(--thickness));
}

.mark[class~="left"] .h {
  width: var(--half);
  left: var(--thickness); /* take the margin into account */
  margin-left: calc(-1 * var(--thickness));
}

.mark[class~="right"] .h {
  width: var(--half);
  right: var(--thickness); /* take the margin into account */
  margin-right: calc(-1 * var(--thickness));
}
</style>
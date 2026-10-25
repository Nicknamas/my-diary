<script lang="ts" setup>
interface Props {
  variant: 'primary' | 'secondary' | 'dark' | 'ghost' | 'danger'
  size: 'large' | 'medium' | 'small'
}

defineProps<Props>()
</script>

<template>
  <button
    :class="[
      $style.button,
      $style[variant],
      $style[size],
    ]"
  >
    <slot />
  </button>
</template>

<style module>
.button {
  border-radius: 999px;
  cursor: pointer;

  &.primary {
    background-color: var(--color-accent-default);
    color: var(--color-text-on-accent);

    &:hover {
      background-color: var(--color-accent-hover);
    }
  }

  &.secondary {
    background-color: var(--color-bg-default);
    color: var(--color-text-primary);
    border: 1px solid var(--colors-border-default);
  }

  &.large {
    padding: 14px 32px;
    font: var(--text-button-l);
  }

  &.medium {
    padding: 10px 20px;
    font: var(--text-button-m);
  }

  &.small {
    padding: 8px 16px;
    font: var(--text-label-s);
  }
}
</style>

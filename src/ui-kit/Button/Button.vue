<script lang="ts" setup>
interface Props {
  variant?: 'primary' | 'secondary' | 'dark' | 'ghost' | 'danger'
  size?: 'large' | 'medium' | 'small'
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
}

const { variant = 'primary', size = 'medium', type = 'button', disabled = false } = defineProps<Props>()
</script>

<template>
  <button
    :type
    :disabled
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
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--radius-full);
  white-space: nowrap;
  cursor: pointer;
  transition: background-color 0.15s ease;

  &:focus-visible {
    outline: 2px solid var(--color-accent-default);
    outline-offset: 2px;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  &.primary {
    background-color: var(--color-accent-default);
    color: var(--color-text-on-accent);

    &:hover:not(:disabled) {
      background-color: var(--color-accent-hover);
    }
  }

  &.secondary {
    border: 1px solid var(--color-border-default);
    background-color: var(--color-bg-default);
    color: var(--color-text-primary);

    &:hover:not(:disabled) {
      background-color: var(--color-bg-subtle);
    }
  }

  &.dark {
    background-color: var(--color-bg-inverse);
    color: var(--color-text-inverse);

    &:hover:not(:disabled) {
      background-color: var(--color-bg-inverse-hover);
    }
  }

  &.ghost {
    background-color: transparent;
    color: var(--color-accent-ink);

    &:hover:not(:disabled) {
      background-color: var(--color-accent-soft);
    }
  }

  &.danger {
    background-color: var(--color-danger-default);
    color: var(--color-text-inverse);
  }

  &.large {
    padding: var(--space-14) var(--space-32);
    font: var(--text-button-l);
  }

  &.medium {
    padding: var(--space-10) var(--space-20);
    font: var(--text-button-m);
  }

  &.small {
    padding: var(--space-8) var(--space-16);
    font: var(--text-label-s);
  }
}
</style>

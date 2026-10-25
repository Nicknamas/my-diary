<script lang="ts" setup>
import Icon from '../Icon'

interface Props {
  icon: string
  label: string
  variant?: 'ghost' | 'soft' | 'accent'
  size?: 'small' | 'medium' | 'large'
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
}

const { icon, label, variant = 'ghost', size = 'small', type = 'button', disabled = false } = defineProps<Props>()
</script>

<template>
  <button
    :type
    :disabled
    :aria-label="label"
    :title="label"
    :class="[
      $style.iconButton,
      $style[variant],
      $style[size],
    ]"
  >
    <Icon
      :name="icon"
      :size="size === 'small' ? 20 : 24"
    />
  </button>
</template>

<style module>
.iconButton {
  --button-size: 40px;

  display: inline-flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  width: var(--button-size);
  height: var(--button-size);
  border-radius: var(--radius-full);
  background-color: transparent;
  color: var(--color-text-primary);
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

  &.small {
    --button-size: 40px;
  }

  &.medium {
    --button-size: 48px;
  }

  &.large {
    --button-size: 56px;
  }

  &.ghost:hover:not(:disabled) {
    background-color: var(--color-bg-subtle);
  }

  &.soft {
    background-color: var(--color-bg-subtle);
  }

  &.accent {
    background-color: var(--color-accent-default);
    color: var(--color-text-on-accent);

    &:hover:not(:disabled) {
      background-color: var(--color-accent-hover);
    }

    &.large {
      box-shadow: var(--shadow-raised);
    }
  }
}
</style>

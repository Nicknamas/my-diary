<script lang="ts" setup>
import Icon from '../Icon'

interface Props {
  icon: string
  label: string
  variant?: 'default' | 'danger'
}

const { icon, label, variant = 'default' } = defineProps<Props>()
</script>

<template>
  <button
    type="button"
    :class="[
      $style.sheetAction,
      $style[variant],
    ]"
  >
    <Icon
      :name="icon"
      :size="22"
    />
    <span :class="$style.label">
      {{ label }}
    </span>
  </button>
</template>

<style module>
.sheetAction {
  display: flex;
  align-items: center;
  gap: var(--space-14);
  width: 100%;
  padding: var(--space-14) var(--space-16);
  border-radius: var(--radius-md);
  background-color: transparent;
  color: var(--color-text-primary);
  text-align: left;
  cursor: pointer;
  transition: background-color 0.15s ease;

  &:hover {
    background-color: var(--color-bg-subtle);
  }

  &:focus-visible {
    outline: 2px solid var(--color-accent-default);
    outline-offset: -2px;
  }

  &.danger {
    color: var(--color-danger-default);
  }
}

.label {
  flex: 1 1 auto;
  font: var(--text-body-m-medium);
}
</style>

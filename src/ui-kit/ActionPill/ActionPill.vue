<script lang="ts" setup>
import Icon from '../Icon'

interface Props {
  icon: string
  activeIcon?: string
  label: string
  active?: boolean
}

const { icon, activeIcon, label, active = false } = defineProps<Props>()
</script>

<template>
  <button
    type="button"
    :aria-pressed="active"
    :class="[
      $style.actionPill,
      active ? $style.active : undefined,
    ]"
  >
    <Icon
      :name="active && activeIcon ? activeIcon : icon"
      :size="18"
      :class="$style.icon"
    />
    <span :class="$style.label">
      {{ label }}
    </span>
  </button>
</template>

<style module>
.actionPill {
  display: inline-flex;
  align-items: center;
  gap: var(--space-6);
  padding: var(--space-8) var(--space-14) var(--space-8) var(--space-12);
  border: 1px solid var(--color-border-default);
  border-radius: var(--radius-full);
  background-color: transparent;
  color: var(--color-text-primary);
  cursor: pointer;
  transition: background-color 0.15s ease;

  &:hover {
    background-color: var(--color-bg-subtle);
  }

  &:focus-visible {
    outline: 2px solid var(--color-accent-default);
    outline-offset: 2px;
  }

  &.active {
    border-color: var(--color-accent-soft);
    background-color: var(--color-accent-soft);

    .icon {
      color: var(--color-accent-default);
    }

    .label {
      color: var(--color-accent-ink);
    }
  }
}

.label {
  font: var(--text-label-s);
}
</style>

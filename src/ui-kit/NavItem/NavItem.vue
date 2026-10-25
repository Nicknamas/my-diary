<script lang="ts" setup>
import Icon from '../Icon'

interface Props {
  icon: string
  label: string
  active?: boolean
  compact?: boolean
}

const { icon, label, active = false, compact = false } = defineProps<Props>()
</script>

<template>
  <div
    :class="[
      $style.navItem,
      active ? $style.active : undefined,
      compact ? $style.compact : undefined,
    ]"
    :title="compact ? label : undefined"
  >
    <Icon :name="icon" />
    <span
      v-if="!compact"
      :class="$style.label"
    >
      {{ label }}
    </span>
  </div>
</template>

<style module>
.navItem {
  display: inline-flex;
  align-items: center;
  gap: var(--space-16);
  padding: var(--space-12) var(--space-24) var(--space-12) var(--space-14);
  border-radius: var(--radius-full);
  color: var(--color-text-primary);
  transition: background-color 0.15s ease;

  &:hover {
    background-color: var(--color-bg-subtle);
  }

  &.compact {
    padding: var(--space-14);
  }

  &.active {
    background-color: var(--color-accent-soft);
    color: var(--color-accent-ink);

    .label {
      font: var(--text-nav-active);
    }
  }
}

.label {
  font: var(--text-nav-default);
}
</style>

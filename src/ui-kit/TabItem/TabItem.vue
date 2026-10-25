<script lang="ts" setup>
import Icon from '../Icon'

interface Props {
  label: string
  icon?: string
  selected?: boolean
}

const { label, icon, selected = false } = defineProps<Props>()
</script>

<template>
  <div
    :class="[
      $style.tabItem,
      selected ? $style.selected : undefined,
    ]"
  >
    <slot name="icon">
      <Icon
        v-if="icon"
        :name="icon"
      />
    </slot>
    <span :class="$style.label">
      {{ label }}
    </span>
  </div>
</template>

<style module>
.tabItem {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--space-2);
  width: 72px;
  height: 52px;
  padding: var(--space-6) var(--space-4);
  border-radius: var(--radius-full);
  color: var(--color-text-secondary);

  &.selected {
    background-color: var(--color-accent-soft);
    color: var(--color-accent-ink);
  }
}

.label {
  font: var(--text-label-xs);
}
</style>

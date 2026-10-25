<script lang="ts" setup>
import Icon from '../Icon'

interface Props {
  icon: string
  title: string
  description?: string
  kind?: 'info' | 'action'
}

const { icon, title, description, kind = 'info' } = defineProps<Props>()
</script>

<template>
  <component
    :is="kind === 'action' ? 'button' : 'div'"
    :type="kind === 'action' ? 'button' : undefined"
    :class="[
      $style.listItem,
      $style[kind],
    ]"
  >
    <span :class="$style.tile">
      <slot name="icon">
        <Icon
          :name="icon"
          :size="20"
        />
      </slot>
    </span>
    <span :class="$style.texts">
      <span :class="$style.title">
        {{ title }}
      </span>
      <span
        v-if="description"
        :class="$style.description"
      >
        {{ description }}
      </span>
    </span>
    <Icon
      v-if="kind === 'action'"
      name="chevron-right"
      :size="20"
      :class="$style.chevron"
    />
  </component>
</template>

<style module>
.listItem {
  display: flex;
  align-items: flex-start;
  gap: var(--space-14);
  width: 100%;
  text-align: left;

  &.action {
    align-items: center;
    padding: var(--space-14) var(--space-16);
    border: 1px solid var(--color-border-default);
    border-radius: var(--radius-lg);
    background-color: var(--color-bg-default);
    cursor: pointer;
    transition: background-color 0.15s ease;

    &:hover {
      background-color: var(--color-bg-subtle);
    }

    &:focus-visible {
      outline: 2px solid var(--color-accent-default);
      outline-offset: 2px;
    }
  }
}

.tile {
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: var(--radius-md);
  background-color: var(--color-accent-soft);
  color: var(--color-accent-ink);
}

.texts {
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  gap: var(--space-2);
  min-width: 0;
}

.title {
  color: var(--color-text-primary);
  font: var(--text-body-m-strong);
}

.description {
  color: var(--color-text-secondary);
  font: var(--text-caption);
}

.chevron {
  color: var(--color-text-secondary);
}
</style>

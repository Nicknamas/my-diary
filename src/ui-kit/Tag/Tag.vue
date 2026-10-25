<script lang="ts" setup>
import Icon from '../Icon'

interface Props {
  label: string
  tone?: 'neutral' | 'accent-soft' | 'accent' | 'success' | 'danger'
  shape?: 'square' | 'pill'
  icon?: string
  dot?: boolean
}

const { label, tone = 'neutral', shape = 'pill', icon, dot = false } = defineProps<Props>()
</script>

<template>
  <span
    :class="[
      $style.tag,
      $style[tone],
      $style[shape],
    ]"
  >
    <span
      v-if="dot"
      :class="$style.dot"
    />
    <Icon
      v-if="icon"
      :name="icon"
      :size="12"
      :class="$style.mark"
    />
    <span :class="$style.label">
      {{ label }}
    </span>
  </span>
</template>

<style module>
.tag {
  --tag-background: var(--color-bg-subtle);
  --tag-text: var(--color-text-primary);
  --tag-mark: var(--color-text-secondary);

  display: inline-flex;
  align-items: center;
  gap: var(--space-4);
  padding: var(--space-4) var(--space-8);
  border-radius: var(--radius-full);
  background-color: var(--tag-background);
  color: var(--tag-text);
  white-space: nowrap;

  &.square {
    border: 1px solid var(--color-border-default);
    border-radius: 6px;
  }

  &.neutral.pill {
    --tag-text: var(--color-text-secondary);

    border: 1px solid var(--color-border-default);
  }

  &.accent-soft {
    --tag-background: var(--color-accent-soft);
    --tag-text: var(--color-accent-ink);
    --tag-mark: var(--color-accent-ink);
  }

  &.accent {
    --tag-background: var(--color-accent-default);
    --tag-text: var(--color-text-on-accent);
    --tag-mark: var(--color-text-on-accent);
  }

  &.success {
    --tag-background: var(--color-success-soft);
    --tag-text: var(--color-success-default);
    --tag-mark: var(--color-success-default);
  }

  &.danger {
    --tag-background: var(--color-danger-soft);
    --tag-text: var(--color-danger-default);
    --tag-mark: var(--color-danger-default);
  }
}

.dot {
  width: 6px;
  height: 6px;
  border-radius: var(--radius-full);
  background-color: var(--tag-mark);
}

.mark {
  color: var(--tag-mark);
}

.label {
  font: var(--text-label-xs);
}
</style>

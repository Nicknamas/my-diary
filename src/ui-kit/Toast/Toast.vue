<script lang="ts" setup>
import Icon from '../Icon'

interface Props {
  text: string
  actionLabel?: string
}

const { text, actionLabel } = defineProps<Props>()

const emit = defineEmits<{
  action: []
}>()
</script>

<template>
  <div
    role="status"
    :class="$style.toast"
  >
    <Icon
      name="check-circle"
      :size="20"
      :class="$style.icon"
    />
    <span :class="$style.message">
      {{ text }}
    </span>
    <button
      v-if="actionLabel"
      type="button"
      :class="$style.action"
      @click="emit('action')"
    >
      {{ actionLabel }}
    </button>
  </div>
</template>

<style module>
.toast {
  display: inline-flex;
  align-items: center;
  gap: var(--space-10);
  padding: var(--space-12) var(--space-16) var(--space-12) var(--space-14);
  border-radius: var(--radius-lg);
  background-color: var(--color-bg-inverse);
  box-shadow: var(--shadow-floating);
}

.icon {
  color: var(--color-success-default);
}

.message {
  color: var(--color-text-inverse);
  font: var(--text-body-m-medium);
}

.action {
  background-color: transparent;
  color: var(--color-accent-default);
  font: var(--text-label-s);
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }

  &:focus-visible {
    outline: 2px solid var(--color-accent-default);
    outline-offset: 2px;
  }
}
</style>

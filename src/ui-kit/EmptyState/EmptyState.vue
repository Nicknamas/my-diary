<script lang="ts" setup>
import Button from '../Button'
import Icon from '../Icon'

interface Props {
  title: string
  description: string
  kind?: 'empty' | 'error'
  icon?: string
  actionLabel?: string
}

const { title, description, kind = 'empty', icon, actionLabel } = defineProps<Props>()

const emit = defineEmits<{
  action: []
}>()
</script>

<template>
  <div
    :class="[
      $style.emptyState,
      $style[kind],
    ]"
  >
    <span :class="$style.tile">
      <Icon :name="icon ?? (kind === 'error' ? 'alert-circle' : 'folder')" />
    </span>
    <div :class="$style.texts">
      <p :class="$style.title">
        {{ title }}
      </p>
      <p :class="$style.description">
        {{ description }}
      </p>
    </div>
    <Button
      v-if="actionLabel || kind === 'error'"
      :variant="kind === 'error' ? 'secondary' : 'primary'"
      size="medium"
      @click="emit('action')"
    >
      {{ actionLabel ?? 'Повторить' }}
    </Button>
  </div>
</template>

<style module>
.emptyState {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-16);
  padding: 40px var(--space-24);
  text-align: center;

  &.error .tile {
    background-color: var(--color-danger-soft);
    color: var(--color-danger-default);
  }
}

.tile {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 56px;
  height: 56px;
  border-radius: var(--radius-full);
  background-color: var(--color-accent-soft);
  color: var(--color-accent-ink);
}

.texts {
  display: flex;
  flex-direction: column;
  gap: var(--space-6);
  width: 100%;
}

.title {
  color: var(--color-text-primary);
  font: var(--text-heading-l);
}

.description {
  color: var(--color-text-secondary);
  font: var(--text-body-m);
}
</style>

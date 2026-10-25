<script lang="ts" setup>
import Icon from '../Icon'

interface Props {
  title: string
  text?: string
  type?: 'warning' | 'error' | 'success' | 'info'
}

const { title, text, type = 'info' } = defineProps<Props>()

const ICONS = {
  warning: 'alert-triangle',
  error: 'alert-circle',
  success: 'check-circle',
  info: 'info',
}
</script>

<template>
  <div
    :role="type === 'error' ? 'alert' : 'status'"
    :class="[
      $style.notice,
      $style[type],
    ]"
  >
    <Icon
      :name="ICONS[type]"
      :size="20"
      :class="$style.icon"
    />
    <div :class="$style.texts">
      <p :class="$style.title">
        {{ title }}
      </p>
      <p
        v-if="text"
        :class="$style.text"
      >
        {{ text }}
      </p>
    </div>
  </div>
</template>

<style module>
.notice {
  display: flex;
  align-items: flex-start;
  gap: var(--space-12);
  padding: var(--space-14) var(--space-16);
  border-radius: var(--radius-md);

  &.warning {
    background-color: var(--color-accent-soft);

    .icon {
      color: var(--color-accent-ink);
    }
  }

  &.error {
    background-color: var(--color-danger-soft);

    .icon {
      color: var(--color-danger-default);
    }
  }

  &.success {
    background-color: var(--color-success-soft);

    .icon {
      color: var(--color-success-default);
    }
  }

  &.info {
    background-color: var(--color-bg-subtle);

    .icon {
      color: var(--color-text-secondary);
    }
  }
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

.text {
  color: var(--color-text-secondary);
  font: var(--text-caption);
}
</style>

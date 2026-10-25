<script lang="ts" setup>
import Icon from '../Icon'
import Spinner from '../Spinner'

interface Props {
  label: string
  status: 'pending' | 'loading' | 'done' | 'error'
}

const { label, status } = defineProps<Props>()
</script>

<template>
  <div
    :class="[
      $style.checkStep,
      $style[status],
    ]"
  >
    <Spinner
      v-if="status === 'loading'"
      :size="20"
      :label
    />
    <Icon
      v-else
      :name="status === 'error' ? 'alert-circle' : 'check-circle'"
      :size="20"
      :class="$style.icon"
    />
    <span :class="$style.label">
      {{ label }}
    </span>
  </div>
</template>

<style module>
.checkStep {
  display: flex;
  align-items: center;
  gap: var(--space-10);
  padding: var(--space-4) 0;

  &.pending {
    .icon {
      color: var(--color-border-default);
    }

    .label {
      color: var(--color-text-secondary);
    }
  }

  &.done .icon {
    color: var(--color-success-default);
  }

  &.error .icon {
    color: var(--color-danger-default);
  }
}

.label {
  color: var(--color-text-primary);
  font: var(--text-body-m);
}
</style>

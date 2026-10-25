<script lang="ts" setup>
import Icon from '../Icon'

interface Props {
  label: string
  disabled?: boolean
}

const { label, disabled = false } = defineProps<Props>()

const checked = defineModel<boolean>({ default: false })
</script>

<template>
  <label
    :class="[
      $style.checkbox,
      disabled ? $style.disabled : undefined,
    ]"
  >
    <input
      v-model="checked"
      type="checkbox"
      :disabled
      :class="$style.input"
    >
    <span :class="$style.box">
      <Icon
        v-if="checked"
        name="check"
        :size="16"
      />
    </span>
    <span :class="$style.label">
      {{ label }}
    </span>
  </label>
</template>

<style module>
.checkbox {
  display: flex;
  align-items: center;
  gap: var(--space-12);
  padding: var(--space-8) 0;
  cursor: pointer;

  &.disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
}

.input {
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip-path: inset(50%);
  white-space: nowrap;

  &:checked + .box {
    border-color: var(--color-accent-default);
    background-color: var(--color-accent-default);
  }

  &:focus-visible + .box {
    outline: 2px solid var(--color-accent-default);
    outline-offset: 2px;
  }
}

.box {
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  border: 1.5px solid var(--color-border-default);
  border-radius: 7px;
  background-color: var(--color-bg-default);
  color: var(--color-text-primary);
  transition: background-color 0.15s ease, border-color 0.15s ease;
}

.label {
  flex: 1 1 auto;
  color: var(--color-text-primary);
  font: var(--text-body-m);
}
</style>

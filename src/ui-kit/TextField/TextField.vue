<script lang="ts" setup>
import { useId } from 'vue'

interface Props {
  label: string
  placeholder?: string
  hint?: string
  error?: string
  type?: 'text' | 'email' | 'password' | 'search' | 'url' | 'tel'
  disabled?: boolean
}

const { label, placeholder, hint, error, type = 'text', disabled = false } = defineProps<Props>()

const value = defineModel<string>({ default: '' })

const inputId = useId()
const messageId = useId()
</script>

<template>
  <div
    :class="[
      $style.textField,
      error ? $style.invalid : undefined,
    ]"
  >
    <label
      :for="inputId"
      :class="$style.label"
    >
      {{ label }}
    </label>
    <div :class="$style.box">
      <input
        :id="inputId"
        v-model="value"
        :type
        :placeholder
        :disabled
        :aria-invalid="Boolean(error)"
        :aria-describedby="error || hint ? messageId : undefined"
        :class="$style.input"
      >
    </div>
    <p
      v-if="error || hint"
      :id="messageId"
      :class="$style.message"
    >
      {{ error || hint }}
    </p>
  </div>
</template>

<style module>
.textField {
  display: flex;
  flex-direction: column;
  gap: var(--space-6);

  &.invalid {
    .box {
      border-color: var(--color-danger-default);
      box-shadow: inset 0 0 0 0.5px var(--color-danger-default);
    }

    .message {
      color: var(--color-danger-default);
    }
  }
}

.label {
  color: var(--color-text-primary);
  font: var(--text-label-s);
}

.box {
  display: flex;
  align-items: center;
  height: 48px;
  padding: 0 var(--space-16);
  border: 1px solid var(--color-border-default);
  border-radius: var(--radius-md);
  background-color: var(--color-bg-default);
  transition: border-color 0.15s ease, box-shadow 0.15s ease;

  &:focus-within {
    border-color: var(--color-accent-default);
    box-shadow: inset 0 0 0 1px var(--color-accent-default);
  }
}

.input {
  flex: 1 1 auto;
  min-width: 0;
  background-color: transparent;
  color: var(--color-text-primary);
  font: var(--text-body-m);

  &::placeholder {
    color: var(--color-text-secondary);
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
}

.message {
  color: var(--color-text-secondary);
  font: var(--text-caption);
}
</style>

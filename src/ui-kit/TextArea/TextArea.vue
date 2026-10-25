<script lang="ts" setup>
import { useId } from 'vue'

interface Props {
  label: string
  placeholder?: string
  maxLength?: number
  rows?: number
  disabled?: boolean
}

const { label, placeholder, maxLength, rows = 4, disabled = false } = defineProps<Props>()

const value = defineModel<string>({ default: '' })

const textAreaId = useId()
</script>

<template>
  <div :class="$style.textArea">
    <label
      :for="textAreaId"
      :class="$style.label"
    >
      {{ label }}
    </label>
    <textarea
      :id="textAreaId"
      v-model="value"
      :placeholder
      :maxlength="maxLength"
      :rows
      :disabled
      :class="$style.box"
    />
    <p
      v-if="maxLength && value.length > 0"
      :class="$style.counter"
    >
      {{ value.length }} / {{ maxLength }}
    </p>
  </div>
</template>

<style module>
.textArea {
  display: flex;
  flex-direction: column;
  gap: var(--space-6);
}

.label {
  color: var(--color-text-primary);
  font: var(--text-label-s);
}

.box {
  min-height: 104px;
  padding: var(--space-12) var(--space-16);
  border: 1px solid var(--color-border-default);
  border-radius: var(--radius-md);
  background-color: var(--color-bg-default);
  color: var(--color-text-primary);
  font: var(--text-body-m);
  resize: vertical;
  transition: border-color 0.15s ease, box-shadow 0.15s ease;

  &::placeholder {
    color: var(--color-text-secondary);
  }

  &:focus {
    border-color: var(--color-accent-default);
    box-shadow: inset 0 0 0 1px var(--color-accent-default);
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
}

.counter {
  color: var(--color-text-secondary);
  font: var(--text-caption);
  text-align: right;
}
</style>

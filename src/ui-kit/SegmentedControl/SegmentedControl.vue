<script lang="ts" setup>
interface Option {
  value: string
  label: string
}

interface Props {
  options: Option[]
}

const { options } = defineProps<Props>()

const selected = defineModel<string>({ required: true })
</script>

<template>
  <div :class="$style.segmentedControl">
    <button
      v-for="option of options"
      :key="option.value"
      type="button"
      :aria-pressed="option.value === selected"
      :class="[
        $style.segment,
        option.value === selected ? $style.selected : undefined,
      ]"
      @click="selected = option.value"
    >
      {{ option.label }}
    </button>
  </div>
</template>

<style module>
.segmentedControl {
  display: flex;
  gap: var(--space-4);
  padding: var(--space-4);
  border-radius: var(--radius-full);
  background-color: var(--color-bg-subtle);
}

.segment {
  flex: 1 1 0;
  height: 36px;
  border-radius: var(--radius-full);
  background-color: transparent;
  color: var(--color-text-secondary);
  font: var(--text-label-s);
  cursor: pointer;
  transition: background-color 0.15s ease, color 0.15s ease;

  &:focus-visible {
    outline: 2px solid var(--color-accent-default);
    outline-offset: 2px;
  }

  &.selected {
    background-color: var(--color-bg-elevated);
    color: var(--color-text-primary);
    box-shadow: 0 1px 3px rgb(0 0 0 / 0.08);
  }
}
</style>

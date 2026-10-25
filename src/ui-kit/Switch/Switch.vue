<script lang="ts" setup>
interface Props {
  label: string
  disabled?: boolean
}

const { label, disabled = false } = defineProps<Props>()

const isOn = defineModel<boolean>({ default: false })
</script>

<template>
  <button
    type="button"
    role="switch"
    :aria-checked="isOn"
    :aria-label="label"
    :disabled
    :class="[
      $style.switch,
      isOn ? $style.on : undefined,
    ]"
    @click="isOn = !isOn"
  >
    <span :class="$style.knob" />
  </button>
</template>

<style module>
.switch {
  display: inline-flex;
  flex-shrink: 0;
  align-items: center;
  width: 40px;
  height: 24px;
  padding: 0 3.5px;
  border: 1.5px solid var(--color-text-secondary);
  border-radius: var(--radius-full);
  background-color: var(--color-bg-default);
  cursor: pointer;
  transition: background-color 0.15s ease, border-color 0.15s ease;

  &:focus-visible {
    outline: 2px solid var(--color-accent-default);
    outline-offset: 2px;
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }

  &.on {
    padding: 0 0.5px;
    border-color: var(--color-accent-default);
    background-color: var(--color-accent-default);

    .knob {
      width: 20px;
      height: 20px;
      background-color: #ffffff;
      box-shadow: 0 1px 3px rgb(0 0 0 / 0.18);
      transform: translateX(16px);
    }
  }
}

.knob {
  width: 14px;
  height: 14px;
  border-radius: var(--radius-full);
  background-color: var(--color-text-secondary);
  transition: transform 0.15s ease, width 0.15s ease, height 0.15s ease;
}
</style>

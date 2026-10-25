<script lang="ts" setup>
interface Props {
  label: string
  active?: boolean
}

const { label, active = false } = defineProps<Props>()
</script>

<template>
  <button
    type="button"
    role="tab"
    :aria-selected="active"
    :class="[
      $style.tab,
      active ? $style.active : undefined,
    ]"
  >
    <span :class="$style.label">
      {{ label }}
    </span>
    <span :class="$style.indicator" />
  </button>
</template>

<style module>
.tab {
  display: flex;
  flex: 1 1 0;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 52px;
  padding-top: var(--space-16);
  background-color: transparent;
  cursor: pointer;
  transition: background-color 0.15s ease;

  &:hover {
    background-color: var(--color-bg-subtle);
  }

  &:focus-visible {
    outline: 2px solid var(--color-accent-default);
    outline-offset: -2px;
  }

  &.active {
    .label {
      color: var(--color-text-primary);
      font: var(--text-body-m-strong);
    }

    .indicator {
      background-color: var(--color-accent-default);
    }
  }
}

.label {
  color: var(--color-text-secondary);
  font: var(--text-body-m-medium);
}

.indicator {
  width: 56px;
  height: 3px;
  border-radius: 2px;
  background-color: transparent;
}
</style>

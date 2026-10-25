<script lang="ts" setup>
interface Props {
  current: number
  total?: number
}

const { current, total = 3 } = defineProps<Props>()
</script>

<template>
  <div :class="$style.stepProgress">
    <span :class="$style.label">
      Шаг {{ current }} из {{ total }}
    </span>
    <div :class="$style.segments">
      <span
        v-for="step of total"
        :key="step"
        :class="[
          $style.segment,
          step <= current ? $style.done : undefined,
        ]"
      />
    </div>
  </div>
</template>

<style module>
.stepProgress {
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-6);
}

.label {
  color: var(--color-text-secondary);
  font: var(--text-label-xs);
}

.segments {
  display: flex;
  gap: var(--space-4);
}

.segment {
  width: 28px;
  height: 4px;
  border-radius: 2px;
  background-color: var(--color-border-default);

  &.done {
    background-color: var(--color-accent-default);
  }
}
</style>

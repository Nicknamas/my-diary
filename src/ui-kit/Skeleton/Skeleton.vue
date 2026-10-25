<script lang="ts" setup>
import { computed } from 'vue'

interface Props {
  shape?: 'line' | 'circle' | 'block'
  width?: number | string
  height?: number | string
  radius?: number | string
}

const { shape = 'line', width, height, radius } = defineProps<Props>()

function toCssSize(value: number | string | undefined) {
  return typeof value === 'number' ? `${value}px` : value
}

const sizeStyle = computed(() => ({
  width: toCssSize(width),
  height: toCssSize(shape === 'circle' ? (height ?? width) : height),
  borderRadius: toCssSize(radius),
}))
</script>

<template>
  <span
    aria-hidden="true"
    :class="[
      $style.skeleton,
      $style[shape],
    ]"
    :style="sizeStyle"
  />
</template>

<style module>
.skeleton {
  display: block;
  flex-shrink: 0;
  background-color: var(--color-border-default);
  animation: pulse 1.2s ease-in-out infinite;

  &.line {
    width: 160px;
    height: 12px;
    border-radius: var(--radius-sm);
  }

  &.circle {
    width: 40px;
    height: 40px;
    border-radius: var(--radius-full);
  }

  &.block {
    width: 100%;
    height: 172px;
    border-radius: var(--radius-lg);
  }
}

@keyframes pulse {
  50% {
    opacity: 0.5;
  }
}

@media (prefers-reduced-motion: reduce) {
  .skeleton {
    animation: none;
  }
}
</style>

<script lang="ts" setup>
interface Props {
  size?: number
  label?: string
}

const { size = 24, label = 'Загрузка' } = defineProps<Props>()
</script>

<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    role="status"
    :aria-label="label"
    :class="$style.spinner"
  >
    <circle
      cx="12"
      cy="12"
      r="9"
      stroke-width="2.5"
      :class="$style.track"
    />
    <path
      d="M12 3A9 9 0 0 1 21 12"
      stroke-width="2.5"
      stroke-linecap="round"
      :class="$style.arc"
    />
  </svg>
</template>

<style module>
.spinner {
  flex-shrink: 0;
  animation: spin 0.8s linear infinite;
}

.track {
  stroke: var(--color-border-default);
}

.arc {
  stroke: var(--color-accent-default);
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

@media (prefers-reduced-motion: reduce) {
  .spinner {
    animation-duration: 2.4s;
  }
}
</style>

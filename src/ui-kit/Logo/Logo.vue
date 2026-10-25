<script lang="ts" setup>
interface Props {
  size?: 'small' | 'large' | 'mark'
}

const { size = 'large' } = defineProps<Props>()
</script>

<template>
  <div
    :class="[
      $style.logo,
      $style[size],
    ]"
  >
    <div :class="$style.mark">
      М
    </div>
    <p
      v-if="size !== 'mark'"
      :class="$style.wordmark"
    >
      Мастерская
    </p>
  </div>
</template>

<style module>
.logo {
  --mark-size: 32px;

  display: inline-flex;
  align-items: center;
  gap: var(--space-10);

  &.small {
    --mark-size: 28px;

    gap: var(--space-8);

    .mark {
      font: 700 18px/22px var(--font-sans);
    }

    .wordmark {
      font: var(--text-heading-l);
    }
  }
}

.mark {
  display: flex;
  align-items: center;
  justify-content: center;
  width: var(--mark-size);
  height: var(--mark-size);
  border-radius: var(--radius-sm);
  background-color: var(--color-accent-default);
  color: var(--color-text-on-accent);
  font: 700 20px/24px var(--font-sans);
}

.wordmark {
  color: var(--color-text-primary);
  font: var(--text-heading-xl);
}
</style>

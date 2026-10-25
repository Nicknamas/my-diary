<script lang="ts" setup>
interface Props {
  size?: 'xs' | 'small' | 'medium' | 'large' | 'xl'
  initials?: string
  src?: string
  alt?: string
  tone?: 'lavender' | 'mint' | 'sky' | 'peach' | 'butter'
}

const { size = 'medium', initials = '', src, alt = '', tone = 'lavender' } = defineProps<Props>()
</script>

<template>
  <div
    :class="[
      $style.avatar,
      $style[size],
      $style[tone],
    ]"
  >
    <img
      v-if="src"
      :src
      :alt
      :class="$style.image"
    >
    <span v-else>
      {{ initials }}
    </span>
  </div>
</template>

<style module>
.avatar {
  --avatar-size: 40px;

  display: inline-flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  width: var(--avatar-size);
  height: var(--avatar-size);
  border-radius: var(--radius-full);
  background-color: var(--color-avatar-lavender);
  color: var(--color-text-primary);

  &.mint {
    background-color: var(--color-avatar-mint);
  }

  &.sky {
    background-color: var(--color-avatar-sky);
  }

  &.peach {
    background-color: var(--color-avatar-peach);
  }

  &.butter {
    background-color: var(--color-avatar-butter);
  }

  &.xs {
    --avatar-size: 24px;

    font: 600 10px/12px var(--font-sans);
  }

  &.small {
    --avatar-size: 32px;

    font: var(--text-label-s);
  }

  &.medium {
    --avatar-size: 40px;

    font: var(--text-body-m-strong);
  }

  &.large {
    --avatar-size: 56px;

    font: var(--text-heading-l);
  }

  &.xl {
    --avatar-size: 112px;

    border: 4px solid var(--color-bg-default);
    font: 700 36px/40px var(--font-sans);
  }
}

.image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>

<script lang="ts" setup>
interface Props {
  size: 'xl' | 'large' | 'medium' | 'small' | 'xs'
  initials?: string
}

defineProps<Props>()
</script>

<template>
  <div
    :class="[
      $style.avatar,
      $style[size]
    ]"
  >
    {{ initials }}
  </div>
</template>

<style module>
.avatar {
  --avatar-size: 24px;

  display: flex;
  align-items: center;
  justify-content: center;
  font: var(--text-body-m-strong);
  width: var(--avatar-size);
  height: var(--avatar-size);
  border-radius: 50%;
  background-color: var(--color-avatar-lavender);
  color: var(--color-text-primary);

  &.xl {
    --avatar-size: 112px;
  }

  &.large {
    --avatar-size: 56px;
  }

  &.medium {
    --avatar-size: 40px;
  }

  &.small {
    --avatar-size: 32px;
  }

  &.xs {
    --avatar-size: 24px;
  }
}
</style>

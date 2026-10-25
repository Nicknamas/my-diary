<script lang="ts" setup>
import { Icon } from '@ui-kit'

interface Props {
  size: 'small' | 'medium' | 'large'
  styleButton: 'ghost' | 'soft' | 'accent'
  name: string
}

defineProps<Props>()
</script>

<template>
  <div
    :class="[
      $style.iconButton,
      $style[size],
      $style[styleButton],
    ]"
  >
    <Icon :name />
  </div>
</template>

<style module>
.iconButton {
  --button-size: 40px;

  border-radius: 50%;
  width: var(--button-size);
  height: var(--button-size);

  &.small {
    --button-size: 40px;
  }

  &.medium {
    --button-size: 48px;
  }

  &.large {
    --button-size: 56px;
  }

  &.soft {
    background-color: var(--bg-subtle);
  }

  &.accent {
    background-color: var(--accent-default);
  }
}
</style>

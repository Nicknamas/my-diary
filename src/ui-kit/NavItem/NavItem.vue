<script lang="ts" setup>
import { Icon } from '@ui-kit'

interface Props {
  compact?: boolean
  icon: string
  label: string
  active?: boolean
}

defineProps<Props>()
</script>

<template>
  <div
    :class="[
      $style.navItem,
      active ? $style.active : undefined,
    ]"
  >
    <Icon
      :name="icon"
    />
    <p
      v-if="!compact"
      :class="$style.text"
    >
      {{ label }}
    </p>
  </div>
</template>

<style module>
.navItem {
  display: flex;
  align-items: center;
  gap: 16px;

  padding: 12px 24px 12px 14px;
  border-radius: 999px;

  color: var(--color-text-primary);

  &.active {
    background-color: var(--color-accent-soft);

    .text {
      font: var(--text-nav-active);
    }
  }

  .text {
    font: var(--text-nav-default);
  }
}
</style>

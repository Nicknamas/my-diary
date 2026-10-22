<script setup lang="ts">
import { NavItem, Logo } from '@ui-kit'

const NAVIGATION_ITEMS = [
  {
    label: 'Лента',
    icon: 'home',
  },
  {
    label: 'Дорожная карта',
    icon: 'milestone',
  },
  {
    label: 'Профиль',
    icon: 'user',
  },
]
</script>

<template>
  <div :class="$style.sidebar">
    <div :class="$style.block">
      <div :class="$style.logo">
        <Logo />
      </div>
      <ul :class="$style.navigation">
        <NavItem
          v-for="item of NAVIGATION_ITEMS"
          :key="item.label"
          :label="item.label"
          :icon="item.icon"
        />
      </ul>
      <Button />
    </div>
  </div>
</template>

<style module>
.sidebar {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 8px 24px 20px 0;

  .block {
    display: flex;
    flex-direction: column;
    gap: 16px;

    .logo {
      padding: 12px 0 12px 14px;

    }
  }
}

.navigation {
  display: flex;
  flex-direction: column;
  gap: 4px;
}
</style>

<script setup lang="ts">
import Sidebar from '@core/sidebar'
import Tabbar from '@core/tabbar'
</script>

<template>
  <div :class="$style.root">
    <Sidebar :class="$style.sidebar" />
    <main :class="$style.content">
      <RouterView />
    </main>
    <RouterView name="aside" v-slot="{ Component }">
      <aside v-if="Component" :class="$style.aside">
        <component :is="Component" />
      </aside>
    </RouterView>
    <Tabbar :class="$style.tabbar" />
  </div>
</template>

<style module>
.root {
  display: grid;
  grid-template-areas:
    'content'
    'tabbar';
  grid-template-rows: 1fr auto;
  min-height: 100dvh;
}

.content { grid-area: content; }
.tabbar { grid-area: tabbar; }

.aside {
  display: none;
}

@media (max-width: 899px) {
  .sidebar {
    display: none;
  }
}

@media (min-width: 900px) {
  .root {
    grid-template-areas: 'sidebar content';
    grid-template-columns: 275px 1fr;
  }

  .sidebar {
    grid-area: sidebar;
  }

  .tabbar {
    display: none;
  }
}
</style>

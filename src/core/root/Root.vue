<script setup lang="ts">
import Header from '@core/header'
</script>

<template>
  <div :class="$style.root">
    <Header />
    <RouterView />
  </div>
</template>

<style module>
.root {}
</style>

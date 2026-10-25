<script lang="ts" setup>
interface Props {
  compact?: boolean
  trailing?: 'more' | 'follow'
}

defineProps<Props>()
</script>

<template>
  <div :class="$style.userRow">
  </div>
</template>

<style module>
</style>

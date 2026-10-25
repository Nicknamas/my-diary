<script lang="ts" setup>
interface Props {
  size: 'xl' | 'large' | 'medium' | 'small' | 'xs'
}

defineProps<Props>()
</script>

<template>
  <div
    :class="[
      $style.avatar,
      $style[size],
    ]"
  >
    AB
  </div>
</template>

<style module>
.avatar {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
}
</style>

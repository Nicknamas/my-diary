<script setup lang="ts">
import { computed } from 'vue'
import { getImageUrl, getSvgIcon, loadIcons } from './shared'

interface Props {
  name: string
  size?: number | string
}

const { name, size = 24 } = defineProps<Props>()

loadIcons()

const dimension = computed(() => `${size}px`)
const svgMarkup = computed(() => getSvgIcon(name))
</script>

<template>
  <span
    v-if="svgMarkup"
    :class="$style.icon"
    :style="{ width: dimension, height: dimension }"
    aria-hidden="true"
    v-html="svgMarkup"
  />
  <img
    v-else
    :src="getImageUrl(name)"
    :style="{ width: dimension, height: dimension }"
    alt=""
  >
</template>

<style module>
.icon {
  display: inline-flex;
  flex-shrink: 0;

  & > svg {
    width: 100%;
    height: 100%;
  }
}
</style>

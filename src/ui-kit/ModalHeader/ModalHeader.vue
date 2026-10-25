<script lang="ts" setup>
import IconButton from '../IconButton'

interface Props {
  title: string
}

const { title } = defineProps<Props>()

const emit = defineEmits<{
  close: []
}>()
</script>

<template>
  <header :class="$style.modalHeader">
    <h2 :class="$style.title">
      {{ title }}
    </h2>
    <IconButton
      icon="close"
      label="Закрыть"
      @click="emit('close')"
    />
  </header>
</template>

<style module>
.modalHeader {
  display: flex;
  align-items: center;
  gap: var(--space-8);
  padding: var(--space-16) var(--space-16) var(--space-8) var(--space-24);
}

.title {
  flex: 1 1 auto;
  min-width: 0;
  color: var(--color-text-primary);
  font: var(--text-heading-l);
}
</style>

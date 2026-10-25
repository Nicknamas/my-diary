<script lang="ts" setup>
import { ref, useTemplateRef } from 'vue'
import Button from '../Button'
import Icon from '../Icon'

interface Props {
  title: string
  description: string
  activeTitle?: string
  buttonLabel?: string
  accept?: string
  multiple?: boolean
}

const {
  title,
  description,
  activeTitle = 'Отпустите, чтобы загрузить',
  buttonLabel = 'Выбрать файл',
  accept,
  multiple = false,
} = defineProps<Props>()

const emit = defineEmits<{
  select: [files: File[]]
}>()

const fileInput = useTemplateRef<HTMLInputElement>('fileInput')
const isActive = ref(false)
let dragDepth = 0

function openPicker() {
  fileInput.value?.click()
}

function emitFiles(fileList: FileList | null | undefined) {
  if (!fileList || fileList.length === 0) return
  emit('select', Array.from(fileList))
}

function handlePickerChange(event: Event) {
  const input = event.target as HTMLInputElement
  emitFiles(input.files)
  input.value = ''
}

function handleDragEnter() {
  dragDepth += 1
  isActive.value = true
}

function handleDragLeave() {
  dragDepth -= 1
  if (dragDepth === 0) isActive.value = false
}

function handleDrop(event: DragEvent) {
  dragDepth = 0
  isActive.value = false
  emitFiles(event.dataTransfer?.files)
}
</script>

<template>
  <div
    :class="[
      $style.dropzone,
      isActive ? $style.active : undefined,
    ]"
    @dragenter.prevent="handleDragEnter"
    @dragover.prevent
    @dragleave.prevent="handleDragLeave"
    @drop.prevent="handleDrop"
  >
    <div :class="$style.tile">
      <Icon name="upload" />
    </div>
    <p :class="$style.title">
      {{ isActive ? activeTitle : title }}
    </p>
    <p :class="$style.description">
      {{ description }}
    </p>
    <Button
      v-show="!isActive"
      variant="secondary"
      size="medium"
      @click="openPicker"
    >
      {{ buttonLabel }}
    </Button>
    <input
      ref="fileInput"
      type="file"
      :accept
      :multiple
      hidden
      @change="handlePickerChange"
    >
  </div>
</template>

<style module>
.dropzone {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-10);
  padding: 28px var(--space-20);
  border: 1.5px dashed var(--color-border-default);
  border-radius: var(--radius-lg);
  background-color: var(--color-bg-subtle);
  text-align: center;
  transition: background-color 0.15s ease, border-color 0.15s ease;

  &.active {
    border-color: var(--color-accent-default);
    background-color: var(--color-accent-soft);

    .tile {
      color: var(--color-accent-ink);
    }
  }
}

.tile {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: var(--radius-full);
  background-color: var(--color-bg-elevated);
  color: var(--color-text-primary);
}

.title {
  color: var(--color-text-primary);
  font: var(--text-body-m-strong);
}

.description {
  color: var(--color-text-secondary);
  font: var(--text-caption);
}
</style>

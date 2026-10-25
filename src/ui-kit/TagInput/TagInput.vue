<script lang="ts" setup>
import { nextTick, ref, useId, useTemplateRef } from 'vue'
import Icon from '../Icon'
import Tag from '../Tag'

interface Props {
  label: string
  hint?: string
  addLabel?: string
}

const { label, hint, addLabel = 'Добавить' } = defineProps<Props>()

const tags = defineModel<string[]>({ default: () => [] })

const labelId = useId()
const isAdding = ref(false)
const draft = ref('')
const draftInput = useTemplateRef<HTMLInputElement>('draftInput')

async function startAdding() {
  isAdding.value = true
  await nextTick()
  draftInput.value?.focus()
}

function commitDraft() {
  const tag = draft.value.trim()
  if (tag && !tags.value.includes(tag)) {
    tags.value = [...tags.value, tag]
  }
  draft.value = ''
}

function finishAdding() {
  commitDraft()
  isAdding.value = false
}

function cancelAdding() {
  draft.value = ''
  isAdding.value = false
}

function removeTag(tagToRemove: string) {
  tags.value = tags.value.filter(tag => tag !== tagToRemove)
}

function removeLastTagIfDraftEmpty() {
  if (draft.value === '' && tags.value.length > 0) {
    tags.value = tags.value.slice(0, -1)
  }
}
</script>

<template>
  <div :class="$style.tagInput">
    <span
      :id="labelId"
      :class="$style.label"
    >
      {{ label }}
    </span>
    <div
      :class="$style.box"
      role="group"
      :aria-labelledby="labelId"
    >
      <button
        v-for="tag of tags"
        :key="tag"
        type="button"
        :class="$style.removableTag"
        :aria-label="`Удалить ${tag}`"
        title="Удалить"
        @click="removeTag(tag)"
      >
        <Tag
          :label="tag"
          shape="square"
        />
      </button>
      <input
        v-if="isAdding"
        ref="draftInput"
        v-model="draft"
        :class="$style.draft"
        :aria-label="addLabel"
        @keydown.enter.prevent="commitDraft"
        @keydown.escape="cancelAdding"
        @keydown.backspace="removeLastTagIfDraftEmpty"
        @blur="finishAdding"
      >
      <button
        v-else
        type="button"
        :class="$style.add"
        @click="startAdding"
      >
        <Icon
          name="plus"
          :size="14"
        />
        {{ addLabel }}
      </button>
    </div>
    <p
      v-if="hint"
      :class="$style.hint"
    >
      {{ hint }}
    </p>
  </div>
</template>

<style module>
.tagInput {
  display: flex;
  flex-direction: column;
  gap: var(--space-6);
}

.label {
  color: var(--color-text-primary);
  font: var(--text-label-s);
}

.box {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: var(--space-6);
  min-height: 48px;
  padding: var(--space-10) var(--space-12);
  border: 1px solid var(--color-border-default);
  border-radius: var(--radius-md);
  background-color: var(--color-bg-default);
  transition: border-color 0.15s ease, box-shadow 0.15s ease;

  &:focus-within {
    border-color: var(--color-accent-default);
    box-shadow: inset 0 0 0 1px var(--color-accent-default);
  }
}

.removableTag {
  display: inline-flex;
  border-radius: 6px;
  background-color: transparent;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }

  &:focus-visible {
    outline: 2px solid var(--color-accent-default);
    outline-offset: 1px;
  }
}

.add {
  display: inline-flex;
  align-items: center;
  gap: var(--space-4);
  padding: var(--space-4) var(--space-10) var(--space-4) var(--space-8);
  border: 1px solid var(--color-border-default);
  border-radius: var(--radius-sm);
  background-color: transparent;
  color: var(--color-text-secondary);
  font: var(--text-label-xs);
  cursor: pointer;

  &:hover {
    background-color: var(--color-bg-subtle);
  }

  &:focus-visible {
    outline: 2px solid var(--color-accent-default);
    outline-offset: 1px;
  }
}

.draft {
  flex: 1 1 80px;
  min-width: 80px;
  height: 26px;
  background-color: transparent;
  color: var(--color-text-primary);
  font: var(--text-label-xs);
}

.hint {
  color: var(--color-text-secondary);
  font: var(--text-caption);
}
</style>

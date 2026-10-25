<script lang="ts" setup>
import Icon from '../Icon'
import IconButton from '../IconButton'
import Spinner from '../Spinner'

interface Props {
  name: string
  meta: string
  state: 'uploading' | 'checking' | 'done' | 'error'
  progress?: number
}

const { name, meta, state, progress = 0 } = defineProps<Props>()

const emit = defineEmits<{
  remove: []
}>()
</script>

<template>
  <div
    :class="[
      $style.fileRow,
      $style[state],
    ]"
  >
    <div :class="$style.row">
      <span :class="$style.tile">
        <Icon
          name="file-zip"
          :size="20"
        />
      </span>
      <span :class="$style.texts">
        <span :class="$style.name">
          {{ name }}
        </span>
        <span :class="$style.meta">
          {{ meta }}
        </span>
      </span>
      <Spinner
        v-if="state === 'checking'"
        :size="20"
        label="Проверяем"
      />
      <Icon
        v-else-if="state === 'done'"
        name="check-circle"
        :size="20"
        :class="$style.doneIcon"
      />
      <IconButton
        icon="close"
        :label="state === 'uploading' ? 'Отменить загрузку' : 'Убрать файл'"
        @click="emit('remove')"
      />
    </div>
    <div
      v-if="state === 'uploading'"
      :class="$style.progress"
      role="progressbar"
      :aria-valuenow="progress"
      aria-valuemin="0"
      aria-valuemax="100"
    >
      <div
        :class="$style.progressFill"
        :style="{ width: `${progress}%` }"
      />
    </div>
  </div>
</template>

<style module>
.fileRow {
  display: flex;
  flex-direction: column;
  gap: var(--space-10);
  padding: var(--space-12);
  border: 1px solid var(--color-border-default);
  border-radius: var(--radius-lg);
  background-color: var(--color-bg-elevated);

  &.error {
    border-color: var(--color-danger-default);

    .tile {
      background-color: var(--color-danger-soft);
      color: var(--color-danger-default);
    }

    .meta {
      color: var(--color-danger-default);
    }
  }
}

.row {
  display: flex;
  align-items: center;
  gap: var(--space-12);
}

.tile {
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: var(--radius-md);
  background-color: var(--color-bg-subtle);
  color: var(--color-text-primary);
}

.texts {
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  gap: var(--space-2);
  min-width: 0;
}

.name {
  overflow: hidden;
  color: var(--color-text-primary);
  font: var(--text-body-m-medium);
  white-space: nowrap;
  text-overflow: ellipsis;
}

.meta {
  color: var(--color-text-secondary);
  font: var(--text-caption);
}

.doneIcon {
  color: var(--color-success-default);
}

.progress {
  height: 4px;
  overflow: hidden;
  border-radius: var(--radius-full);
  background-color: var(--color-bg-subtle);
}

.progressFill {
  height: 100%;
  border-radius: 2px;
  background-color: var(--color-accent-default);
  transition: width 0.2s ease;
}
</style>

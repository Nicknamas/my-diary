<script lang="ts" setup>
import IconButton from '../IconButton'
import Logo from '../Logo'

interface Props {
  title?: string
  subtitle?: string
  leading?: 'none' | 'back' | 'close' | 'logo'
  trailing?: 'none' | 'button' | 'icons'
  divider?: boolean
  progress?: number
}

const {
  title = '',
  subtitle,
  leading = 'none',
  trailing = 'none',
  divider = false,
  progress,
} = defineProps<Props>()

const emit = defineEmits<{
  back: []
  close: []
}>()
</script>

<template>
  <header
    :class="[
      $style.topBar,
      leading === 'back' || leading === 'close' ? $style.leadingIcon : undefined,
      trailing === 'icons' ? $style.trailingIcons : undefined,
      divider ? $style.divider : undefined,
    ]"
  >
    <IconButton
      v-if="leading === 'back'"
      icon="arrow-left"
      label="Назад"
      @click="emit('back')"
    />
    <IconButton
      v-else-if="leading === 'close'"
      icon="close"
      label="Закрыть"
      @click="emit('close')"
    />

    <template v-if="leading === 'logo'">
      <Logo size="small" />
      <div :class="$style.spacer" />
    </template>
    <div
      v-else
      :class="$style.titles"
    >
      <h1 :class="$style.title">
        {{ title }}
      </h1>
      <p
        v-if="subtitle"
        :class="$style.subtitle"
      >
        {{ subtitle }}
      </p>
    </div>

    <div
      v-if="trailing !== 'none'"
      :class="$style.trailing"
    >
      <slot name="trailing" />
    </div>

    <div
      v-if="progress !== undefined"
      :class="$style.progress"
      :style="{ width: `${progress}%` }"
      role="progressbar"
      :aria-valuenow="progress"
      aria-valuemin="0"
      aria-valuemax="100"
    />
  </header>
</template>

<style module>
.topBar {
  position: relative;
  display: flex;
  align-items: center;
  gap: var(--space-16);
  min-height: 56px;
  padding: var(--space-6) var(--space-16);
  background-color: var(--color-bg-default);

  &.leadingIcon {
    padding-left: var(--space-8);
  }

  &.trailingIcons {
    padding-right: var(--space-8);
  }

  &.divider {
    box-shadow: inset 0 -1px 0 var(--color-border-default);
  }
}

.titles {
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  min-width: 0;
}

.title,
.subtitle {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.title {
  color: var(--color-text-primary);
  font: var(--text-heading-l);
}

.subtitle {
  color: var(--color-text-secondary);
  font: var(--text-caption);
}

.spacer {
  flex: 1 1 auto;
}

.trailing {
  display: flex;
  flex-shrink: 0;
  align-items: center;
}

.progress {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 2px;
  background-color: var(--color-accent-default);
  transition: width 0.2s ease;
}
</style>

<script lang="ts" setup>
import { ref } from 'vue'
import { Avatar, Button, IconButton } from '@ui-kit'

interface Props {
  compact?: boolean
  trailing?: 'more' | 'follow'
}

defineProps<Props>()

const name = ref('Лена К.')
const username = ref('@lenak')
</script>

<template>
  <div :class="$style.userRow">
    <Avatar size="medium" initials="ЛК" />
    <div :class="$style.block">
      <p :class="$style.text">
        {{ name }}
      </p>
      <p :class="$style.text">
        {{ username }}
      </p>
    </div>
    <Button
      v-if="trailing === 'follow'"
      variant="dark"
      size="small"
    >
      Подписаться
    </Button>
    <IconButton
      icon="more"
      label="Ещё"
      size="small"
      variant="ghost"
    />
  </div>
</template>

<style module>
.userRow {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 0;

  .block {
    flex-grow: 1;
  }
}
</style>

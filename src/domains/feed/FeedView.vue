<script setup lang="ts">
import { Item } from './ui';

</script>

<template>
  <div
    :class="$style.feed"
  >
    <ul
      :class="$style.list"
    >
      <Item />
    </ul>
  </div>
</template>

<style module>
.feed {
  --component-padding: 16px;
  --component-background: #fff;

  --list-gap: 12px;

  padding: var(--component-padding);
  background-color: var(--component-background);

  .list {
    display: flex;
    flex-direction: column;
    gap: var(--list-gap);
  }
}
</style>

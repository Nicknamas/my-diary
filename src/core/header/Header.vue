<script setup lang="ts">

</script>

<template>
  <div :class="$style.header">
    <div :class="$style.item">
      item1
    </div>
    <div :class="$style.item">
      item2
    </div>
    <div :class="$style.item">
      item3
    </div>
  </div>
</template>

<style module>
.header {
  --component-padding: 12px;

  --component-gap: 12px;

  --component-border-color: #e3e3e3;
  --component-border: 1px solid var(--component-border-color);

  display: flex;
  justify-content: space-between;
  gap: var(--component-gap);
  border-bottom: var(--component-border);
  padding: var(--component-padding)
}
</style>

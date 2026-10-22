<script lang="ts" setup>

</script>

<template>
  <div :class="$style.logo">
    <div :class="$style.mark">
      M
    </div>
    <p :class="$style.text">
      Мастерская
    </p>
  </div>
</template>

<style module>
.logo {
  display: flex;
  align-items: center;
  gap: 8px;

  .mark {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 28px;
    height: 28px;
    border-radius: 8px;

    background-color: var(--color-accent-default);
    color: var(--color-text-on-accent);

    font-size: 18px;
    font-weight: bold;
    line-height: 22px;
  }

  .text {
    font: var(--text-heading-l);
    color: var(--color-text-primary);
  }
}
</style>

<template>
  <div class="text-area">
    <textarea class="text-area__input" :placeholder="placeholder" />
  </div>
</template>

<script>
export default {
  props: {
    placeholder: String
  }
}
</script>

<style lang="scss">
.text-area {
  border: 1px solid #C5C6CD;
  border-radius: 3px;
  padding: 8px;

  &__input {
    width: 100%;
    height: 140px;
    font-size: 14px;
    font-weight: 500;
    line-height: 22px;
    text-align: left;
  }
}
</style>
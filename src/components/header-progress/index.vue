<template>
  <div class="progress" :style="{ width: progress + '%' }"></div>
</template>

<script>
export default {
  props: {
    progress: Number
  }
}
</script>

<style lang="scss">
.progress {
  height: 3px;
  background-color: $--color-primary;
  border-radius: 0 1.5px 1.5px 0;
}
</style>
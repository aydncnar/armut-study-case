<template>
  <div class="progress" :style="{ width: progress + '%' }"></div>
</template>

<script>
export default {
  data() {
    return {
      progress: 0
    }
  },
  mounted() {
    this.progress = this.$store.getters.progress;
  },
  updated() {
    this.progress = this.$store.getters.progress;
  }
}
</script>

<style lang="scss">
.progress {
  height: 3px;
  //width: 200px;
  background-color: $--color-primary;
  border-radius: 0 1.5px 1.5px 0;
}
</style>
<template>
  <div class="box--fixed-bottom">
    <slot />
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.box--fixed-bottom {
  position: fixed;
  left: 0;
  bottom: 0;
  padding: 8px 16px;
  width: 100%;
  background: #FFF;
}
</style>
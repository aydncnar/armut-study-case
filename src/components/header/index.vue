<template>
  <div class="page-header">
    <span @click="goback">
      <svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M8.65392 16C8.30964 16 7.96506 15.8789 7.70214 15.6358L0.39423 8.87989C0.142078 8.64649 0 8.33014 0 7.99997C0 7.67006 0.142078 7.35344 0.393931 7.12004L7.70214 0.364398C8.22738 -0.121466 9.07985 -0.121466 9.6051 0.364398C10.1312 0.850539 10.1312 1.6381 9.6051 2.12424L3.24956 7.99997L9.6054 13.8757C10.1315 14.3616 10.1315 15.1494 9.6054 15.6355C9.34278 15.8783 8.9982 16 8.65392 16Z" fill="#111321"/>
      </svg>
    </span>
    <p class="page-header__title">{{ title }}</p>
    <span @click="gohome">
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M4.5026 6L0.310122 1.80752C-0.103374 1.39403 -0.103374 0.723619 0.310122 0.310122C0.723619 -0.103374 1.39403 -0.103374 1.80752 0.310122L6 4.5026L10.1925 0.310122C10.606 -0.103374 11.2764 -0.103374 11.6899 0.310122C12.1034 0.723619 12.1034 1.39403 11.6899 1.80752L7.4974 6L11.6899 10.1925C12.1034 10.606 12.1034 11.2764 11.6899 11.6899C11.2764 12.1034 10.606 12.1034 10.1925 11.6899L6 7.4974L1.80752 11.6899C1.39403 12.1034 0.723619 12.1034 0.310122 11.6899C-0.103374 11.2764 -0.103374 10.606 0.310122 10.1925L4.5026 6Z" fill="#111321"/>
      </svg>
    </span>
  </div>
</template>

<script>
export default {
  props: {
    title: String
  },
  methods: {
    goback() {
      this.$router.back();
    },
    gohome() {
      this.$router.push('/');
    }
  }
}
</script>

<style lang="scss">
.page-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 43px;
  padding: 0 14px;

  &__title {
    font-weight: bold;
    font-size: 12px;
  }
}
</style>
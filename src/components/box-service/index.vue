
<template>
  <div class="box--services">
    <div class="box--services__header">Servisler</div>
    <ul class="box--services__list">
      <li v-for="(item, index) in list"
          :key="`bs-key-${index}`"
          @click="handleClick(item.serviceId)"
          class="box--services__item">
        {{item.name}}
      </li>
      <li v-for="(item, index) in emptyListCount" :key="`bs-key-empty-${index}`" class="box--services__item" ></li>
    </ul>
  </div>
</template>

<script>
export  default {
  props: {
    list: Array,
  },
  computed: {
    emptyListCount() {
      return 11 - this.list.length;
    }
  },
  methods: {
    handleClick(serviceId) {
      this.$emit('handleClick', serviceId);
    }
  }
}
</script>

<style lang="scss">
.box--services {
  width: 100%;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  &__header {
    padding: 0 16px;
    background: #F8F8F8;
    border-radius: 3px 3px 0px 0px;
    height: 32px;
    line-height: 32px;
  }

  &__list {
    list-style: none;
  }

  &__item {
    padding: 0 16px;
    height: 32px;
    line-height: 32px;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
  }
}
</style>
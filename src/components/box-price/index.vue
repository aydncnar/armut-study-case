<template>
  <div class="box--price">
    <p class="box--price__summary">Ortalama fiyat aralığı:</p>
    <p class="box--price__value">{{min}} - {{max}} <span class="box--price__currency">{{ property.currency }}</span></p>
  </div>
</template>

<script>
export default {
  props: {
    property: Object,
  },
  computed: {
    min() {
      return this.property.min && this.property.min.toLocaleString();
    },
    max() {
      return this.property.max && this.property.max.toLocaleString();
    }
  }
}
</script>

<style lang="scss">
.box--price {
  height: 50px;
  display: flex;
  justify-content: space-between;
  padding: 0 20px 0 24px;
  line-height: 50px;
  font-weight: 700;
  box-shadow: 0px 1px 4px rgba(52, 58, 67, 0.08), 0px 1px 2px rgba(0, 0, 0, 0.08), 0px 0px 2px rgba(0, 0, 0, 0.1);

  &__summary,
  &__currency {
    font-size: 12px;
  }

  &__value {
    font-size: 16px;
  }
}
</style>
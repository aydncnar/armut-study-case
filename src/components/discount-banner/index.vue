<template>
  <div class="discount-banner" v-html="textStyled"></div>
</template>

<script>
export default {
  props: {
    text: String
  },
  computed: {
    textStyled() {
      const index = this.text.indexOf('%')
      const priceText = this.text.substr(index, 3)
      const newPriceText = `<span class="discount-banner__amount">${priceText}</span>`
      const newText = this.text.replace(priceText, newPriceText);
      return newText;
    }
  }
}
</script>

<style lang="scss">
.discount-banner {
  background-color: $--color-text;
  color: #fff;
  text-align: center;
  height: 44px;
  font-size: 14px;
  line-height: 44px;
  font-weight: 700;

  &__amount {
    color: #2CB34F;
  }
}
</style>
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
      let returnValue = this.text;
      (typeof this.text == 'undefined') && (returnValue = '');
      const index = returnValue.indexOf('%')
      if (index != -1) {
        const priceText = this.text.substr(index, 3)
        const newPriceText = `<span class="discount-banner__amount">${priceText}</span>`
        const newText = returnValue.replace(priceText, newPriceText);
        return newText;
      }
      return returnValue;
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
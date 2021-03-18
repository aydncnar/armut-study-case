<template>
  <div class="counter">
    <span class="counter__toggle" @click="handleMinus">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M3 12H21H3Z" :fill="minusSVGColor"/>
        <path d="M3 12H21" :stroke="minusSVGColor" stroke-width="3" stroke-linecap="round"/>
      </svg>
    </span>
    <div class="counter__summary">
      <span class="counter__value">{{selectedValue}}</span>
      <span class="counter__unit">{{unit}}</span>
    </div>
    <span class="counter__toggle" @click="handlePlus">
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M11 2V20V2Z" :fill="plusSVGColor"/>
        <path d="M11 2V20" :stroke="plusSVGColor" stroke-width="3" stroke-linecap="round"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M2 11H20H2Z" :fill="plusSVGColor"/>
        <path d="M2 11H20" :stroke="plusSVGColor" stroke-width="3" stroke-linecap="round"/>
      </svg>
    </span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedIndex: 0
    }
  },
  props: {
    unit: String,
    values: Array
  },
  computed: {
    maxLength() {
      return this.values.length - 1;
    },
    selectedValue() {
      return this.values[this.selectedIndex].value;
    },
    minusSVGColor() {
      return this.selectedIndex > 0 ? '#111321'  : '#6E7081';
    },
    plusSVGColor() {
      return this.selectedIndex < this.maxLength ? '#111321'  : '#6E7081';
    }
  },
  methods: {
    handleMinus() {
      this.selectedIndex > 0 && this.selectedIndex--;
      this.$emit('countChange', this.value);
    },
    handlePlus() {
      this.selectedIndex < this.maxLength && this.selectedIndex++;
      this.$emit('countChange', this.value);
    }
  },
}
</script>

<style lang="scss">
.counter {
  display: flex;
  align-items: center;
  justify-content: space-between;

  &__toggle {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 50px;
    border: 1px solid #C5C6CD;
    border-radius: 50%;
    background-color: #FFF;

    &:focus,
    &:active {
      background-color: $--color-light-bg;
    }
  }

  &__summary {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  &__value {
    color: $--color-text;
    font-weight: 700;
    font-size: 48px;
    line-height: 52px;
  }

  &__unit {
    color: $--color-text-light;
    font-size: 18px;
    font-weight: 500;
    line-height: 28px;
  }
}
</style>
<template>
  <label class="radio-button" @click="handleSelect">
    <div class="radio-button__image" v-if="image">
      <img :src="image" />
    </div>
    <div class="radio-button__body">
      <input type="radio">
      <span class="radio-button__shape" :class="isCheckedClass"></span>
      <span class="radio-button__title">{{ title }}</span>
    </div>
  </label>
</template>

<script>
export default {
  data() {
    return {
      isCheckedClass: ''
    }
  },
  props: {
    name: String,
    title: String,
    customValue: String,
    model: String,
    image: String
  },
  methods: {
    handleSelect() {
      this.$emit('selectRadio', this.customValue)
    },
    isChecked() {
      const status = this.customValue == this.model;
      this.isCheckedClass = status ? 'is-check' : '';
    }
  },
  watch: {
    model() {
      this.isChecked();
    }
  },
}
</script>

<style lang="scss">
.radio-button {

  input {
    display: none;
  }

  &__image {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 12px;
    background-color: $--color-light-bg;

    img {
      max-width: 100%;
    }
  }

  &__body {
    display: flex;
    align-items: center;
    background-color: $--color-light-bg;
    padding: 14px 8px;
  }

  &__title {
    color: #111321;
    font-size: 14px;
    font-weight: 500;
    margin-left: 8px;
  }

  &__shape {
    position: relative;
    display: inline-block;
    width: 16px;
    height: 16px;
    border: 1px solid $--color-border;
    border-radius: 50%;
    background-color: #FFF;

    &.is-check {
      &::before {
        position: absolute;
        top: 50%;
        left: 50%;
        width: 8px;
        height: 8px;
        transform: translate(-50%, -50%);
        background-color: #2CB34F;
        border-radius: 50%;
        content: "";
      }
    }
  }
}
</style>
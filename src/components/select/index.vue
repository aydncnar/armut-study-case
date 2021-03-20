<template>
  <div class="select">
    <select class="select__input" @change="handleSelect" v-model="selected" ref="element">
      <option disabled selected>{{ title }}</option>
      <option v-for="(item, index) in list" :key="`select-key-${index}`">
        {{item.name}}
      </option>
    </select>
    <svg class="select__icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M20 8.34608C20 8.69036 19.8789 9.03494 19.6358 9.29786L12.8799 16.6058C12.6465 16.8579 12.3301 17 12 17C11.6701 17 11.3534 16.8579 11.12 16.6061L4.3644 9.29786C3.87853 8.77262 3.87853 7.92015 4.3644 7.3949C4.85054 6.86876 5.6381 6.86876 6.12424 7.3949L12 13.7504L17.8757 7.3946C18.3616 6.86846 19.1494 6.86846 19.6355 7.3946C19.8783 7.65722 20 8.0018 20 8.34608Z" fill="#9C9DA9"/>
    </svg>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selected: ''
    }
  },
  props: {
    list: [Array, Object],
    title: String,
    dataname: String,
    selectedItem: String
  },
  methods: {
    handleSelect(e) {
      this.$emit('handleSelect',this.dataname, e.target.value)
    }
  },
  mounted() {
    if (this.selectedItem.trim() != '') {
      this.selected = this.selectedItem
    } else  {
      this.selected = this.title
    }
  },
  updated() {
    if (this.selectedItem.trim() != '') {
      this.selected = this.selectedItem
    } else  {
      this.selected = this.title
    }
  }
}
</script>

<style lang="scss">
.select {
  position: relative;
  height: 40px;
  border: 1px solid $--color-border;
  border-radius: 3px;
  padding: 0 8px;

  &__input {
    width: 100%;
    height: 100%;
    font-size: 14px;
  }

  &__icon {
    position: absolute;
    top: 50%;
    right: 8px;
    transform: translateY(-50%);
  }
}
</style>
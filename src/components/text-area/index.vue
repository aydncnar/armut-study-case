<template>
  <div class="text-area" :class="validationClass">
    <textarea class="text-area__input" :placeholder="placeholder" @change="handleChange" v-model="val" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      val: ''
    }
  },
  props: {
    placeholder: String,
    validation: Boolean,
    customValue: String
  },
  computed: {
    validationClass() {
      return this.validation ? 'is-validation' : '';
    }
  },
  methods: {
    handleChange(e) {
      this.$emit('handle-change', e.target.value)
    }
  },
  mounted() {
    this.val = this.customValue;
  }
}
</script>

<style lang="scss">
.text-area {
  border: 1px solid $--color-border;
  border-radius: 3px;
  padding: 8px;

  &.is-validation {
    border-color: $--color-validation;
  }

  &__input {
    width: 100%;
    height: 140px;
    font-size: 14px;
    font-weight: 500;
    line-height: 22px;
    text-align: left;
  }
}
</style>
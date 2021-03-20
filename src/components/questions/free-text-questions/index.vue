<template>
  <div class="free-text-questions">
    <h2 class="section--title">{{question.label}}</h2>
    <armut-text-area
        :placeholder="question.placeHolder"
        :validation="validation"
        :custom-value="selected"
        @handle-change="handleChange" />
    <p v-if="validation" class="validation-copy">Bu Alan Zorunlu</p>
  </div>
</template>

<script>
import ArmutTextArea  from '@/components/text-area';

export default {
  props: {
    question: Object,
    selected: String,
    validation: Boolean
  },
  components: {
    ArmutTextArea
  },
  methods: {
    handleChange(value) {
      this.$emit('update-answer', value)
    }
  }
}
</script>

<style lang="scss">
.free-text-questions {
  .validation-copy {
    margin-top: 8px;
  }
}
</style>
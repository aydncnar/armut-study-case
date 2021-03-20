<template>
<div class="image-radio-questions">
  <h2 class="section--title">{{question.label}}</h2>
  <div class="question-list">
    <radio-button
        v-for="(questionItem, questionIndex) in question.values" :key="`question-item-key-${questionIndex}`"
        @selectRadio="handleSelect"
        :model="type"
        :custom-value="questionItem.value"
        :title="questionItem.value"
        :image="questionItem.valueImageUrl"
        v-model="type"/>
  </div>
  <p v-if="validation" class="validation-copy">Bu Alan Zorunlu</p>
</div>
</template>

<script>
import RadioButton from '@/components/radio-button';

export default {
  data() {
    return {
      type: ''
    }
  },
  props: {
    question: Object,
    selected: String,
    validation: Boolean
  },
  components: {
    RadioButton
  },
  methods: {
    handleSelect(value) {
      this.type = value;
      this.$emit('update-answer', value)
    }
  },
  mounted() {
    this.type = this.selected
  }
}
</script>

<style lang="scss">
.image-radio-questions {
  .radio-button {
    width: calc(50% - 8px);
    margin: 8px 0;

    &:nth-child(odd) {
      margin-right: 8px;
    }

    &:nth-child(even) {
      margin-left: 8px;
    }
  }

  .question-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
}
</style>
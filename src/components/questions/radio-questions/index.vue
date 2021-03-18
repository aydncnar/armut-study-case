<template>
  <div class="radio-questions">
    <h2 class="section--title">{{question.label}}</h2>
    <div class="question-list">
      <radio-button
          v-for="(questionItem, questionIndex) in question.values" :key="`question-item-key-${questionIndex}`"
          @selectRadio="handleSelect"
          :model="type"
          :custom-value="questionItem.value"
          :title="questionItem.value"
          v-model="type"/>
    </div>
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
    question: Object
  },
  components: {
    RadioButton
  },
  methods: {
    handleSelect(value) {
      this.type = value;
    }
  }
}
</script>

<style lang="scss">
.radio-questions {
  .question-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .radio-button {
    width: 100%;
    margin: 8px 0;
  }
}
</style>
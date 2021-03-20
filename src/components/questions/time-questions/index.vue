<template>
  <div class="radio-custom-questions">
    <h2 class="section--title">{{question.label}}</h2>
    <div class="question-list">
      <div class="u-width-1-1 row" v-for="(questionItem, questionIndex) in question.values" :key="`question-item-key-${questionIndex}`">
        <div class="u-width-1-1 " v-if="questionItem.id == customQuestionId">
          <radio-button-time
              @selectRadio="handleSelectTime"
              :model="type"
              :custom-value="questionItem.value"
              :title="questionItem.value"
              v-model="type"/>
        </div>
        <div class="u-width-1-1" v-else>
          <radio-button
              @selectRadio="handleSelect"
              :model="type"
              :custom-value="questionItem.value"
              :title="questionItem.value"
              v-model="type"/>
        </div>

      </div>

    </div>
    <p v-if="validation" class="validation-copy">Bu Alan Zorunlu</p>
  </div>
</template>

<script>
import RadioButton from '@/components/radio-button';
import RadioButtonTime from '@/components/radio-button-time';

export default {
  data() {
    return {
      type: '',
      customQuestionId: 4 // For Custom Time Select
    }
  },
  props: {
    question: Object,
    validation: Boolean
  },
  components: {
    RadioButton,
    RadioButtonTime
  },
  methods: {
    handleSelect(value) {
      this.type = value;
      this.$emit('update-answer', value);
    },
    handleSelectTime(value, time) {
      this.type = value;
      this.$emit('update-answer', `${value} : ${time} `);
    }
  }
}
</script>

<style lang="scss">
.radio-custom-questions {
  .row {
    margin: 8px 0;
  }

  .radio-button {
    width: 100%;
    margin: 8px 0;
  }
}
</style>
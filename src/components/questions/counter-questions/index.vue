<template>
  <div class="radio-questions">
    <h2 class="section--title">{{question.label}}</h2>
    <div class="question-list">
      <counter
          :values="question.values"
          :unit="question.unit"
          :selected="selected"
          @countChange="handleCount"/>
    </div>
  </div>
</template>

<script>
import Counter  from '@/components/counter';

export default {
  props: {
    question: Object,
    selected: String
  },
  components: {
    Counter
  },
  methods: {
    handleCount(value) {
      this.$emit('update-answer', value)
    }
  },
}
</script>

<style lang="scss">
.radio-questions {
  .question-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .counter{
    width: 100%;
    margin: 8px 0;
  }
}
</style>
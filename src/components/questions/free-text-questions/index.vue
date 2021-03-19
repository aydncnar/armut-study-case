<template>
  <div class="free-text-questions">
    <h2 class="section--title">{{question.label}}</h2>
    <armut-text-area :placeholder="question.placeHolder" />
  </div>
</template>

<script>
import ArmutTextArea  from '@/components/text-area';

export default {
  props: {
    question: Object
  },
  components: {
    ArmutTextArea
  },
  methods: {}
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
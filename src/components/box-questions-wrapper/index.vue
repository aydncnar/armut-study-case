<template>
  <div>
    <component v-bind:is="wrapperName"
               :question="question"
               :selected="selected"
               :validation="validationStatus"
               @update-answer="handleAnswer"
    />
  </div>
</template>

<script>
import { AnswerService } from '@/service/answer.service';
import { FormService } from '@/service/form.service';
import { ADD_OR_UPDATE_ANSWERS } from '@/store/actions.type';
import CounterQuestions from '@/components/questions/counter-questions';
import FreeTextQuestions from '@/components/questions/free-text-questions';
import ImageRadioQuestions from '@/components/questions/image-radio-questions';
import ImageUploadQuestions from '@/components/questions/image-upload';
import LocationQuestions from '@/components/questions/location-questions';
import RadioQuestions from '@/components/questions/radio-questions';
import TimeQuestions from '@/components/questions/time-questions';

export default {
  data() {
    return {
      wrapperName: '',
      selected: '',
      validationStatus: false,
      answer: false,
    }
  },
  props: {
    question: Object,
    bus: Object
  },
  components: {
    'counter': CounterQuestions,
    'free-text-questions': FreeTextQuestions,
    'image-radio': ImageRadioQuestions,
    'image-upload': ImageUploadQuestions,
    'location': LocationQuestions,
    'radio': RadioQuestions,
    'when': TimeQuestions
  },
  mounted() {
    const typeName = FormService.getTypeName(this.question.typeId).component;
    this.wrapperName = typeName;

    const answer = AnswerService.getValue(this.question.id);
    answer && (this.selected = answer);
    this.updateAnswer(answer);

    this.bus.$on('checkValidity', this.checkValidity)
  },
  methods: {
    updateAnswer(answer) {
      const answerItem = {
        questionId: this.question.id,
        question: this.question.label,
        required: this.question.required,
        answer
      }
      this.answer = answer;
      const answers = AnswerService.addOrUpdate(answerItem);
      this.$store.dispatch(ADD_OR_UPDATE_ANSWERS, answers);
    },
    handleAnswer(answer) {
      this.updateAnswer(answer);
    },
    checkValidity() {
      if (this.question.required && !this.answer ) {
        this.validationStatus = true;
        this.$emit('handle-next', true)
      } else {
        this.validationStatus = false;
        this.$emit('handle-next', false)
      }
    }
  }
}
</script>
<template>
  <div>
    <keep-alive>
      <component v-bind:is="wrapperName" :question="question" />
    </keep-alive>
  </div>
</template>

<script>
import { FormService } from '@/service/form.service';
import CounterQuestions from '@/components/questions/counter-questions';
import FreeTextQuestions from '@/components/questions/free-text-questions';
import ImageRadioQuestions from '@/components/questions/image-radio-questions';
import ImageUploadQuestions from '@/components/questions/image-upload';
import RadioQuestions from '@/components/questions/radio-questions';

export default {
  data() {
    return {
      wrapperName: ''
    }
  },
  props: {
    question: Object
  },
  components: {
    'counter': CounterQuestions,
    'free-text-questions': FreeTextQuestions,
    'image-radio': ImageRadioQuestions,
    'image-upload': ImageUploadQuestions,
    'radio': RadioQuestions
  },
  mounted() {
    const typeName = FormService.getTypeName(this.question.typeId).component;
    console.log(typeName, this.question.typeId)
    this.wrapperName = typeName;
  }
}
</script>
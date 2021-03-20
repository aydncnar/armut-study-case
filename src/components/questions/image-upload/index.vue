<template>
  <div class="image-upload-questions">
    <h2 class="section--title">{{question.label}}</h2>
    <div class="question-list">
      <image-upload @handleSelect="handleSelect" />
    </div>
  </div>
</template>

<script>
import ImageUpload from '@/components/image-upload';

export  default  {
  props: {
    question: Object
  },
  components: {
    ImageUpload
  },
  methods: {
    handleSelect(files) {
      this.$emit('update-answer', files)
    }
  }
}
</script>
<template>
  <Layout>
    <section class="page-content">
      <div v-for="(question, index) in questions"
           :key="`question-key-${index}`">
        <box-questions-wrapper :question="question" />
      </div>
    </section>

    <box-fixed-bottom>
      <button @click="goNext" class="button--primary u-width-1-1">DEVAM</button>
    </box-fixed-bottom>
  </Layout>
</template>

<script>
import Layout from '@/views/Layout';
import { BoxFixedBottom, BoxQuestionsWrapper } from '@/components';
import { FETCH_QUESTIONS } from '@/store/actions.type';

export default {
  data() {
    return {
      questions: [],
      type: ''
    }
  },
  components: {
    BoxFixedBottom,
    BoxQuestionsWrapper,
    Layout
  },
  computed: {
    routerParams() {
      return this.$router.history.current.params;
    }
  },
  mounted() {
    const pageNumber = this.routerParams.page;
    const serviceId = this.routerParams.id;

    if (pageNumber == 0) {
      this.$store.dispatch(FETCH_QUESTIONS, serviceId).then(() => {
        this.getPageQuestions(this.$store.getters.questions, pageNumber);
      })
    } else {
      this.getPageQuestions(this.$store.getters.questions, pageNumber);
    }
  },
  methods: {
    getPageQuestions(questionList, pageNumber) {
      this.questions = questionList.filter(item => item.pageNumber == pageNumber);
    },
    goNext() {
      const nextPage = parseInt(this.routerParams.page) + 1;
      const serviceId = this.routerParams.id;
      this.$router.push(`/service/${serviceId}/${nextPage}`);
    }
  }
}
</script>

<style lang="scss">
.page-content {
  padding: 0 24px 100px;
}
</style>
<template>
  <Layout>
    <discount-banner v-if="discount" :text="discount" />
    <section class="page-content">
      <div v-for="(question, index) in questions"
           :key="`question-key-${index}`">
        <box-questions-wrapper
            :question="question"
            @handle-next="handleNext"
            :bus="bus" />
      </div>
    </section>
    <box-fixed-bottom>
      <button v-if="!isLastPage" @click="goNext" class="button--primary u-width-1-1">DEVAM</button>
      <button v-if="isLastPage" @click="goResult" class="button--primary u-width-1-1">TALEP GÖNDER</button>
    </box-fixed-bottom>
  </Layout>
</template>

<script>
import Vue from 'vue';
import Layout from '@/views/Layout';
import { BoxFixedBottom, BoxQuestionsWrapper, DiscountBanner } from '@/components';
import { FETCH_QUESTIONS, UPDATE_PROGRESS } from '@/store/actions.type';

export default {
  data() {
    return {
      questions: [],
      type: '',
      discount: '',
      validation: false,
      bus: new Vue(),
    }
  },
  components: {
    BoxFixedBottom,
    BoxQuestionsWrapper,
    DiscountBanner,
    Layout
  },
  computed: {
    routerParams() {
      return this.$router.history.current.params;
    },
    isLastPage() {
      const pageNumber = this.routerParams.page;
      const lastPageNumber = this.$store.getters.lastPageNumber;
      return pageNumber == lastPageNumber ? true : false;
    },
  },
  mounted() {
    const pageNumber = this.routerParams.page;
    const serviceId = this.routerParams.id;

    if (pageNumber == 0) {
      this.$store.dispatch(FETCH_QUESTIONS, serviceId).then(() => {
        this.getPageQuestions(this.$store.getters.questions, pageNumber);
        this.discount = this.$store.getters.currentService(serviceId).discountRateText;
      })
    } else {
      this.getPageQuestions(this.$store.getters.questions, pageNumber);
    }

    this.setProgress();
  },
  methods: {
    getPageQuestions(questionList, pageNumber) {
      this.questions = questionList.filter(item => item.pageNumber == pageNumber);
    },
    setProgress() {
      const pageNumber = parseInt(this.routerParams.page);
      const lastPageNumber = parseInt(this.$store.getters.lastPageNumber);
      const progress = (pageNumber + 1) / (lastPageNumber + 1)  * 100;
      this.$store.dispatch(UPDATE_PROGRESS, progress)
    },
    goNext() {
      this.checkValidity();
      if (!this.validation) {
        const nextPage = parseInt(this.routerParams.page) + 1;
        const serviceId = this.routerParams.id;
        this.$router.push(`/service/${serviceId}/${nextPage}`);
      }
    },
    goResult() {
      this.checkValidity();
      !this.validation && this.$router.push(`/result`);
    },
    checkValidity() {
      this.bus.$emit('checkValidity');
    },
    handleNext(validation) {
      this.validation = validation;
    }
  },
  updated() {
    this.setProgress();
  }
}
</script>

<style lang="scss">
.page-content {
  padding: 0 24px 100px;
}
</style>
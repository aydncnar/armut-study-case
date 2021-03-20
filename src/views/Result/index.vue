<template>
  <div class="page-result">
    <div class="page-result__content">
      <img src="../../assets/confetti.png" alt="">
      <p>Talebini aldık! </p>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    const answers = this.$store.getters.answers;
    console.table(answers, ['questionId', 'question', 'answer', 'required'])
  }
}
</script>

<style lang="scss">
.page-result {
  width: 100%;
  height: 175px;
  background-image: url('../../assets/result-bg.png');
  background-size: cover;
  display: flex;
  align-items: center;

  &__content {
    display: flex;
    align-items: flex-end;
    padding-left: 16px;

    img {
      width: 45px;
      height: 45px;
      margin-right: 24px;
    }

    p {
      font-size: 18px;
      font-weight: 700;
      line-height: 22px;
    }
  }
}
</style>
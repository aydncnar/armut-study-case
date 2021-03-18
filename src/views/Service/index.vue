<template>
  <Layout>

  </Layout>
</template>

<script>
import Layout from '@/views/Layout';
import { FETCH_QUESTIONS } from '@/store/actions.type';

export default {
  components: {
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
      this.$store.dispatch(FETCH_QUESTIONS, serviceId)
    }
  }
}
</script>
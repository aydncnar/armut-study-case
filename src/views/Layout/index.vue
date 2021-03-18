<template>
  <div>
    <page-header :title="headerTitle" />
    <header-progress/>
    <box-price :property="boxPriceData" />
  </div>
</template>

<script>
import { BoxPrice, PageHeader, HeaderProgress } from '@/components';

export default {
  data() {
    return {
      boxPriceData: {},
      headerTitle: ''
    }
  },
  components: {
    BoxPrice,
    PageHeader,
    HeaderProgress
  },
  computed: {
    routerParams() {
      return this.$router.history.current.params;
    }
  },
  mounted() {
    const serviceId = this.routerParams.id;
    const service = this.$store.getters.currentService(serviceId);
    this.boxPriceData = service.price;
    this.headerTitle = service.name;
  }
}
</script>
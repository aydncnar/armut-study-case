<template>
  <div class="home-page">
    <box-service @handleClick="handleClick" :list="serviceList" />
  </div>
</template>

<script>
import { FETCH_SERVICES } from '@/store/actions.type';
import { BoxService }  from "@/components";

export default {
  name: 'Home',
  data() {
    return {
      serviceList: [],
    }
  },
  components: {
    BoxService
  },
  mounted() {
    this.$store.dispatch(FETCH_SERVICES).then(() => {
      this.serviceList = this.$store.getters.services;
    })
  },
  methods: {
    handleClick(serviceId) {
      this.$router.push(`/service/${serviceId}/0`);
    }
  }
}
</script>

<style src="./style.scss" lang="scss"></style>

<template>
  <div class="location-questions">
    <h2 class="section--title">{{question.label}}</h2>
    <div class="question-list">

      <armut-select
          ref="city"
          @handleSelect="handleSelect"
          :list="cities"
          :selected-item="location.city"
          dataname="city"
          title="İl"/>

      <armut-select
          ref="town"
          @handleSelect="handleSelect"
          :list="towns"
          :selected-item="location.town"
          dataname="town"
          title="İlçe"/>

      <armut-select
          ref="district"
          @handleSelect="handleSelect"
          :list="districts"
          :selected-item="location.district"
          dataname="district"
          title="Mahalle" />
    </div>
    <p v-if="validation" class="validation-copy">Bu Alan Zorunlu</p>
  </div>
</template>

<script>
import ArmutSelect from '@/components/select';
import { API } from '@/service/api.service';

export default {
  data() {
    return {
      cities: [],
      towns: [],
      districts: [],
      location: {
        city: '',
        town: '',
        district: ''
      }
    }
  },
  props: {
    question: Object,
    validation: Boolean,
    selected: [String, Object]
  },
  components: {
    ArmutSelect
  },
  methods: {
    getCities() {
      API.getCity().then(response => {
        this.cities = response.data;
      })
    },
    getTowns() {
      API.getTowns().then(response => {
        this.towns = response.data;
      })
    },
    getDistricts() {
      API.getDistricts().then(response => {
        this.districts = response.data;
      })
    },
    handleSelect(dataname, value) {
      this.location[dataname] = value;

      const empty = Object.keys(this.location).findIndex(item => {
        return this.location[item] == '';
      });

      if (empty == - 1) {
        this.$emit('update-answer', this.location)
      }
    }
  },
  mounted() {
    this.getCities();
    this.getTowns();
    this.getDistricts();

    if(this.selected == '') {
      this.location.city = '';
      this.location.town = '';
      this.location.district = '';
    } else  {
      this.location.city = this.selected.city;
      this.location.town = this.selected.town;
      this.location.district = this.selected.district;
    }
  }
}
</script>

<style lang="scss">
.location-questions {
  .select {
    margin: 8px 0;
  }
}
</style>
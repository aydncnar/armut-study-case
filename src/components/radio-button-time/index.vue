<template>
  <label class="radio-button" @click="handleSelectRadio">
    <div class="radio-button__body">
      <input type="radio">
      <span class="radio-button__shape" :class="isCheckedClass"></span>
      <span class="radio-button__title">{{ title }}</span>
    </div>
    <div class="radio-button__time">
      <div class="radio-button__time-day">
        <armut-select ref="day" dataname="day" @handleSelect="handleSelect" :list="days" :selected-item="day"  />
      </div>
      <div class="radio-button__time-hour">
        <armut-select ref="hour" dataname="hour" @handleSelect="handleSelect" :list="hours" :selected-item="hour"  />
      </div>
    </div>
  </label>
</template>

<script>
import ArmutSelect from '@/components/select';
export default {
  data() {
    return {
      isCheckedClass: '',
      hour: '',
      day: '',
    }
  },
  components: {
    ArmutSelect
  },
  props: {
    name: String,
    title: String,
    customValue: String,
    model: String,
    image: String
  },
  computed: {
    hours() {
      const hourList= [];
      for (let i=0 ; i<24; i++ ) {
        const value = `${i}:00`;
        hourList.push({
          name: value
        })
      }
      return hourList;
    },
    days() {
      const dayList = [];
      for (let i=20 ; i<27; i++ ) {
        const value = `Mart ${i}, 2021`;
        dayList.push({
          name: value
        })
      }
      return dayList;
    },
    value() {
      return `${this.day} ${this.hour}`
    }
  },
  methods: {
    handleSelectRadio() {
      this.$emit('selectRadio', this.customValue, this.value)
    },
    handleSelect(dataname, value) {
      this[dataname] = value;
      this.$emit('selectRadio', this.customValue, this.value)
    },
    isChecked() {
      const status = this.customValue == this.model;
      this.isCheckedClass = status ? 'is-check' : '';
    }
  },
  mounted() {
    this.hour = '9:00';
    this.day = 'Mart 20, 2021'
  },
  watch: {
    model() {
      this.isChecked();
    }
  },
}
</script>

<style lang="scss">
.radio-button {

  input {
    display: none;
  }

  &__body {
    display: flex;
    align-items: center;
    background-color: $--color-light-bg;
    padding: 14px 8px;
  }

  &__title {
    color: #111321;
    font-size: 14px;
    font-weight: 500;
    margin-left: 8px;
  }

  &__shape {
    position: relative;
    display: inline-block;
    width: 16px;
    height: 16px;
    border: 1px solid $--color-border;
    border-radius: 50%;
    background-color: #FFF;

    &.is-check {
      &::before {
        position: absolute;
        top: 50%;
        left: 50%;
        width: 8px;
        height: 8px;
        transform: translate(-50%, -50%);
        background-color: #2CB34F;
        border-radius: 50%;
        content: "";
      }
    }
  }

  &__time {
    display: flex;
    background-color: $--color-light-bg;
    padding: 0 12px 12px;

    &-day {
      width: calc(100% / 3 * 2 - 8px);
      margin-right: 8px;
    }

    &-hour {
      width: calc(100% / 3 - 8px);
    }
  }
}
</style>
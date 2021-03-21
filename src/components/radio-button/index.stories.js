/*
* Aydin Cinar <cinar.aydinn@gmail.com>
* Radio Button Story Book
*/


import RadioButton from "./index.vue";

export default { title: "Radio Button" };

export const Base = () => ({
    components: { RadioButton },
    template: '<radio-button  @selectRadio="handleSelect"  title="Radio Button" :model="type" custom-value="radio"  />',
    data: function () {
        return {
            type: ''
        }
    },
    methods: {
        handleSelect(value) {
            this.type = value;
        }
    }
});

export const Selected = () => ({
    components: { RadioButton },
    template: '<radio-button  title="Radio Button" model="radio" custom-value="radio" />',
});

export const ImageRadio = () => ({
    components: { RadioButton },
    template: '<radio-button @selectRadio="handleSelect" :model="type" title="Radio Button" custom-value="radio" image="https://cdn.armut.com//images/serviceoptions/f2e2d3c6-86d2-4307-a31c-537bef55c990.png"" />',
    data: function () {
        return {
            type: ''
        }
    },
    methods: {
        handleSelect(value) {
            this.type = value;
        }
    }
});
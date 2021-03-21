/*
* Aydin Cinar <cinar.aydinn@gmail.com>
* Radio Button Story Book
*/


import RadioButtonTime from "./index.vue";

export default { title: "Radio Button Time" };


export const Base = () => ({
    components: { RadioButtonTime },
    template: '<radio-button-time @selectRadio="handleSelect" :model="type" custom-value="data" title="Radio Button" />',
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

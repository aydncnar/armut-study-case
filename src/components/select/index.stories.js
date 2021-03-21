/*
* Aydin Cinar <cinar.aydinn@gmail.com>
* Select Story Book
*/


import ArmutSelect from "./index.vue";

export default { title: "Select" };

export const Base = () => ({
    components: { ArmutSelect },
    template: '<armut-select title="İl" :list="cities"  @handleSelect="handleSelect" :selected-item="city"  dataname="city" />',
    data : function () {
        return {
            cities: [
                {
                    "cityId": 6,
                    "name": "Ankara"
                },
                {
                    "cityId": 34,
                    "name": "İstanbul"
                }
            ],
            city: ''
        }
    },
    methods: {
        handleSelect(dataname, value) {
            this[dataname] = value;
        },
    }
});


export const Validation = () => ({
    components: { ArmutSelect },
    template: '<armut-select :validation="true" title="İl" :list="cities"  @handleSelect="handleSelect" :selected-item="city"  dataname="city" />',
    data : function () {
        return {
            cities: [
                {
                    "cityId": 6,
                    "name": "Ankara"
                },
                {
                    "cityId": 34,
                    "name": "İstanbul"
                }
            ],
            city: ''
        }
    },
    methods: {
        handleSelect(dataname, value) {
            this[dataname] = value;
        },
    }
});
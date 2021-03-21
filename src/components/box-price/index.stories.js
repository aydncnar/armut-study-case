/*
* Aydin Cinar <cinar.aydinn@gmail.com>
* Box Price Story Book
*/


import BoxPrice from "./index.vue";

export default { title: "Box Price" };

export const Base = () => ({
    components: { BoxPrice },
    template: '<box-price :property="price" />',
    data: function () {
        return {
            price: {
                "max": 1000,
                "min": 100,
                "currency": "TL"
            },
        }
    }
});
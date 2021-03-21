/*
* Aydin Cinar <cinar.aydinn@gmail.com>
* Box Services Story Book
*/


import BoxServices from "./index.vue";

export default { title: "Box Services" };

export const Base = () => ({
    components: { BoxServices },
    template: '<box-services :list="price" />',
    data: function () {
        return {
            price: [
                {
                    "name": "Ferforje"
                },
                {
                    "name": "Cam Balkon"
                }
            ]
        }
    }
});
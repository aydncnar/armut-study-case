/*
* Aydin Cinar <cinar.aydinn@gmail.com>
* Counter Story Book
*/


import Counter from "./index.vue";

export default { title: "Counter" };

export const Base = () => ({
    components: { Counter },
    template: '<counter :values="values" unit="metre" selected="1"   />',
    data: function () {
        return {
            values: [
                {
                    "id": 2069,
                    "value": "1",
                    "valueOrder": 0
                },
                {
                    "id": 2070,
                    "value": "2",
                    "valueOrder": 1
                },             {
                    "id": 2071,
                    "value": "3",
                    "valueOrder": 2
                },
                {
                    "id": 2072,
                    "value": "4",
                    "valueOrder":3
                }

            ]
        }
    }
});
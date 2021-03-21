/*
* Aydin Cinar <cinar.aydinn@gmail.com>
* Header Progress Book
*/


import HeaderProgress from "./index.vue";

export default { title: "Header Progress" };


export const Percent25 = () => ({
    components: { HeaderProgress },
    template: '<header-progress progress="25"  />',
});

export const Percent100 = () => ({
    components: { HeaderProgress },
    template: '<header-progress progress="100"  />',
});
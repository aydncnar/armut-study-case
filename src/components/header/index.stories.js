/*
* Aydin Cinar <cinar.aydinn@gmail.com>
* Header Story Book
*/


import PageHeader from "./index.vue";

export default { title: "Header" };


export const Base = () => ({
    components: { PageHeader },
    template: '<page-header title="Sayfa Başlığı" />',
});
/*
* Aydin Cinar <cinar.aydinn@gmail.com>
* Text Area Story Book
*/


import TextArea from "./index.vue";

export default { title: "Text Area" };


export const Placeholder = () => ({
    components: { TextArea },
    template: '<text-area  placeholder="Adres Giriniz" />',
});

export const Filled = () => ({
    components: { TextArea },
    template: '<text-area  custom-value="Maltepe/İstanbul" />',
});

export const Validation = () => ({
    components: { TextArea },
    template: '<text-area :validation="true"/>',
});
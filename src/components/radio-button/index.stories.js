/*
* Aydin Cinar <cinar.aydinn@gmail.com>
* Radio Button Story Book
*/


import RadioButton from "./index.vue";

export default { title: "Radio Button" };

/*<radio-button
    v-for="(questionItem, questionIndex) in question.values" :key="`question-item-key-${questionIndex}`"
@selectRadio="handleSelect"
:model="type"
:custom-value="questionItem.value"
:title="questionItem.value"
:image="questionItem.valueImageUrl"
v-model="type"/>*/

export const Base = () => ({
    components: { RadioButton },
    template: '<radio-button  title="Radio Button" />',
});

export const Selected = () => ({
    components: { RadioButton },
    template: '<radio-button  title="Radio Button" model="abc" custom-value="abc" />',
});

export const ImageRadio = () => ({
    components: { RadioButton },
    template: '<radio-button  title="Radio Button" image="https://cdn.armut.com//images/serviceoptions/f2e2d3c6-86d2-4307-a31c-537bef55c990.png"" />',
});
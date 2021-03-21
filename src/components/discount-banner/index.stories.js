/*
* Aydin Cinar <cinar.aydinn@gmail.com>
* Discount Banner Story Book
*/


import DiscountBanner from "./index.vue";

export default { title: "Discount Banner" };

export const Base = () => ({
    components: { DiscountBanner },
    template: '<discount-banner text="Bu hizmet Şubat ayında %17 indirimli!"  />',
});
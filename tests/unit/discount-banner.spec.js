/*
* Aydin Cinar <cinar.aydinn@gmail.com>
* Discount Banner Test
*/

import { shallowMount } from '@vue/test-utils';
import { DiscountBanner } from '@/components';

describe('DiscountBanner.vue', () => {

    it('renders props.discount when not passed',  () => {
        const wrapper = shallowMount(DiscountBanner)
        expect(wrapper.find('.discount-banner').text()).toBe('')
    })

    it('renders props.discount when passed',  () => {
        const wrapper = shallowMount(DiscountBanner, {
            propsData: {
                text: 'Discount'
            }
        })
        expect(wrapper.find('.discount-banner').text()).toBe('Discount')
    })

    it('renders props.discount when passed with ratio',  () => {
        const wrapper = shallowMount(DiscountBanner, {
            propsData: {
                text: 'Discount %15 ratio'
            }
        })
        expect(wrapper.find('.discount-banner').html()).toContain('<span class="discount-banner__amount">%15</span>')
    })
})

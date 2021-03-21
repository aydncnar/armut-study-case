/*
* Aydin Cinar <cinar.aydinn@gmail.com>
* Counter Test
*/

import Vue from 'vue';
import { shallowMount } from '@vue/test-utils';
import { Counter }  from '@/components';

const values = [
    {
        value: '1'
    },
    {
        value: '2'
    },
    {
        value: '3'
    }
];

describe('Counter.vue', () => {

    it('renders props.unit when passed', () => {
        const wrapper = shallowMount(Counter, {
            propsData: {
                values,
                unit: 'metre'
            }
        })
        expect(wrapper.find('.counter__unit').text()).toBe('metre')
    })
    it('renders props.selected when passed', async () => {
        const spy = jest.spyOn(Counter.methods, 'init')
        const wrapper = shallowMount(Counter, {
            propsData: {
                values,
                selected: '2'
            }
        })
        await spy;
        expect(wrapper.find('.counter__value').text()).toBe('2')
    })

    it('click minus when executable', async() => {
        const wrapper = shallowMount(Counter, {
            propsData: {
                values
            }
        })
        const buttonToggle = wrapper.find('.counter__toggle')
        buttonToggle.trigger('click')
        await Vue.nextTick()
        expect(wrapper.find('.counter__value').text()).toBe('1')
    })

    it('click minus when index equel zero', async() => {
        const wrapper = shallowMount(Counter, {
            propsData: {
                values,
                selected: '3'
            }
        })
        const buttonToggle = wrapper.find('.counter__toggle')
        buttonToggle.trigger('click')
        await Vue.nextTick()
        expect(wrapper.find('.counter__value').text()).toBe('2')
    })
})

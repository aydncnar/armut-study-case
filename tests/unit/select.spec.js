/*
* Aydin Cinar <cinar.aydinn@gmail.com>
* Select Test
*/

import { shallowMount } from '@vue/test-utils';
import {ArmutSelect, ArmutTextArea} from '@/components';

const list = [
    {
        "name": "Ankara"
    },
    {
        "name": "İstanbul"
    }
]

describe('Select.vue', () => {
    it('renders props.list when passed',  () => {
        const wrapper = shallowMount(ArmutSelect, {
            propsData: {
                list
            }
        })
        expect(wrapper.findAll('option')).toHaveLength(2)
    })

    it('renders props.selected when selected', async () => {
        const spy = jest.spyOn(ArmutTextArea.methods, 'init')
        const wrapper = shallowMount(ArmutSelect, {
            propsData: {
                list,
                selectedItem: 'İstanbul'
            }
        })
        await spy;
        expect(wrapper.find('.select__input').element.value).toBe('İstanbul')
    })

    it('renders props.validation when passed',  () => {
        const wrapper = shallowMount(ArmutSelect, {
            propsData: {
                validation: true
            }
        })
        expect(wrapper.classes()).toContain('is-validation')
    })
})

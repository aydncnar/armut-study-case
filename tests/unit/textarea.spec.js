/*
* Aydin Cinar <cinar.aydinn@gmail.com>
* TextArea Test
*/

import { shallowMount } from '@vue/test-utils';
import { ArmutTextArea } from '@/components';

describe('TextArea.vue', () => {
    it('renders props.placeholder when passed', async () => {
        const spy = jest.spyOn(ArmutTextArea.methods, 'init')
        const wrapper = shallowMount(ArmutTextArea, {
            propsData: {
                placeholder: 'Placeholder'
            }
        })
        await spy;
        expect(wrapper.find('.text-area__input').element.placeholder).toBe('Placeholder')
    })

    it('renders props.customValue when passed', async () => {
        const spy = jest.spyOn(ArmutTextArea.methods, 'init')
        const wrapper = shallowMount(ArmutTextArea, {
            propsData: {
                customValue: 'Textarea Unit Test'
            }
        })
        await spy;
        expect(wrapper.find('.text-area__input').element.value).toBe('Textarea Unit Test')
    })

    it('renders props.validation when passed',  () => {
        const wrapper = shallowMount(ArmutTextArea, {
            propsData: {
                validation: true
            }
        })
        expect(wrapper.classes()).toContain('is-validation')
    })
})

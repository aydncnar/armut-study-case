/*
* Aydin Cinar <cinar.aydinn@gmail.com>
* Header Progress Test
*/

import { shallowMount } from '@vue/test-utils';
import { HeaderProgress } from '@/components';

describe('HeaderProgress.vue', () => {
    it('renders props.progress when passed',  () => {
        const wrapper = shallowMount(HeaderProgress, {
            propsData: {
                progress: 25
            }
        })
        expect(wrapper.element.style.width).toContain('25%')
    })
})

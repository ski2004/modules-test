import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import Mask from '@/components/common/mask.vue'


describe('Mask.vue', () => {
  it('renders props.active when passed', () => {
    const active = true
    let wrapper = shallowMount(Mask, {
      propsData: { active  },
    })

    // 關閉按鈕按下
    wrapper.find('.btn-close').trigger('click')
    expect(wrapper.vm.show).to.equal(false)
    // expect(wrapper.find('.background').toBeVisible()).to.equal(false)
  })
})

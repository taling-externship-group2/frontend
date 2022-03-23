import { mount } from '@vue/test-utils';
import TalentBest from '@/components/Home/TalentBest.vue';

describe('탈잉 BEST 탭 영역에 대한 element존재 여부를 검증합니다.', () => {
  const wrapper = mount(TalentBest);

  test('탈잉 베스트 영역이 존재하는지 확인합니다.', () => {
    expect(wrapper.find('div[data-test="talent-best"]').exists()).toBeTruthy();
  });
});

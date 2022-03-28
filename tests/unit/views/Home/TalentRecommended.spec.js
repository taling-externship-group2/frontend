import { mount } from '@vue/test-utils';
import TalentRecommended from '@/views/Home/TalentRecommended.vue';

describe('추천수업 탭 영역에 대한 element존재 여부를 검증합니다.', () => {
  const wrapper = mount(TalentRecommended);

  test('추천수업 영역이 존재하는지 확인합니다.', () => {
    expect(wrapper.find('div[data-test="talent-recommended"]').exists()).toBeTruthy();
  });
});

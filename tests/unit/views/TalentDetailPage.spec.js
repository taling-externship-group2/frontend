import { mount } from '@vue/test-utils';
import TalentDetailPage from '@/views/TalentDetailPage.vue';

describe('상세 클래스 페이지와 관련된 테스트 입니다.', () => {
  test('상세 클래스 페이지로 명시되는 element가 렌더링 되는지 확인합니다', () => {
    const wrapper = mount(TalentDetailPage);

    expect(wrapper.find('[data-test="talent-detail-page"]').exists()).toBeTruthy();
  });
});

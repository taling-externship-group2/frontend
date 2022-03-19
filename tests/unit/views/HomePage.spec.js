import { mount } from '@vue/test-utils';
import HomePage from '@/views/HomePage.vue';

describe('홈 페이지와 관련된 테스트 입니다.', () => {
  test('홈 페이지로 명시되는 element가 렌더링 되는지 확인합니다', () => {
    const wrapper = mount(HomePage);

    expect(wrapper.find('[data-test="home-page"]').exists()).toBeTruthy();
  });
});

import { mount } from '@vue/test-utils';
import SearchPage from '@/views/SearchPage.vue';

describe('검색 페이지와 관련된 테스트 입니다.', () => {
  test('검색 페이지로 명시되는 element가 렌더링 되는지 확인합니다', () => {
    const wrapper = mount(SearchPage);

    expect(wrapper.find('[data-test="search-page"]').exists()).toBeTruthy();
  });
});

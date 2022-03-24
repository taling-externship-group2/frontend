import { mount } from '@vue/test-utils';
import SearchCom from '@/components/SearchHeaderCom.vue';

describe('Footer Components에 존재해야할 element에 대한 테스트 입니다.', () => {
  const wrapper = mount(SearchCom);

  test('SearchHeader Components 작성을 위한 페이지가 존재해야합니다.', () => {
    expect(wrapper.find('section[data-test="searchHeader-page"]').exists()).toBeTruthy();
  });

  test('탈잉 로고가 존재해야 합니다.', () => {
    expect(wrapper.find('[data-test="talingLogo"]').exists()).toBeTruthy();
  });

  test('홈HOME 버튼이 존재해야 합니다', () => {
    expect(wrapper.find('[data-test="homeBtn"]').exists()).toBeTruthy();
  });

  test('브오디VOD 버튼이 존재해야 합니다', () => {
    expect(wrapper.find('[data-test="vodBtn"]').exists()).toBeTruthy();
  });

  test('검색창이 존재해야 합니다.', () => {
    expect(wrapper.find('[data-test="searchInput"]').exists()).toBeTruthy();
  });

  test('튜터등록, 실시간 톡, 수업신청서 수강목록, 찜, 프로필이미지가 존재해야 합니다.', () => {
    expect(wrapper.find('[data-test="menuTabBtn"]').exists()).toBeTruthy();
  });
});

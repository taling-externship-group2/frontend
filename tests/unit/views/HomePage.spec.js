import { mount } from '@vue/test-utils';
import HomePage from '@/views/HomePage.vue';

describe('홈 페이지의 헤더 영역의 대한 테스트 입니다.', () => {
  const wrapper = mount(HomePage);

  test('홈 페이지의 헤더가 렌더링 되는지 확인합니다', () => {
    expect(wrapper.find('header[data-test="home-header"]').exists()).toBeTruthy();
  });

  test('로고가 존재해야 합니다.', () => {
    expect(wrapper.find('img[data-test="logo-image"]').exists()).toBeTruthy();
  })

  test('홈 링크가 존재해야 합니다.', () => {
    expect(wrapper.find('a[data-test="home-link"]').exists()).toBeTruthy();
  })

  test('홈 브오디 링크가 존재해야 합니다.', () => {
    expect(wrapper.find('a[data-test="vod-link"]').exists()).toBeTruthy();
  })

  test('클래스 검색 field가 존재해야 합니다.', () => {
    expect(wrapper.find('input[data-test="search-field"]').exists()).toBeTruthy();
  })

  test('클래스 검색 버튼이 존재해야 합니다.', () => {
    expect(wrapper.find('button[data-test="search-button"]').exists()).toBeTruthy();
  })

  test('클래스 카테고리별 링크가 존재하고, N개의 카테고리 링크가 존재해야 합니다.', async () => {
    const testCategories = [
      { id: 'C1', name: '인기TC' },
      { id: 'C2', name: '외국어TC' },
      { id: 'C3', name: '액티비티TC' },
      { id: 'C4', name: '취미 공예TC' },
      { id: 'C5', name: '디자인 영상TC' },
      { id: 'C6', name: '뷰티 헬스TC' },
      { id: 'C7', name: '라이프TC' },
      { id: 'C8', name: '머니TC' },
      { id: 'C9', name: '커리어TC' },
    ]

    await wrapper.setData({
      categories: testCategories
    });

    /* 검증이 필요 */
    for (let i; i < testCategories.length; i += 1) {
      expect(wrapper.find(`a[data-test=${testCategories[i].name}]`).text()).toEqual(testCategories[i].name)
    }
  })
});

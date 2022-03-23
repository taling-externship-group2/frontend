import { mount } from '@vue/test-utils';
import TalentItem from '@/components/Home/TalentItem.vue';

describe('클래스 목록 아이템 컴포넌트의 element 존재여부에 대한 검증입니다.', () => {
  const wrapper = mount(TalentItem);

  test('썸네일 이미지가 존재해야합니다. ', () => {
    expect(wrapper.find('img[data-test="talent-thumb-image"]').exists()).toBeTruthy();
  });

  test('Badge 태그가 존재해야 합니다.', () => {
    expect(wrapper.find('span[data-test="badge"]').exists()).toBeTruthy();
  });

  test('클래스 타이틀이 존재해야 합니다.', () => {
    expect(wrapper.find('[data-test="talent-title"]').exists()).toBeTruthy();
  });

  test('클래스 카테고리가 존재해야 합니다.', () => {
    expect(wrapper.find('[data-test="talent-category"]').exists()).toBeTruthy();
  });

  test('클래스 튜터이름이 존재해야 합니다.', () => {
    expect(wrapper.find('[data-test="tutor-name"]').exists()).toBeTruthy();
  });

  test('클래스의 원가가 존재해야 합니다.', () => {
    expect(wrapper.find('[data-test="original-price"]').exists()).toBeTruthy();
  });

  test('클래스의 할인가가 존재해야합니다.', () => {
    expect(wrapper.find('[data-test="discounted-price"]').exists()).toBeTruthy();
  });

  test('클래스의 할인율이 존재해야합니다.', () => {
    expect(wrapper.find('[data-test="discount-rate"]').exists()).toBeTruthy();
  });

  test('클래스의 총 구성시간이 존재해야 합니다.', () => {
    expect(wrapper.find('[data-test="total-duration"]').exists()).toBeTruthy();
  });

  test('클래스의 찜 갯수가 표시되는 항목이 존재해야 합니다.', () => {
    expect(wrapper.find('[data-test="wish-count"]').exists()).toBeTruthy();
  });
});

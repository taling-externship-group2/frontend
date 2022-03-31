import { mount } from '@vue/test-utils';
import MultiCarouselItem from '@/components/Home/MultiCarouselItem.vue';

describe('클래스 목록 아이템 컴포넌트의 element 존재여부에 대한 검증입니다.', () => {
  const wrapper = mount(MultiCarouselItem);

  test('썸네일 이미지가 존재해야합니다. ', () => {
    expect(wrapper.find('img[data-test="talent-thumb-image"]').exists()).toBeTruthy();
  });

  test('찜목록 추가하기 버튼이 존재해야 합니다.', () => {
    expect(wrapper.find('button[data-test="wish-btn"]').exists()).toBeTruthy();
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

describe('TalentList.vue페이지에서 사용될 TalentItem.vue컴포넌트의 data binding의 여부를 검증합니다.', () => {
  const testProps = {
    id: '1',
    image: 'testImageUrlProvider',
    badge_list: ['테스트 뱃지', '테스트 라이브'],
    original_price: 888888,
    discounted_price: 444444,
    discount_rate: 50,
    total_duration: 500,
    wish_count: 9999,
    review_count: 9999,
    category: 'PPT',
    tutor_name: 'Hugo',
    talent_title: 'How to build coherent unit test cases and E2E test cases',
  };

  const wrapper = mount(MultiCarouselItem, {
    props: testProps,
  });

  test('썸네일 이지미의 url의 data가 props와 바인딩이 이루어지는지를 확인합니다.', () => {
    expect(wrapper.get('img[data-test="talent-thumb-image"]').attributes('src')).toEqual(testProps.image);
  });

  test('클래스의 타이틀의 렌더링 결과가 의도한 data와 일치하는지 확인합니다.', () => {
    expect(wrapper.get('[data-test="talent-title"]').text()).toEqual(testProps.talent_title);
  });

  test('클래스의 카테고리의 렌더링 결과가 의도한 data와 일치하는지를 확인합니다. ', () => {
    expect(wrapper.get('[data-test="talent-category"]').text()).toEqual(testProps.category);
  });

  test('클래스의 튜터 이름의 렌더링 결과가 의도한 data와 일치하는지 확인합니다.', () => {
    expect(wrapper.get('[data-test="tutor-name"]').text()).toEqual(testProps.tutor_name);
  });

  test('클래스의 원가의 렌더링 결과가 의도한 data와 일치하는지 확인합니다.', () => {
    const originalPrice = `${testProps.original_price.toLocaleString()}원`;

    expect(wrapper.get('[data-test="original-price"]').text()).toEqual(originalPrice);
  });

  test('클래스의 할인가의 렌러딩 결과가 의도한 data와 일치하는지 확인합니다.', () => {
    const discountedPrice = `${testProps.discounted_price.toLocaleString()}원`;

    expect(wrapper.get('[data-test="discounted-price"]').text()).toEqual(discountedPrice);
  });

  test('클래스의 할인율의 렌더링 결과가 의도한 data와 일치하는지 확인합니다.', () => {
    const discountRate = `${testProps.discount_rate}%`;

    expect(wrapper.get('[data-test="discount-rate"]').text()).toEqual(discountRate);
  });
});

import { mount } from '@vue/test-utils';
import MultiCarousel from '@/components/Home/MultiCarousel.vue';

describe('Carousel 컴포넌트의 element존재 여부를 검증합니다.', () => {
  const wrapper = mount(MultiCarousel);

  test('carousel별로 타이틀이 존재하는지 확인합니다.', () => {
    expect(wrapper.find('[data-test="carousel-title"]').exists()).toBeTruthy();
  });

  test('carousel item을 control할수있는 버튼이 존재하는지 확인합니다.', () => {
    expect(wrapper.find('[data-test="carousel-button-container"]').exists()).toBeTruthy();

    expect(wrapper.find('[data-test="prev-btn"]').exists()).toBeTruthy();
    expect(wrapper.find('[data-test="next-btn"]').exists()).toBeTruthy();
  });

  test('carousel slide에 렌더링될 내용을 포함할 element가 존재하는지 확인합니다.', () => {
    expect(wrapper.find('[data-test="carousel-contents"]').exists()).toBeTruthy();
  });
});

import { mount } from '@vue/test-utils';
import RollingBanner from '@/components/Home/RollingBanner.vue';

describe('롤리베너 컴포넌트의 존재해야할 element에 대한 테스트 입니다.', () => {
	const wrapper = mount(RollingBanner);

	test('슬라이드(배너) 이미지가 존재해야합니다.', () => {
		expect(wrapper.find('img[data-test="banner-img"]').exists()).toBeTruthy();
	})

	test('이전 슬라이드로 가기 항목이 존재해야합니다.', () => {
		expect(wrapper.find('[data-test="prev-btn"]').exists()).toBeTruthy();
	})

	test('다음 슬라이드로 가기 항목이 존재해야합니다.', () => {
		expect(wrapper.find('[data-test="next-btn"]').exists()).toBeTruthy();
	})

	test('현재 슬라이드의 번호를 표시하는 text가 존재해야합니다.', () => {
		expect(wrapper.find('[data-test="current-page"]').exists()).toBeTruthy();
	})

	test('전체 슬라이드의 숫자를 표시하는 text가 존재해야합니다.', () => {
		expect(wrapper.find('[data-test="total-page"]').exists()).toBeTruthy();
	})
})
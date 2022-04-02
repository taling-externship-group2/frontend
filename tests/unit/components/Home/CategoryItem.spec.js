import { mount } from '@vue/test-utils';
import CategoryItem from '@/components/Home/CategoryItem.vue';

describe('CategoryItem.vue 파일중 존재해야할 element에 대한 검증 입니다.', () => {
	const wrapper = mount(CategoryItem);

	test('카테고리 아이템이 list 형태로 존재 해야합니다.', () => {
		expect(wrapper.find('li[data-test="category-item"]').exists()).toBeTruthy();
	})

	test('카테고리 아이템의 링크가 존재 해야합니다.', () => {
		expect(wrapper.find('[data-test="category-link"]').exists()).toBeTruthy();
	})

	test('카테고리 이미지가 존재 해야합니다.', () => {
		expect(wrapper.find('[data-test="category-image"]').exists()).toBeTruthy();
	})
})

describe('CategoryItem.vue 파일의 data binding의 여부에 대한 검증 입니다.', () => {
	const testProps = {
		itemWidth: 15,
		link_url: 'test-link-url',
		image_url: 'test-image-url',
		text: '테스트 카테고리 이름',
	};
	const wrapper = mount(CategoryItem, {
		props: testProps,
	});

	test('카테고리 아이템의 너비가 의도한 data와 일치하는지 확인합니다.', () => {
		const testItemWidth = `w-[${testProps.itemWidth}%]`;
		expect(wrapper.get('li[data-test="category-item"]').classes()).toContain(testItemWidth)
	})

	test('카테고리 아이템의 링크가 의도한 data와 일치하는지 확인합니다.', () => {
		expect(wrapper.get('[data-test="category-link"]').attributes('href')).toStrictEqual(testProps.link_url)
	})

	test('카테고리 아이템의 이미지가 의도한 data와 일치하는지 확인합니다.', () => {
		const testCategoryImage = `background-image: url(${testProps.image_url});`
		expect(wrapper.get('[data-test="category-image"]').attributes('style')).toBe(testCategoryImage)
	})

	test('카테고리 아이템의 텍스트가 의도한 data와 일치하는지 확인합니다.', () => {
		expect(wrapper.get('[data-test="category-link"]').text()).toBe(testProps.text);
	})
})
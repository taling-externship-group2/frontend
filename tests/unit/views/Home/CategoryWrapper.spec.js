import { mount } from '@vue/test-utils';
import CategoryWrapper from '@/views/Home/CategoryWrapper.vue';
import CategoryItem from '@/components/Home/CategoryItem.vue';

describe('CategoryWrapper.vue 파일중 존재해야할 element에 대한 검증입니다.', () => {
  const wrapper = mount(CategoryWrapper);

  test('CategoryWrapper 영역이 존재해야합니다.', () => {
    expect(wrapper.find('[data-test="category-wrapper"]').exists()).toBeTruthy();
  });

  test('CategoryItem 컴포넌트의 갯수가 의도한 data만큼 렌더링 되어야합니다.', async () => {
    const testListCategory = [{}, {}, {}, {}];
    await wrapper.setData({
      list_category: testListCategory,
    });

    expect(wrapper.findComponent(CategoryItem).exists()).toBeTruthy();
    expect(wrapper.findAllComponents(CategoryItem).length).toBe(testListCategory.length);
  });
});

import { mount } from '@vue/test-utils';
import TalentsList from '@/components/Home/TalentsList.vue';

describe('클래스 목록을 표시해주는 영역에 대한 테스트 입니다.', () => {
  const wrapper = mount(TalentsList);

  it('클래스 목록을 표시해주는 영역이 존재합니다.', () => {
    expect(wrapper.find('div[data-test="tab-area"]').exists()).toBeTruthy();
  });

  it('N개의 클래스 카테고리 선택 탭이 존재합니다.', async () => {
    const testTalentsList = [
      { nameKr: '이번주 시작' },
      { nameKr: '원데이 BEST' },
      { nameKr: '다회차 BEST' },
    ];
    await wrapper.setData({
      talentsList: testTalentsList,
    });

    expect(wrapper.findAll('li[data-test="talent-list-tab-category"]').length).toBe(testTalentsList.length);
  });
});

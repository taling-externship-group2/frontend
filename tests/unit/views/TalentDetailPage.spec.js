import { mount } from '@vue/test-utils';
import TalentDetailPage from '@/views/TalentDetailPage.vue';

describe('상세 클래스 페이지와 관련된 테스트 입니다.', () => {
  const wrapper = mount(TalentDetailPage);

  test('페이지 타이틀이 존재해야 합니다', () => {
    expect(wrapper.find('[data-test="DetailTitle"]').exists()).toBeTruthy();
  });

  test('LIKE LION 메인 이미지가 존재해야합니다.', () => {
    expect(wrapper.find('[data-test="DetailmainImg"]').exists()).toBeTruthy();
  });

  test('LIKE LION, 탈잉 서브 이미지가 존재해야합니다.', () => {
    expect(wrapper.find('[data-test="DetailsubImg"]').exists()).toBeTruthy();
  });
  test('클래스 요약, 이런 분들이 들으면 좋아요, 튜터님을 소개합니다 등 상세설명 대분류가 있어야합니다.', () => {
    expect(wrapper.find('[data-test="ClassDetailDepth1"]').exists()).toBeTruthy();
  });
  test('클래스 요약, 이런 분들이 들으면 좋아요, 튜터님을 소개합니다 등 상세설명 소분류 텍스트가 있어야합니다.', () => {
    expect(wrapper.find('[data-test="ClassDetailsDepth2"]').exists()).toBeTruthy();
  });

  test('튜터님을 소개합니다의 튜터의 이름, 이미지, 블로그 링크가 존재해야합니다.', () => {
    expect(wrapper.find('[data-test="TutorIntro"]').exists()).toBeTruthy();
  });
  test('클래스 일정이 존재 해야합니다.', () => {
    expect(wrapper.find('[data-test="ClassSchedule"]').exists()).toBeTruthy();
  });
  test('클래스 일정 찜하기 버튼이 존재해야 합니다.', () => {
    expect(wrapper.find('[data-test="ClassHeart"]').exists()).toBeTruthy();
  });
  test('클래스 일정 구매하기 or SOLD OUT 버튼이 존재해야 합니다.', () => {
    expect(wrapper.find('[data-test="ClassBuy"]').exists()).toBeTruthy();
  });
});

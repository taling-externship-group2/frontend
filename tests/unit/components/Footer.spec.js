import { mount } from '@vue/test-utils';
import FooterCom from '@/components/FooterCom.vue';

describe('Footer Components에 존재해야할 element에 대한 테스트 입니다.', () => {
  const wrapper = mount(FooterCom);

  test('footer Components 작성을 위한 페이지가 존재해야합니다..', () => {
    expect(wrapper.find('section[data-test="footer-page"]').exists()).toBeTruthy();
  });

  test('Company policies Support B2B Taling Center 대분류 Text가 존재해야 합니다.', () => {
    expect(wrapper.find('p[data-test="fotterTitleCard"]').exists()).toBeTruthy();
  });

  test('회사 소개, 블로그 등 링크로 이동할 수 있는 태그로 존재해야 합니다.', () => {
    expect(wrapper.find('[data-test="footerSubCard"]').exists()).toBeTruthy();
  });

  test('상호 및 Copyright Text가 존재해야 합니다.', () => {
    expect(wrapper.find('[data-test="footerCopyCard"]').exists()).toBeTruthy();
  });

  test('문의하기, 운영시간 Text가 존재해야 합니다.', () => {
    expect(wrapper.find('[data-test="footerCenter"]').exists()).toBeTruthy();
  });

  test('SNS 연결 버튼이 존재해야 합니다.', () => {
    expect(wrapper.find('[data-test="footerSNSBtn"]').exists()).toBeTruthy();
  });
});

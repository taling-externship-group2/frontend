<template>
  <section
    data-test="footer-page"
    class="border-t-2 border-gray-300 xl:pl-60 pl-32"
  >
    <ul class="flex gap-x-36 pt-10 truncate">
      <li>
        <p id="depth1" data-test="fotterTitleCard">COMPANY</p>
        <ul id="depth2" data-test="footerSubCard">
          <li>회사 소개</li>
          <li>블로그</li>
          <li>언론 보도</li>
        </ul>
      </li>
      <li>
        <p id="depth1" data-test="fotterTitleCard">POLICIES</p>
        <ul id="depth2" data-test="footerSubCard">
          <li>이용약관</li>
          <li class="underline underline-offset-1 font-bold">
            개인정보처리방침
          </li>
        </ul>
      </li>
      <li>
        <p id="depth1" data-test="fotterTitleCard">SUPPORT</p>
        <ul id="depth2" data-test="footerSubCard">
          <li>FAQ</li>
          <li>탈잉센터</li>
        </ul>
      </li>
      <li>
        <p id="depth1" data-test="fotterTitleCard">B2B</p>
        <ul id="depth2" data-test="footerSubCard">
          <li>기업교육</li>
          <li>브랜드제휴</li>
        </ul>
      </li>
      <li>
        <p id="depth1" data-test="footerSubCard">TALING CENTER</p>
        <ul id="depth2-Center" data-test="footerCenter">
          <li class="text-red-600 flex cursor-pointer">
            <img
              class="w-6 h-6 mr-3"
              src="https://front-img.taling.me/Content/app3/images/icon_cs.png"
              alt=""
            />
            <p>탈잉에게 문의하기</p>
          </li>
          <li>
            운영시간
            <p>평일 10:00 ~ 17:00 점심 13:00~14:00</p>
          </li>
        </ul>
      </li>
    </ul>
    <div
      id="footerCopyCard"
      class="flex gap-x-28 h-60"
      data-test="footerCopyCard"
    >
      <div class="text-gray-500 gap-y-2 flex flex-col mt-6">
        <p>
          상호 : (주)탈잉 | 주소 : 서울특별시 강남구 테헤란로 625 6층 |
          사업자등록번호 : 767-88-00630 | 대표자명 : 김윤환
        </p>
        <p>통신판매업 신고번호 : 제 2017-서울강남-02964</p>
        <p class="mt-2">Copyright ⓒ2020 taling inc, ltd. All rights reserved</p>
      </div>
      <div id="footer-sns" class="h-20 w-60" data-test="footerSNSBtn">
        <ul class="flex gap-x-4 mt-12">
          <li>
            <a href="https://www.facebook.com/taling.me" target="_blank"
              ><img
                src="https://front-img.taling.me/Content/app3/images/sns01.png"
                alt="facebook"
            /></a>
          </li>
          <li>
            <a href="https://www.instagram.com/taling_official/" target="_blank"
              ><img
                src="https://front-img.taling.me/Content/app3/images/sns02.png"
                alt="instagram"
            /></a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/channel/UCuFmmpVLaNNFoy-cHqELl_A"
              target="_blank"
              ><img
                src="https://front-img.taling.me/Content/app3/images/sns03.png"
                alt="youtube"
            /></a>
          </li>
          <li>
            <a href="https://post.naver.com/taling_me" target="_blank"
              ><img
                src="https://front-img.taling.me/Content/app3/images/sns04.png"
                alt="naver"
            /></a>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style>
#depth1 {
  @apply font-bold mb-6;
}
#depth2 {
  @apply flex flex-col gap-y-4 cursor-pointer text-gray-500;
}
#depth2-Center {
  @apply flex flex-col gap-y-4 text-gray-500;
}
</style>

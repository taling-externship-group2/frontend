<template>
  <section data-test="talent-detail-page">
    <div>상세정보 페이지</div>
    <section class="flex h-screen w-screen xl:px-40 pt-24 px-6">
      <div class="flex flex-col h-screen">
        <div class="text-red-600 font-bold mb-2">다회차 · · 최대 50명</div>
        <div class="text-2xl font-bold">멋쟁이사자처럼x탈잉 익스턴십</div>
        <span class="flex mt-2">
          <img
            src="https://picsum.photos/200"
            alt="#"
            class="w-10 h-10 rounded-full mt-1"
          />
          <div class="ml-2">
            <p class="text-sm mb-1">김진중 튜터</p>
            <div class="flex">
              <img
                class="w-3 h-3 mr-1"
                src="https://front-img.taling.me/Content/Images/class/icon_star_new.png"
                alt="#"
              />
              <span>(0)</span>
            </div>
          </div>
        </span>
        <!-- LIKE LION Part  -->
        <div class="h-size40rem w-full mt-3 flex space-x-2">
          <img
            class="rounded-2xl h-size26rem w-4/5 object-cover"
            src="https://img.taling.me/Content/Uploads/Cover/b5c21c3574c10df7e90e2494e84e6618670bee5a.png"
            alt="#"
          />
          <div class="flex flex-col space-y-2">
            <img
              class="w-36 h-24 rounded-2xl object-cover"
              src="https://img.taling.me/Content/Uploads/Images/8f31a9e64da1007efe5017ec0ba886869d501b2f.jpeg"
              alt="#"
            />
            <img
              class="w-36 h-24 rounded-2xl object-cover"
              src="https://img.taling.me/Content/Uploads/Cover/b5c21c3574c10df7e90e2494e84e6618670bee5a.png"
              alt="#"
            />
            <img
              class="w-36 h-24 rounded-2xl object-cover"
              src="https://img.taling.me/Content/Uploads/Images/8f31a9e64da1007efe5017ec0ba886869d501b2f.jpeg"
              alt="#"
            />
            <img
              class="w-36 h-24 rounded-2xl opacity-b-50 object-cover"
              src="https://img.taling.me/Content/Uploads/Cover/b5c21c3574c10df7e90e2494e84e6618670bee5a.png"
              alt="#"
            />
          </div>
        </div>
        <!-- Text Section -->
        <section class="w-full pr-12">
          <div class="flex flex-col">
            <!-- 클래스 요약 -->
            <section class="flex w-full mt-24">
              <div class="text-2xl font-bold w-56">클래스 요약</div>
              <div class="leading-7">
                멋쟁이사자처럼에서 교육을 받은 개발자 분들과 2주간 탈잉에서
                제시하는 미션을 수행하며 실무 역량을 키우는 프로그램입니다.
              </div>
            </section>
            <!-- 클래스 요약 -->
            <!-- 이런 분들이 들으면 좋아요 -->
            <section class="flex w-full mt-24">
              <div class="text-2xl font-bold w-56">
                이런 분들이
                <p>들으면</p>
                <p>좋아요.</p>
              </div>
              <div class="leading-7">
                멋쟁이사자처럼 교육을 이수하신 분들 대상의 프로그램입니다.
                PHP/Laravel, TypeScript/Vue.js 개발자를 대상으로 합니다.
              </div>
            </section>
            <!-- 이런 분들이 들으면 좋아요 -->
            <!-- 튜터님을 소개합니다. -->
            <section class="flex w-full mt-24">
              <div class="text-2xl font-bold w-56">
                튜터님을
                <p>소개합니다.</p>
              </div>
              <div>
                <div class="flex">
                  <img
                    src="https://picsum.photos/200"
                    alt="#"
                    class="w-10 h-10 rounded-full mt-1"
                  />
                  <div class="ml-4 space-y-2">
                    <div class="text-sm">김진중</div>
                    <a href="https://taling.me/" class="flex space-x-1">
                      <img
                        src="https://front-img.taling.me/Content/app3/img/bg/bg-blog-logo-24px@2x.png"
                        alt=""
                        class="w-5 h-4"
                      />
                      <div class="text-gray-400 text-sm">블로그</div>
                    </a>
                  </div>
                </div>
                <div class="mt-8">
                  Code addict, AI/ML believer, 20+ years’ coding experienced
                  start-up guy, Built a unicorn and building another big one!
                </div>
              </div>
            </section>
            <!-- 튜터님을 소개합니다. -->
            <!-- 어떤 클래스 인가요? -->
            <section class="flex mt-24">
              <div class="text-2xl font-bold w-48">
                어떤 클래스<br />
                인가요?
              </div>
              <div class="leading-6">
                # 목표
                <br />
                <br />

                - 실제 서비스하고 있는 프러덕트의 구조 분석<br />
                - 분석한 내용을 바탕으로한 개발 범위와 일정 산정<br />
                - 분석한 내용을 바탕으로한 데이터, API 및 UI 컴포넌트 설계<br />
                - 백엔드와 프론트엔드간의 원활한 협업 (업무 분장 및
                코드리뷰등)<br /><br />
                # 진행 일정
                <br />
                <br />
                - 1일차: 미션 설명(탈잉 CTO), 팀 빌딩<br />
                - 2일차: 탈잉 서비스 내 구현할 페이지들 분석, Git 레포 및 기본
                개발 환경 셋팅<br />
                - 3일차~4일차: DB 모델링, API 설계, UI 컴포넌트 설계<br />
                - 5일차: 구현 시작, 피드백 세션(팀당 30분씩, 탈잉 개발자)<br />
                - 6일차~9일차: 기능 구현, QA<br />
                - 10일차: 피드백 세션(팀당 30분씩, 탈잉 개발자)<br />
              </div>
            </section>
            <!-- 어떤 클래스 인가요? -->
            <!-- 클래스는 이렇게 진행됩니다 -->
            <section class="flex w-full mt-24">
              <div class="text-2xl font-bold w-48">
                클래스는 <br />이렇게<br />
                진행됩니다.
              </div>
              <div class="leading-6">
                <section>
                  <div class="text-red-600 font-bold text-lg">
                    1회차 커리큘럼
                  </div>
                  <br />
                  <div id="test1">
                    2주간 진행할 미션에 대한 설명 및 팀 빌딩을 진행합니다.<br />

                    Frontend 와 Backend 각 1명씩 두 명이 팀이 되어 미션을
                    수행합니다.<br /><br />
                  </div>
                </section>
                <section>
                  <div class="text-red-600 font-bold text-lg">
                    2회차 커리큘럼
                  </div>
                  <br />
                  <div id="test1">
                    API 및 기본 구조에 대한 피드백 세션을 진행합니다.<br />

                    각 팀당 30분씩 진행합니다. 진행은 별개 세션으로
                    진행합니다.<br /><br />
                  </div>
                </section>
                <section>
                  <div class="text-red-600 font-bold text-lg">
                    3회차 커리큘럼
                  </div>
                  <br />
                  <div id="test1">
                    개발한 결과에 대한 피드백 세션을 진행합니다.<br />

                    각 팀당 30분씩 진행합니다. 진행은 별개 세션으로 진행합니다.
                  </div>
                </section>
              </div>
            </section>
            <!-- 클래스는 이렇게 진행됩니다 -->
            <!-- 실제 수강생 리뷰 입니다. -->
            <section class="flex w-full mt-24">
              <div class="text-2xl font-bold w-56">
                실제 <br />수강생의<br />
                리뷰입니다.
              </div>
              <div
                class="w-full h-24 border border-gray-300 rounded-sm ml-3 pl-16"
              >
                <ul class="flex mt-6 gap-x-24">
                  <li class="flex items-center w-28 justify-around">
                    커리큘럼
                    <span
                      ><img
                        class="w-3 h-3 mr-1"
                        src="https://front-img.taling.me/Content/Images/class/icon_star_new.png"
                        alt="#"
                    /></span>
                    <span>0</span>
                  </li>
                  <li class="flex items-center w-28 justify-around">
                    전달력<span>
                      <img
                        class="w-3 h-3 mr-1"
                        src="https://front-img.taling.me/Content/Images/class/icon_star_new.png"
                        alt="#"
                      /> </span
                    ><span>0</span>
                  </li>
                  <li class="flex items-center w-28 justify-around">
                    시간준수<span
                      ><img
                        class="w-3 h-3 mr-1"
                        src="https://front-img.taling.me/Content/Images/class/icon_star_new.png"
                        alt="#" /></span
                    ><span>0</span>
                  </li>
                </ul>
                <ul class="flex gap-x-24">
                  <li class="flex items-center w-28 justify-around">
                    준비성<span
                      ><img
                        class="w-3 h-3 mr-1"
                        src="https://front-img.taling.me/Content/Images/class/icon_star_new.png"
                        alt="#" /></span
                    ><span>0</span>
                  </li>
                  <li class="flex items-center w-28 justify-around">
                    친절도<span
                      ><img
                        class="w-3 h-3 mr-1"
                        src="https://front-img.taling.me/Content/Images/class/icon_star_new.png"
                        alt="#" /></span
                    ><span>0</span>
                  </li>
                  <!-- <li class="flex items-center w-28 justify-around">
                    만족도<span
                      ><img
                        class="w-3 h-3 mr-1"
                        src="https://front-img.taling.me/Content/Images/class/icon_star_new.png"
                        alt="#" /></span
                    ><span>0</span>
                  </li> -->
                </ul>
              </div>
            </section>
            <div class="flex justify-between ml-48">
              <div class="text-right">튜터님 수업에 첫 리뷰를 달아주세요</div>
              <div class="underline underline-offset-1 cursor-pointer mb-24">
                리뷰 작성하기
              </div>
            </div>
            <!-- 실제 수강생 리뷰 입니다. -->
          </div>
        </section>
      </div>
      <div class="w-80 h-screen hidden 2xl:block fixed right-60">
        <div
          class="
            rounded-sm
            bg-white
            border-2 border-gray-100
            h-size28rem
            w-80
            drop-shadow-shadowCustom
            p-3
          "
        >
          <section class="text-3xl font-bold">클래스 일정</section>
          <!-- 상세 일정 -->
          <section class="space-y-2 overscroll-y-auto h-60">
            <div class="flex mt-3 text-sm justify-between">
              <div>03월 27일 (토)</div>
              <div>18:30 - 20:30</div>
              <div>강남</div>
            </div>
            <div class="flex space-x-3 text-sm">
              <div>• 2회</div>
              <div>03월 30일 (토)</div>
              <div>18:30 - 20:30</div>
            </div>
            <div class="text-sm text-gray-400 ml-1">
              신도림역 도보 10분 내외 작업실
            </div>
          </section>
          <!-- 상세 일정 -->
          <!-- 가격 -->
          <section class="text-sm text-right space-y-2">
            <div class="font-bold">1,000,000원 / 시간</div>
            <div>12,000,000원 / 총 3회 12시간</div>
          </section>
          <!-- 가격 -->
          <!-- 찜, 구매하기 -->
          <section class="flex mt-2 space-x-3 px-1 h-12">
            <div
              class="
                w-1/5
                flex
                items-center
                border border-gray-300
                drop-shadow-shadowCustom
                rounded-lg
                cursor-pointer
              "
            >
              <img
                class="w-5 h-4 mx-auto"
                src="https://front-img.taling.me/Content/app3/images/p2p_class/ico_p2p_wish_on.png"
                alt="#"
              />
            </div>
            <div
              class="
                w-4/5
                drop-shadow-shadowCustom
                rounded-lg
                cursor-pointer
                flex
                items-center
                justify-center
                bg-red-500
                text-white
                font-bold
              "
            >
              SOLD OUT
            </div>
          </section>
          <!-- 찜, 구매하기 -->
        </div>
      </div>
    </section>
    <!-- 클래스 일정 -->
  </section>
  <footer>
    <FooterCom />
  </footer>
</template>

<script>
import FooterCom from '@/components/FooterCom.vue';

export default {
  components: {
    FooterCom,
  },
  name: 'TalentDetailPage',
};
</script>

<style>
#test1 {
  @apply whitespace-nowrap;
}
</style>

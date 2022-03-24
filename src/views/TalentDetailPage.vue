<template>
  <HeaderCom />
  <section
    class="
      flex
      h-full
      w-screen
      xl:px-40
      pt-24
      px-6
      relative
      border-t-2 border-gray-100
    "
  >
    <div class="flex flex-col h-full">
      <div class="text-red-600 font-bold mb-2">다회차 · · 최대 50명</div>
      <div class="text-2xl font-bold" data-test="DetailTitle">
        {{ titleName }}
      </div>
      <span
        class="flex mt-2"
        v-for="tutorProfile in tutorProfiles"
        :key="tutorProfile.tutorImg"
      >
        <img
          :src="tutorProfile.tutorProfileImg"
          alt="#"
          class="w-10 h-10 rounded-full mt-1"
        />
        <div class="ml-2">
          <p class="text-sm mb-1">
            {{ tutorProfile.tutorName }}
          </p>
          <div class="flex">
            <img
              data-test="DetailmainImg"
              class="w-3 h-3 mr-1"
              src="https://front-img.taling.me/Content/Images/class/icon_star_new.png"
              alt="#"
            />
            <span>({{ wishCount }})</span>
          </div>
        </div>
      </span>
      <!-- LIKE LION Part  -->
      <div class="h-26 w-full mt-3 flex space-x-2" data-test="DetailsubImg">
        <img
          class="rounded-2xl h-size26rem w-3/5 object-cover"
          :src="titleImg"
          alt="#"
        />
        <div class="flex flex-col space-y-2 items-center">
          <div v-for="subTitleImg in subTitleImgs" :key="subTitleImg.Image">
            <img
              class="w-36 h-24 rounded-2xl object-cover"
              :src="subTitleImg.image"
              alt="#"
            />
          </div>
        </div>
      </div>
      <!-- Text Section -->
      <section class="w-4/5 pr-12 flex flex-col">
        <div v-for="classTitle in classTitles" :key="classTitle.title">
          <!-- 클래스 요약 -->
          <section class="flex w-full mt-24" data-test="classContentsTitle">
            <div class="text-2xl font-bold w-1/5">{{ classTitle.title }}</div>
            <div class="leading-7 ml-12 w-4/5" data-test="classContentsText">
              {{ classTitle.introText }}
            </div>
          </section>
        </div>
        <!-- 어떤 클래스 인가요? -->
        <div v-for="queTitle in queTitles" :key="queTitle.title">
          <!-- 클래스 요약 -->
          <section class="flex w-full mt-24" data-test="classContentsTitle">
            <div class="text-2xl font-bold w-1/5">
              {{ queTitle.title }}
            </div>
            <div
              class="leading-7 ml-12 w-4/5 whitespace-pre-line"
              data-test="classContentsText"
            >
              {{ queTitle.introText }}
            </div>
          </section>
        </div>
        <div>
          <!-- 클래스 요약 -->
          <section class="flex w-full mt-24" data-test="classContentsTitle">
            <div class="text-2xl font-bold w-1/5">
              {{ processTitle }}
            </div>
            <div class="flex flex-col w-4/5 ml-8">
              <div
                class="leading-7 ml-6 whitespace-pre-line"
                data-test="classContentsText"
                v-for="processIntro in processIntros"
                :key="processIntro.title"
              >
                <div class="text-red-600 font-bold text-lg">
                  {{ processIntro.title }}
                </div>
                <div class="mb-12">{{ processIntro.introText }}</div>
              </div>
            </div>
          </section>
        </div>
        <!-- 실제 수강생 리뷰 입니다. -->
        <section class="flex w-full mt-24" data-test="classContentsTitle">
          <div class="text-2xl font-bold w-1/5">
            {{ reviewTitle }}
          </div>
          <div
            class="
              h-24
              border border-gray-300
              rounded-sm
              ml-12
              flex flex-col
              w-4/5
            "
            data-test="classContentsText"
          >
            <div class="flex mx-12 mt-6 gap-x-14">
              <div
                v-for="reviewValue1 in reviewValues1"
                :key="reviewValue1.id"
                class="flex flex-col"
              >
                <div class="flex items-center w-28 justify-around">
                  {{ reviewValue1.title
                  }}<span
                    ><img
                      class="w-3 h-3 mr-1"
                      :src="reviewImage"
                      alt="#" /></span
                  ><span>{{ reviewValue1.count }}</span>
                </div>
              </div>
            </div>
            <div class="flex mx-12 gap-x-14">
              <div v-for="reviewValue2 in reviewValues2" :key="reviewValue2.id">
                <div class="flex items-center w-28 justify-around">
                  {{ reviewValue2.title
                  }}<span
                    ><img
                      class="w-3 h-3 mr-1"
                      :src="reviewImage"
                      alt="#" /></span
                  ><span>{{ reviewValue2.count }}</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div class="flex justify-between ml-60">
          <div class="text-right">튜터님 수업에 첫 리뷰를 달아주세요</div>
          <div class="underline underline-offset-1 cursor-pointer mb-24">
            리뷰 작성하기
          </div>
        </div>
        <!-- 실제 수강생 리뷰 입니다. -->
      </section>
    </div>
    <div class="w-80 h-screen hidden 2xl:block sticky right-80 top-0">
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
        <section class="text-3xl font-bold" data-test="ClassSchedule">
          클래스 일정
        </section>
        <!-- 상세 일정 -->
        <section class="space-y-2 overscroll-y-auto h-60">
          <div
            v-for="classSchedule in classSchedules"
            :key="classSchedule.text"
          >
            <div class="flex justify-between w-full text-sm mt-3">
              <div class="flex">
                <div>{{ classSchedule.month }}월 &nbsp;</div>
                <div>{{ classSchedule.day }}일 &nbsp;</div>
                <div>({{ classSchedule.weeks }})</div>
              </div>
              <div>{{ classSchedule.time }}</div>
              <div>{{ classSchedule.area }}</div>
            </div>
            <div class="flex w-full text-sm mt-3">
              <div>• {{ classSchedule.round }}회 &nbsp;</div>
              <div>{{ classSchedule.month }}월 &nbsp;</div>
              <div>{{ classSchedule.day }}일 &nbsp;</div>
              <div>({{ classSchedule.weeks }})&nbsp;</div>
              <div>{{ classSchedule.time }}</div>
            </div>
            <div class="text-sm text-gray-400 ml-1 mt-3">
              {{ classSchedule.text }}
            </div>
          </div>
        </section>
        <!-- 상세 일정 -->
        <!-- 가격 -->
        <section class="text-sm text-right space-y-2">
          <div class="font-bold">
            {{ priceWithFormat(oneTimePrice) }} / 시간
          </div>
          <div>
            {{ priceWithFormat(oneTimePrice * totalTime) }} / 총
            {{ totalRound }}회 {{ totalTime }}시간
          </div>
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
              data-test="ClassHeart"
              class="w-5 h-4 mx-auto"
              src="https://front-img.taling.me/Content/app3/images/p2p_class/ico_p2p_wish_on.png"
              alt="#"
            />
          </div>
          <div
            data-test="ClassBuy"
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
  <footer>
    <FooterCom />
  </footer>
  <!-- 클래스 일정 -->
</template>

<script>
import FooterCom from '@/components/FooterCom.vue';
import HeaderCom from '@/components/SearchHeaderCom.vue';

export default {
  components: {
    FooterCom,
    HeaderCom,
  },
  name: 'TalentDetailPage',
  data() {
    return {
      titleName: '멋쟁이사자처럼x탈잉 익스턴십',
      titleImg:
        'https://img.taling.me/Content/Uploads/Cover/b5c21c3574c10df7e90e2494e84e6618670bee5a.png',
      subTitleImgs: [
        {
          id: 1,
          image:
            'https://img.taling.me/Content/Uploads/Images/8f31a9e64da1007efe5017ec0ba886869d501b2f.jpeg',
        },
        {
          id: 2,
          image:
            'https://img.taling.me/Content/Uploads/Cover/b5c21c3574c10df7e90e2494e84e6618670bee5a.png',
        },
        {
          id: 3,
          image:
            'https://img.taling.me/Content/Uploads/Images/8f31a9e64da1007efe5017ec0ba886869d501b2f.jpeg',
        },
        {
          id: 4,
          image:
            'https://img.taling.me/Content/Uploads/Cover/b5c21c3574c10df7e90e2494e84e6618670bee5a.png',
        },
      ],
      tutorProfiles: [
        {
          tutorProfileImg:
            'https://s3.ap-northeast-2.amazonaws.com/taling.me/Content/Uploads/Profile/s_3d01e25dddf61a897428f73b8b4459d51e0222df.jpeg',
          tutorName: '김진중',
          tutorBlogSrc: 'https://front-img.taling.me/Content/Images/class/icon_star_new.png',
        },
      ],
      wishCount: 0,
      classTitles: [
        {
          id: 1,
          title: '클래스 요약',
          introName: '',
          introText:
            '멋쟁이사자처럼에서 교육을 받은 개발자 분들과 2주간 탈잉에서 제시하는 미션을 수행하며 실무 역량을 키우는 프로그램입니다.',
        },
        {
          id: 2,
          title: '이런 분들이 들으면 좋아요',
          introName: '',
          introText:
            '멋쟁이사자처럼 교육을 이수하신 분들 대상의 프로그램입니다. PHP/Laravel, TypeScript/Vue.js 개발자를 대상으로 합니다.',
        },
        {
          id: 3,
          title: '튜터님을 소개합니다',
          introName: '',
          introText:
            'Code addict, AI/ML believer, 20+ years’ coding experienced start-up guy, Built a unicorn and building another big one!',
        },
      ],
      queTitles: [
        {
          title: '클래스는 이렇게 진행됩니다',
          introText: `# 목표

                      - 실제 서비스하고 있는 프러덕트의 구조 분석
                      - 분석한 내용을 바탕으로한 개발 범위와 일정 산정
                      - 분석한 내용을 바탕으로한 데이터, API 및 UI 컴포넌트 설계
                      - 백엔드와 프론트엔드간의 원활한 협업 (업무 분장 및 코드 리뷰 등)

                      # 진행 일정

                      - 1일차: 미션 설명(탈잉 CTO), 팀 빌딩
                      - 2일차: 탈잉 서비스 내 구현할 페이지들 분석, Git 레포 및 기본 개발 환경 셋팅
                      - 3일차~4일차: DB 모델링, API 설계, UI 컴포넌트 설계
                      - 5일차: 구현 시작, 피드백 세션(팀당 30분씩, 탈잉 개발자)
                      - 6일차~9일차: 기능 구현, QA
                      - 10일차: 피드백 세션(팀당 30분씩, 탈잉 개발자)`,
        },
      ],
      processTitle: '클래스는 이렇게 진행됩니다.',
      processIntros: [
        {
          title: '1회차 커리큘럼',
          introText: `
          2주간 진행할 미션에 대한 설명 및 팀 빌딩을 진행합니다.

                      Frontend 와 Backend 각 1명씩 두 명이 팀이 되어 미션을 수행합니다.
                      `,
        },
        {
          title: '2회차 커리큘럼',
          introText: `
          API 및 기본 구조에 대한 피드백 세션을 진행합니다.

                      각 팀당 30분씩 진행합니다. 진행은 별개 세션으로 진행합니다.
                      `,
        },
        {
          title: '3회차 커리큘럼',
          introText: `
          개발한 결과에 대한 피드백 세션을 진행합니다.

                      각 팀당 30분씩 진행합니다. 진행은 별개 세션으로 진행합니다.
                      `,
        },
      ],
      reviewTitle: '실제 수강생의 리뷰입니다.',
      reviewImage: 'https://front-img.taling.me/Content/Images/class/icon_star_new.png',
      reviewValues1: [
        {
          id: 1,
          title: '커리큘럼',
          count: 0,
        },
        {
          id: 2,
          title: '전달력',
          count: 0,
        },
        {
          id: 3,
          title: '시간준수',
          count: 0,
        },
      ],
      reviewValues2: [
        {
          id: 4,
          title: '준비성',
          count: 0,
        },
        {
          id: 5,
          title: '친절도',
          count: 0,
        },
      ],
      classSchedules: [
        {
          month: 3,
          day: 27,
          weeks: '토',
          round: 2,
          time: '18:30 - 20:30',
          text: '신도림역 도보 10분 내외 작업실',
          area: '강남',
        },
      ],

      oneTimePrice: 1000000,
      totalRound: 3,
      totalTime: 12,
    };
  },
  methods: {
    priceWithFormat(price) {
      return `${price.toLocaleString()}원`;
    },
  },
};
</script>

<style>
</style>

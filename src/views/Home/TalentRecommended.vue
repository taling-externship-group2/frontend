<template>
  <div data-test="talent-recommended">
    <div>
      <div class="flex justify-between">
        <h4 class="p-1 font-bold text-xl">지금! 뜨고있는 클래스</h4>
        <div class="">
          <font-awesome-icon
            class="text-sm font-thin rounded-full border-2 p-1 m-1"
            icon="arrow-left"
            size="lg"
            @click="prevUpcomingTalent"
            data-test="prev-btn"
          />

          <font-awesome-icon
            class="text-sm rounded-full border-2 p-1 m-1"
            icon="arrow-right"
            size="lg"
            :style="{
              right: 0,
            }"
            @click="nextUpcomingTalent"
            data-test="next-btn"
          />
        </div>
      </div>
      <div class="swiper-img-wrapper">
        <div class="carousel flex flex-nowrap">
          <div class="carousel__content_upcoming flex-wrap">
            <ul class="flex flex-nowrap">
              <TalentItem
                v-for="talent in talents.upcoming"
                :key="talent.id"
                v-bind="talent"
              >
              </TalentItem>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TalentItem from '@/components/Home/TalentItem.vue';

export default {
  components: {
    TalentItem,
  },
  methods: {
    slideAction() {
      const carouselContent = document.querySelector(
        '.carousel__content_upcoming',
      );
      if (carouselContent) {
        const size = carouselContent.clientWidth;
        carouselContent.style.transform = `translateX(-${
          (this.slideIndex * size) / 3
        }px)`;
      }
    },
    prevUpcomingTalent() {
      if (this.slideIndex !== 0) {
        this.slideIndex -= 1;
        this.slideAction();
      }
    },
    nextUpcomingTalent() {
      if (this.slideIndex !== this.talents.upcoming.length - 1) {
        this.slideIndex += 1;
        this.slideAction();
      }
    },
  },
  data() {
    return {
      slideIndex: 0,
      talents: {
        upcoming: [
          {
            id: '1',
            image:
              'https://img.taling.me/Content/Uploads/Images/bcf7a003e4038a38f2f8d1f30b8baa89a919e95d.png',
            badge_list: ['오리지널 VOD', 'LIVE', '녹화영상'],
            original_price: 229000,
            discounted_price: 119000,
            discount_rate: 48,
            total_duration: 483,
            wish_count: 9123,
            review_count: 123,
            category: '엑셀',
            tutor_name: '쏘피',
            talent_title: '실무에 진짜 필요한 엑셀 노하우',
          },
          {
            id: '2',
            image:
              'https://img.taling.me/Content/Uploads/Images/49694c43c249c03d3ff2c19a8aba780b06a24a68.png',
            badge_list: ['오리지널 VOD'],
            original_price: 279000,
            discounted_price: 139000,
            discount_rate: 50,
            total_duration: 473,
            wish_count: 9123,
            review_count: 123,
            category: '프로그래밍',
            tutor_name: 'Evan you',
            talent_title: 'Vue.js 마스터하기',
          },
          {
            id: '3',
            image:
              'https://s3.ap-northeast-2.amazonaws.com/taling.me/Content/Uploads/Cover/s_3b01a17f86f0663c8197c4fc85bab02e907e6324.jpeg',
            badge_list: ['오리지널 VOD', '녹화영상'],
            original_price: 28500,
            discounted_price: 0,
            discount_rate: 0,
            total_duration: 60,
            wish_count: 9123,
            review_count: 123,
            category: '엑셀',
            tutor_name: '쏘피',
            talent_title: '실무에 진짜 필요한 엑셀 노하우',
          },
          {
            id: '4',
            image:
              'https://img.taling.me/Content/Uploads/Images/6bfd15fec5b3bf59aab071ef351e4ea272fb5d09.png',
            badge_list: ['도서포함', 'LIVE', '녹화영상'],
            original_price: 90000,
            discounted_price: 0,
            discount_rate: 0,
            total_duration: 483,
            wish_count: 9123,
            review_count: 123,
            category: '엑셀',
            tutor_name: '쏘피',
            talent_title: '실무에 진짜 필요한 엑셀 노하우',
          },
          {
            id: '5',
            image:
              'https://s3.ap-northeast-2.amazonaws.com/taling.me/Content/Uploads/Cover/s_2fc10a29b668264a373a469e2fbad8cea8b63894.png',
            badge_list: ['LIVE', '녹화영상'],
            original_price: 999999,
            discounted_price: 0,
            discount_rate: 0,
            total_duration: 240,
            wish_count: 9123,
            review_count: 123,
            category: '프로그래밍',
            tutor_name: 'Linus Torvalds',
            talent_title: '심심풀이로 리눅스 같은 프로젝트 만들기',
          },
          {
            id: '6',
            image:
              'https://img.taling.me/Content/Uploads/Images/cfada320358c171ece695a5f5cfab9f9dac10221.png',
            badge_list: ['LIVE', '녹화영상'],
            original_price: 247000,
            discounted_price: 125000,
            discount_rate: 49,
            total_duration: 480,
            wish_count: 9123,
            review_count: 123,
            category: '엑셀',
            tutor_name: '쏘피',
            talent_title: '실무에 진짜 필요한 엑셀 노하우',
          },
          {
            id: '7',
            image:
              'https://img.taling.me/Content/Uploads/Images/cfada320358c171ece695a5f5cfab9f9dac10221.png',
            badge_list: ['LIVE', '녹화영상'],
            original_price: 247000,
            discounted_price: 125000,
            discount_rate: 49,
            total_duration: 480,
            wish_count: 9123,
            review_count: 123,
            category: '엑셀',
            tutor_name: '쏘피',
            talent_title: '실무에 진짜 필요한 엑셀 노하우',
          },
        ],
        liveTogether: [
          {
            id: '1',
            image:
              'https://img.taling.me/Content/Uploads/Images/bcf7a003e4038a38f2f8d1f30b8baa89a919e95d.png',
            badge_list: ['오리지널 VOD', 'LIVE', '녹화영상'],
            original_price: 229000,
            discounted_price: 119000,
            discount_rate: 48,
            total_duration: 483,
            wish_count: 9123,
            review_count: 123,
            category: '엑셀',
            tutor_name: '쏘피',
            talent_title: '실무에 진짜 필요한 엑셀 노하우',
          },
          {
            id: '2',
            image:
              'https://img.taling.me/Content/Uploads/Images/49694c43c249c03d3ff2c19a8aba780b06a24a68.png',
            badge_list: ['오리지널 VOD'],
            original_price: 279000,
            discounted_price: 139000,
            discount_rate: 50,
            total_duration: 473,
            wish_count: 9123,
            review_count: 123,
            category: '프로그래밍',
            tutor_name: 'Evan you',
            talent_title: 'Vue.js 마스터하기',
          },
          {
            id: '3',
            image:
              'https://s3.ap-northeast-2.amazonaws.com/taling.me/Content/Uploads/Cover/s_3b01a17f86f0663c8197c4fc85bab02e907e6324.jpeg',
            badge_list: ['오리지널 VOD', '녹화영상'],
            original_price: 28500,
            discounted_price: 0,
            discount_rate: 0,
            total_duration: 60,
            wish_count: 9123,
            review_count: 123,
            category: '엑셀',
            tutor_name: '쏘피',
            talent_title: '실무에 진짜 필요한 엑셀 노하우',
          },
          {
            id: '4',
            image:
              'https://img.taling.me/Content/Uploads/Images/6bfd15fec5b3bf59aab071ef351e4ea272fb5d09.png',
            badge_list: ['도서포함', 'LIVE', '녹화영상'],
            original_price: 90000,
            discounted_price: 0,
            discount_rate: 0,
            total_duration: 483,
            wish_count: 9123,
            review_count: 123,
            category: '엑셀',
            tutor_name: '쏘피',
            talent_title: '실무에 진짜 필요한 엑셀 노하우',
          },
          {
            id: '5',
            image:
              'https://s3.ap-northeast-2.amazonaws.com/taling.me/Content/Uploads/Cover/s_2fc10a29b668264a373a469e2fbad8cea8b63894.png',
            badge_list: ['LIVE', '녹화영상'],
            original_price: 999999,
            discounted_price: 0,
            discount_rate: 0,
            total_duration: 240,
            wish_count: 9123,
            review_count: 123,
            category: '프로그래밍',
            tutor_name: 'Linus Torvalds',
            talent_title: '심심풀이로 리눅스 같은 프로젝트 만들기',
          },
          {
            id: '6',
            image:
              'https://img.taling.me/Content/Uploads/Images/cfada320358c171ece695a5f5cfab9f9dac10221.png',
            badge_list: ['LIVE', '녹화영상'],
            original_price: 247000,
            discounted_price: 125000,
            discount_rate: 49,
            total_duration: 480,
            wish_count: 9123,
            review_count: 123,
            category: '엑셀',
            tutor_name: '쏘피',
            talent_title: '실무에 진짜 필요한 엑셀 노하우',
          },
        ],
      },
    };
  },
};
</script>

<style>
.swiper-img-wrapper {
  position: relative;
  overflow: hidden;
  width: 100%;
  padding-top: 45%;
  background: transparent;
}

.carousel {
  overflow: hidden;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}

.carousel__content_upcoming {
  display: flex;
  width: 100%;
  height: 100%;
  transition: all 0.3s ease-out;
}
</style>

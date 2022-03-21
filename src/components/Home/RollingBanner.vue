<template>
  <section class="swiper-img-wrapper">
    <div v-if="eventInfo" class="carousel">
      <div class="carousel__content" data-test="carousel-content">
        <div
          class="carousel__item rounded-lg"
          v-for="(img, i) in eventInfo.bannerImg"
          :key="i"
        >
          <img
            class="banner-img"
            :src="img"
            alt="image"
            data-test="banner-img"
          />
          <div class="absolute bottom-4 left-16 text-xs font-bold">
            <span data-test="current-page">{{ i + 1 }}</span> |
            <span data-test="total-page">{{ eventInfo.bannerImg.length }}</span>
          </div>
        </div>
      </div>
      <div class="text-transparent hover:text-black ease-in duration-500">
        <font-awesome-icon
          class="arrow-btn"
          icon="arrow-left"
          size="lg"
          @click="prevSlide"
          data-test="prev-btn"
        />

        <font-awesome-icon
          class="arrow-btn"
          icon="arrow-right"
          size="lg"
          :style="{
            right: 0,
          }"
          @click="nextSlide"
          data-test="next-btn"
        />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'RollingBanner',
  data() {
    return {
      slideIndex: 0,
      eventInfo: {
        bannerImg: [
          'https://img.taling.me/Content/Uploads/Images/57b0bd1a1b990253452a04ffe6d1f0c4e4e6b756.gif',
          'https://img.taling.me/Content/Uploads/Images/987a68403048093c19ff34d245a951f3afa57bb0.png',
          'https://img.taling.me/Content/Uploads/Images/f215fc8d2b426d290498f48f6444ab6784822926.png',
        ],
      },
    };
  },
  methods: {
    slideAction() {
      const carouselContent = document.querySelector('.carousel__content');
      if (carouselContent) {
        const size = carouselContent.clientWidth;
        carouselContent.style.transform = `translateX(-${
          this.slideIndex * size
        }px)`;
      }
    },
    prevSlide() {
      if (this.slideIndex !== 0) {
        this.slideIndex -= 1;
        this.slideAction();
      }
    },
    nextSlide() {
      if (this.slideIndex !== this.eventInfo.bannerImg.length - 1) {
        this.slideIndex += 1;
        this.slideAction();
      }
    },
  },
  computed: {},
};
</script>

<style scoped>
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

.carousel__content {
  display: flex;
  width: 100%;
  height: 100%;
  transition: all 0.3s ease-out;
}

.carousel__item {
  min-width: 100%;
  position: relative;
  overflow: hidden;
}

.banner-img {
  position: absolute;
  width: 100%;
  object-fit: cover;
}
.arrow-btn {
  position: absolute;
  margin: 10px;
  top: 50%;
  transform: translateY(-50%);
  z-index: 999;
}
</style>

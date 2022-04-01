<template>
  <div class="flex justify-between">
    <h4 class="p-1 font-bold text-xl" data-test="carousel-title">
      {{ title }}
    </h4>
    <div data-test="carousel-button-container">
      <font-awesome-icon
        class="text-sm font-thin rounded-full border-2 p-1 m-1"
        icon="arrow-left"
        size="lg"
        @click="prevSlide"
        data-test="prev-btn"
      />

      <font-awesome-icon
        class="text-sm rounded-full border-2 p-1 m-1"
        icon="arrow-right"
        size="lg"
        @click="nextSlide"
        data-test="next-btn"
      />
    </div>
  </div>
  <div class="overflow-hidden relative w-full pt-80">
    <div class="absolute inset-0">
      <ul
        class="flex flex-nowrap ease-out duration-300"
        :ref="`carousel-content-${title}`"
        data-test="carousel-contents"
      >
        <slot></slot>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      slideIndex: 0,
      slideLength: this.totalSlide,
    };
  },
  props: {
    title: { type: String, default: '' },
    totalSlide: { type: Number, default: -1 },
    slidesToShow: { type: Number, default: -1 },
  },
  methods: {
    slideAction() {
      const carouselContent = this.$refs[`carousel-content-${this.title}`];
      if (carouselContent) {
        const size = carouselContent.clientWidth;
        carouselContent.style.transform = `translateX(-${Math.floor(
          (this.slideIndex * size) / this.slidesToShow,
        )}px)`;
      }
    },
    prevSlide() {
      if (this.slideIndex !== 0) {
        this.slideIndex -= 1;
        this.slideAction();
      }
    },
    nextSlide() {
      if (this.slideIndex !== this.slideLength - 1) {
        this.slideIndex += 1;
        this.slideAction();
      }
    },
  },
};
</script>

<style>
</style>

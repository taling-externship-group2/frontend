<template>
  <div data-test="talent-recommended">
    <MultiCarouselControl
      v-for="talent in talents"
      :key="talent.id"
      :title="talent.title"
      :totalSlide="talent.contents.length"
      :slidesToShow="slidesToShow"
    >
      <MultiCarouselItem
        v-for="talent in talent.contents"
        :key="talent.id"
        :slideWidth="slideWidth"
        v-bind="talent"
      >
      </MultiCarouselItem>
    </MultiCarouselControl>
  </div>
</template>

<script>
import MultiCarouselItem from '@/components/Home/MultiCarouselItem.vue';
import MultiCarouselControl from '@/components/Home/MultiCarouselControl.vue';
import talentsModel from '@/model/Home/TalentRecommended';

export default {
  components: {
    MultiCarouselItem,
    MultiCarouselControl,
  },
  data() {
    return {
      talents: talentsModel,
      slidesToShow: 4,
      slideWidth: this.slidesToShow / 100,
    };
  },
};
</script>

<style>
</style>

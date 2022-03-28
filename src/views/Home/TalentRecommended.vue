<template>
  <div data-test="talent-recommended">
    <MultiCarousel
      v-for="talent in talents"
      :key="talent.id"
      :title="talent.title"
      :totalSlide="talent.contents.length"
    >
      <TalentItem
        v-for="talent in talent.contents"
        :key="talent.id"
        v-bind="talent"
      >
      </TalentItem>
    </MultiCarousel>
  </div>
</template>

<script>
import TalentItem from '@/components/Home/TalentItem.vue';
import MultiCarousel from '@/components/Home/MultiCarousel.vue';
import talentsModel from '@/model/Home/TalentRecommended';

export default {
  components: {
    TalentItem,
    MultiCarousel,
  },
  data() {
    return {
      talents: talentsModel,
    };
  },
};
</script>

<style>
</style>

<template>
  <div class="border-2 my-4 px-4 py-2" data-test="tab-area">
    <ul class="flex justify-around border-2 my-2">
      <li
        v-for="tab in talentsList"
        :key="tab"
        data-test="talent-list-tab-category"
      >
        <button
          class="my-2 px-4 py-4"
          @click="initialTab = tab.component"
          :data-test="`${tab.nameKr}`"
        >
          {{ tab.nameKr }}
        </button>
      </li>
    </ul>
    <component :is="initialTab" class="border-2 px-2 py-2"></component>
  </div>
</template>

<script>
import TalentBest from '@/components/Home/TalentBest.vue';
import TalentRecommended from '@/components/Home/TalentRecommended.vue';

export default {
  components: {
    TalentBest,
    TalentRecommended,
  },
  data() {
    return {
      initialTab: 'TalentRecommended',
      talentsList: [
        { component: 'TalentRecommended', nameKr: '추천수업' },
        { component: 'TalentBest', nameKr: '탈잉 BEST' },
      ],
    };
  },
};
</script>

<style>
</style>

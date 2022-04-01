<template>
  <div class="mb-16">
    <ul class="flex" data-test="category">
      <CategoryItem
        v-for="category in list_category"
        :key="category.category_id"
        :itemWidth="itemWidth"
        v-bind="category"
      />
    </ul>
  </div>
</template>

<script>
import CategoryItem from '@/components/Home/CategoryItem.vue';
import CategoryModel from '@/model/Home/CategoryWrapper';

export default {
  components: {
    CategoryItem,
  },
  data() {
    return {
      itemWidth: 10,
      list_category: CategoryModel,
    };
  },
};
</script>

<style>
</style>

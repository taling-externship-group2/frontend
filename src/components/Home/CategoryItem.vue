<template>
  <li
    :class="`w-[${itemWidth}%]`"
    class="text-center font-bold"
    data-test="category-item"
  >
    <a :href="`${link_url}`" data-test="category-link">
      <span
        class="
          block
          w-[68px]
          h-[68px]
          m-auto
          mb-4
          bg-contain bg-slate-50
          rounded-lg
        "
        :style="getBackgroundImage"
        data-test="category-image"
      ></span>
      {{ text }}
    </a>
  </li>
</template>

<script>
export default {
  props: {
    itemWidth: { type: Number, default: -1 },
    link_url: { type: String, default: '' },
    image_url: { type: String, default: '' },
    text: { type: String, default: '' },
    category_id: { type: String, default: '' },
  },

  computed: {
    getBackgroundImage() {
      const result = `background-image: url(${this.image_url})`;
      return result;
    },
  },
};
</script>

<style>
</style>

<template>
  <li :class="`w-[${itemWidth}%]`" class="text-center font-bold">
    <a :href="`${link_url}`"
      ><span
        class="
          block
          w-[68px]
          h-[68px]
          m-auto
          mb-4
          bg-contain bg-slate-50
          rounded-lg
        "
        :style="{ backgroundImage: `url(${image_url})` }"
      ></span
      >{{ text }}
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
};
</script>

<style>
</style>

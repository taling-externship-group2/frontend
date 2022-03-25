<template>
  <div class="m-5 box-border h-[320px] w-[326.66px] border-2">
    <div class="absolute z-10 mt-2">1DAY수업</div>
    <div class="absolute z-10 mt-8">~~명 찜</div>
    <div class="absolute z-10 mt-40">리뷰 100건</div>
    <div class="absolute z-10 mt-40 ml-64">프로필</div>
    <div class="h-[200px] w-full">
      <img src="" alt="">
    </div>
    <div class="h-[120px] w-full">
      <div class="text-base">{{ class_object.title }}</div>
      <div>{{ class_object.price_per_hour }}</div>
      <div class="flex flex-row">
        <div>{{ class_object.rate }}</div>
        <div> | </div>
        <div>{{ class_object.class_type }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'searchClass',
  props: {
    class_object: Object,
  },
};
</script>

<style>

</style>

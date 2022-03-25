<template>
  <div class="m-5 box-border h-[320px] w-[326.66px] border-2">
    <div class="absolute z-10 mt-2 bg-amber-300 text-white">1DAY수업</div>
    <div class="absolute z-10 mt-8 bg-sky-800 text-white">2136명 찜</div>
    <div class="absolute z-10 mt-40 bg-cyan-400 rounded-2xl">리뷰 100건+@</div>
    <div class="h-[200px] w-full">
      <img src="http://s3.ap-northeast-2.amazonaws.com/taling.me/Content/Uploads/Cover/97569fedee94f1b87c2c173863ac4587da2e38e7.png" alt="">
    </div>
    <div class="h-[120px] w-full m-2">
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
  name: 'SearchClass',
  props: {
    class_object: Object,
  },
};
</script>

<style>

</style>

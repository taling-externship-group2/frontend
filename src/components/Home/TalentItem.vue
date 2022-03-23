<template>
  <li class="w-1/3 px-2 py-2" :data-test="id">
    <img
      :src="image"
      class="w-full h-32 rounded-lg"
      alt="thumb-image"
      data-test="talent-thumb-image"
    />
    <!--card-description-->
    <div class="flex flex-row" data-test="description-wrapper ">
      <div
        v-for="badge in badge_list"
        :key="badge"
        class="text-xs"
        data-test="badge_lists"
      >
        <span data-test="badge">{{ badge }}</span>
      </div>
    </div>
    <h4 class="flex" data-test="talent-title">{{ talent_title }}</h4>
    <p class="flex text-xs text-slate-500">
      <span
        class="after:content-['-'] after:px-1 after:"
        data-test="talent-category"
      >
        {{ category }}
      </span>
      <span data-test="tutor-name">{{ tutor_name }}</span>
    </p>

    <p v-if="discount_rate === 0" class="flex">
      <span class="font-bold" data-test="original-price">
        {{ priceWithFormat(original_price) }}
      </span>
    </p>
    <p v-else class="flex">
      <span class="font-bold" data-test="discounted-price">
        {{ priceWithFormat(discounted_price) }}
      </span>
      <del
        class="text-xs mt-0.5 ml-1 text-slate-300"
        data-test="original-price"
      >
        {{ priceWithFormat(original_price) }}
      </del>
      <span
        class="text-xs mt-0.5 mx-1 font-semibold text-red-500"
        data-test="discount-rate"
      >
        {{ discountRateWithFormat(discount_rate) }}
      </span>
    </p>
    <p>
      <span class="font-bold text-xs" data-test="total-duration">
        {{ totalDurationFormat }}
      </span>
    </p>
    <p>
      <font-awesome-icon class="text-red-500" icon="heart" />
      <span class="text-xs font-semibold mx-1" data-test="wish-count">
        {{ wish_count }}
      </span>
    </p>
  </li>
</template>

<script>
export default {
  props: {
    id: { type: String, default: '' },
    image: { type: String, default: '' },
    badge_list: {
      type: Array,
      default() {
        return [''];
      },
    },
    original_price: { type: Number, default: -1 },
    discounted_price: { type: Number, default: -1 },
    discount_rate: { type: Number, default: -1 },
    total_duration: { type: Number, default: -1 },
    wish_count: { type: Number, default: -1 },
    review_count: { type: Number, default: -1 },
    category: { type: String, default: '' },
    tutor_name: { type: String, default: '' },
    talent_title: { type: String, default: '' },
  },
  methods: {
    priceWithFormat(price) {
      return `${price.toLocaleString()}원`;
    },
    discountRateWithFormat(rate) {
      return `${rate}%`;
    },
  },
  computed: {
    totalDurationFormat() {
      const hour = Number.parseInt(this.total_duration / 60, 10);
      const minute = this.total_duration % 60;
      let hourlyPrice = 0;

      if (this.discount_rate === 0) {
        hourlyPrice = this.original_price / hour;
      } else {
        hourlyPrice = this.discounted_price / hour;
      }
      return minute === 0
        ? `(총 ${hour}시간 / 시간당${this.priceWithFormat(hourlyPrice)})`
        : `(총 ${hour}시간 ${minute}분)`;
    },
  },
};
</script>

<style>
</style>

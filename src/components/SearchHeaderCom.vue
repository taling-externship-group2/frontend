<template>
  <section id="searachHeader" data-test="searchHeader-page">
    <div
      class="flex h-32 w-screen items-center gap-x-10 justify-center truncate"
    >
      <router-link to="/">
        <img
          data-test="talingLogo"
          class="w-20 h-14 pb-3"
          src="https://front-img.taling.me/Content/app3/images/logo/logo.png"
          alt=""
        />
      </router-link>
      <router-link to="/">
        <div data-test="homeBtn" class="font-bold underline underline-offset-4">
          홈HOME
        </div>
      </router-link>
      <router-link to="/">
        <div data-test="vodBtn" class="font-bold">브오디VOD</div>
      </router-link>
      <label for="searchInput absolute">
        <input
          type="text"
          class="border-b-2 border-black w-60 pl-4 pr-8 focus:outline-none"
        />
        <router-link to="/search">
          <button data-test="searchInput">
            <img
              class="w-3 h-3 relative right-6"
              src="https://front-img.taling.me/Content/app3/images/icon_search.png"
              alt="#"
            />
          </button>
        </router-link>
      </label>
      <div data-test="menuTabBtn" class="flex space-x-4">
        <div>튜터등록</div>
        <div>실시간 톡</div>
        <div>수업신청서</div>
        <div class="relative">
          <button @click="classListBtn">
            수강목록
            <img
              class="w-2 h-1 absolute -right-3 top-2"
              src="https://front-img.taling.me/Content/app3/images/btn/icon_arrow_down_bold.png"
              alt="#"
            />
            <div class="absolute w-36 z-10 bg-white right-0">
              <ul ref="classListBtn" class="hidden">
                <div
                  class="flex flex-col gap-y-4 border border-gray-100 p-4 mt-6"
                >
                  <li>LIVE&오프라인</li>
                  <li>브오디</li>
                </div>
              </ul>
            </div>
          </button>
        </div>
        <div class="px-4">찜</div>
        <div class="relative">
          <button @click="profileHiddenBtn">
            <img :src="userImg" alt="#" class="w-10 h-10 rounded-full" />
            <img
              class="w-2 h-1 absolute -right-3 top-2"
              src="https://front-img.taling.me/Content/app3/images/btn/icon_arrow_down_bold.png"
              alt="#"
            />
          </button>
          <div class="absolute w-32 z-10 bg-white">
            <ul ref="profileBtn" class="hidden">
              <div
                class="flex flex-col gap-y-4 border border-gray-100 p-4 mt-6"
              >
                <li>내 프로필</li>
                <li>내 쿠폰</li>
                <li>포인트</li>
                <li>배송정보</li>
                <li>로그아웃</li>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      userImg:
        'https://s3.ap-northeast-2.amazonaws.com/taling.me/Content/Uploads/Profile/s_3d01e25dddf61a897428f73b8b4459d51e0222df.jpeg',
    };
  },
  methods: {
    profileHiddenBtn() {
      if (this.$refs.profileBtn.style.display === 'block') {
        this.$refs.profileBtn.style.display = 'none';
      } else {
        this.$refs.profileBtn.style.display = 'block';
      }
    },
    classListBtn() {
      if (this.$refs.classListBtn.style.display === 'block') {
        this.$refs.classListBtn.style.display = 'none';
      } else {
        this.$refs.classListBtn.style.display = 'block';
      }
    },
  },
};
</script>

<style>
#searachHeader {
  @apply text-sm;
}
</style>

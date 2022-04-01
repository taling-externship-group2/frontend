<template>
  <header class="bg-white" data-test="home-header">
    <div class="max-w-6xl mx-auto px-4">
      <div class="flex">
        <div class="flex w-2/3">
          <a href="#" class="flex items-start py-4 px-2">
            <img
              src="https://front-img.taling.me/Content/app3/img/logo/app-logo@2x.png"
              alt="Logo"
              class="h-16 w-16 mr-2"
              data-test="logo-image"
            />
          </a>
          <div class="flex items-start space-x-1 py-8">
            <a
              href="/"
              class="py-1 px-2 text-black border-b-2 border-black font-semibold"
              data-test="home-link"
            >
              홈 Home
            </a>
            <a
              href=""
              class="
                py-1
                px-2
                text-gray-500
                font-semibold
                active:text-black active:border-b-2 active:border-black
              "
              data-test="vod-link"
            >
              브오디 VOD
            </a>
          </div>
          <div class="p-4 grow rounded-lg flex items-start justify-center">
            <label for="search" class="relative block p-3 grow">
              <input
                class="
                  placeholder:italic placeholder:text-slate-400
                  block
                  bg-white
                  border border-slate-300
                  rounded-full
                  py-2
                  pl-3
                  pr-3
                  w-full
                  shadow-sm
                  focus:outline-none
                  focus:border-red-400
                  focus:ring-red-400
                  focus:ring-1
                  sm:text-sm
                "
                placeholder="배우고 싶은 재능이나 튜터를 검색해보세요."
                type="text"
                name="search"
                data-test="search-field"
              />
              <button
                class="absolute inset-y-0 right-0 flex items-center pr-6"
                data-test="search-button"
                @click="search()"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 text-slate-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </label>
          </div>
        </div>
        <div class="flex w-1/3 items-center space-x-3">
          <ul class="flex flex-wrap justify-between text-center">
            <li
              v-for="category in categories"
              :key="category.id"
              class="w-1/3 py-4"
            >
              <a href="/" :data-test="`${category.name}`">
                {{ category.name }}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </header>
  <main>
    <div class="max-w-6xl mx-auto px-4">
      <div class="mb-16" data-test="visual">
        <RollingBanner></RollingBanner>
      </div>
      <CategoryWrapper></CategoryWrapper>
    </div>
    <div class="max-w-6xl mx-auto px-4">
      <div class="flex">
        <div class="flex flex-col w-2/3 left-column">
          <TalentsList></TalentsList>
        </div>
      </div>
    </div>
  </main>
  <footer>
    <Footer />
  </footer>
</template>

<script>
import RollingBanner from '@/views/Home/RollingBanner.vue';
import TalentsList from '@/views/Home/TalentsWrapper.vue';
import CategoryWrapper from '@/views/Home/CategoryWrapper.vue';
import Footer from '@/components/FooterCom.vue';

export default {
  name: 'HomePage',
  components: {
    RollingBanner,
    TalentsList,
    CategoryWrapper,
    Footer,
  },
  data() {
    return {
      categories: [
        { id: 'C1', name: '인기' },
        { id: 'C2', name: '외국어' },
        { id: 'C3', name: '액티비티' },
        { id: 'C4', name: '취미 공예' },
        { id: 'C5', name: '디자인 영상' },
        { id: 'C6', name: '뷰티 헬스' },
        { id: 'C7', name: '라이프' },
        { id: 'C8', name: '머니' },
        { id: 'C9', name: '커리어' },
      ],
    };
  },

  methods: {
    search() {
      this.$router.push('/Home/Search/');
    },
  },
};
</script>

<style>
.left-column {
  margin-top: -70px;
}
</style>

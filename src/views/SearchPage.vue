<template>
  <div data-test="search-page">
    <div class="box-border h-[105px] border-1">header</div>
    <div class="box-border border-2 flex flex-col">
      <div class="flex justify-center box-border h-[61px] border-1">
        <button
          @mouseover="showModal(index)" @focus="bar"
          class="text-base px-3 mx-5"
          v-for="(menu, index) in menus" :key="index">
            {{ menu }}
        </button>
        <button
          class="text-base px-5 bg-slate-100"
          @click="showOffMenuList"
        >
          {{ this.show_text }}
        </button>
      </div>
      <div v-if="show_modal">
        <MenuList
          :menu_num="this.choice_menu_index"
        />
      </div>
      <div v-if="menu_list" class="z-0 box-border h-[217px] border-2 bg-slate-100">
        <div class="flex flex-row">
          <div class="text-xl bg-slate-100 m-5 mr-14 font-extrabold">지역</div>
          <select class="text-base h-[40px] px-5 mt-4 box-border border-2">
            <option>{{ select_data.area[0] }}</option>
            <option>{{ select_data.area[1] }}</option>
            <option>{{ select_data.area[2] }}</option>
            <option>{{ select_data.area[3] }}</option>
          </select>
        </div>
        <div class="flex flex-row">
          <div class="text-xl bg-slate-100 m-5 font-extrabold">요일/시간</div>
          <div class="flex m-3 bg-white h-[40px] w-[40px] box-border border-2"
            v-for="(day, index) in day_arr" :key="index">
            <button class="p-2">{{ day }}</button>
          </div>
          <div class="flex m-3 bg-white h-[40px] w-auto box-border border-1"
            v-for="(time, index) in time_arr" :key="index">
            <button class="p-2">{{ time }}</button>
          </div>
        </div>
        <div class="flex flex-row">
          <div class="text-xl bg-slate-100 m-5 font-extrabold">수업형태</div>
          <div class="flex m-3 bg-white h-auto w-auto box-border border-2"
            v-for="(type, index) in class_type_arr" :key="index">
            <button class="p-1">{{ type }}</button>
          </div>
          <button class="bg-slate-500 px-4 h-auto m-3 text-white">내게 맞는 수업 보기</button>
        </div>
        <div class=""></div>
        <div class=""></div>
      </div>
      <div
        @mouseover="showoffModal" @focus="bar"
        v-bind:class="[margin_top]"
        class="box-border h-auto border-2 flex justify-center">
        <div class="w-[1100px] h-auto
            flex flex-row flex-wrap justify-center content-center">
          <div v-for="(item, index) in class_list_axios.class_list" :key="index">
            <SearchClass
              :class_object="item"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="text-xl flex flex-row h-[51.4px] list-none justify-center">
      <li class="m-5">1</li>
      <li class="m-5">2</li>
      <li class="m-5">3</li>
      <li class="m-5">4</li>
      <li class="m-5">| 다음</li>
    </div>
    <div class="h-[50px]"></div>
    <div class="box-border h-[374.8px] border-2">footer</div>
  </div>
</template>

<script>
import MenuList from '@/components/Search/MenuList.vue';
import SearchClass from '@/components/Search/SearchClass.vue';

export default {
  name: 'SearchPage',
  components: {
    MenuList,
    SearchClass,
  },
  data() {
    return {
      class_type_arr: ['오리지널 VOD', '온라인 LIVE', 'VOD 녹화영상', '오프라인', '전자책', '1:1 클래스', '그룹 클래스', '원데이', '다회차'],
      time_arr: ['오전 (06:00~12:00)', '오후 (12:00~18:00)', '저녁 (18:00~24:00)'],
      day_arr: ['월', '화', '수', '목', '금', '토', '일'],
      margin_top: '',
      choice_menu_index: 0,
      show_modal: false,
      show_text: 'X',
      select_data: {
        area: ['지역', '서울', '광주', '부산'],
      },
      menu_list: true,
      menus: [
        '인기수업',
        '뷰티/헬스',
        '액티비티',
        '라이프',
        '취미/공예',
        '머니',
        '커리어',
        '디자인/영상',
        '외국어',
      ],
      class_list_axios: {
        category: '인기수업',
        class_num: 15,
        class_list: [
          {
            title: '온라인 팀프로젝트로 배우는 아이디어 발상법, 디자인씽킹',
            onedayclass: true,
            class_type: '온라인 Live',
            love_num: 10,
            class_url: 'url',
            review_num: 10,
            host: '서유경',
            host_img_url: 'url',
            nickname: '유다',
            price_per_hour: 27500,
            rate: 5,
          },
          {
            title: '온라인 팀프로젝트로 배우는 아이디어 발상법, 디자인씽킹',
            onedayclass: true,
            class_type: '온라인 Live',
            love_num: 10,
            class_url: 'url',
            review_num: 10,
            host: '서유경',
            host_img_url: 'url',
            nickname: '유다',
            price_per_hour: 27500,
            rate: 5,
          },
          {
            title: '온라인 팀프로젝트로 배우는 아이디어 발상법, 디자인씽킹',
            onedayclass: true,
            class_type: '온라인 Live',
            love_num: 10,
            class_url: 'url',
            review_num: 10,
            host: '서유경',
            host_img_url: 'url',
            nickname: '유다',
            price_per_hour: 27500,
            rate: 5,
          },
          {
            title: '온라인 팀프로젝트로 배우는 아이디어 발상법, 디자인씽킹',
            onedayclass: true,
            class_type: '온라인 Live',
            love_num: 10,
            class_url: 'url',
            review_num: 10,
            host: '서유경',
            host_img_url: 'url',
            nickname: '유다',
            price_per_hour: 27500,
            rate: 5,
          },
          {
            title: '온라인 팀프로젝트로 배우는 아이디어 발상법, 디자인씽킹',
            onedayclass: true,
            class_type: '온라인 Live',
            love_num: 10,
            class_url: 'url',
            review_num: 10,
            host: '서유경',
            host_img_url: 'url',
            nickname: '유다',
            price_per_hour: 27500,
            rate: 5,
          },
          {
            title: '온라인 팀프로젝트로 배우는 아이디어 발상법, 디자인씽킹',
            onedayclass: true,
            class_type: '온라인 Live',
            love_num: 10,
            class_url: 'url',
            review_num: 10,
            host: '서유경',
            host_img_url: 'url',
            nickname: '유다',
            price_per_hour: 27500,
            rate: 5,
          },
          {
            title: '온라인 팀프로젝트로 배우는 아이디어 발상법, 디자인씽킹',
            onedayclass: true,
            class_type: '온라인 Live',
            love_num: 10,
            class_url: 'url',
            review_num: 10,
            host: '서유경',
            host_img_url: 'url',
            nickname: '유다',
            price_per_hour: 27500,
            rate: 5,
          },
          {
            title: '온라인 팀프로젝트로 배우는 아이디어 발상법, 디자인씽킹',
            onedayclass: true,
            class_type: '온라인 Live',
            love_num: 10,
            class_url: 'url',
            review_num: 10,
            host: '서유경',
            host_img_url: 'url',
            nickname: '유다',
            price_per_hour: 27500,
            rate: 5,
          },
          {
            title: '온라인 팀프로젝트로 배우는 아이디어 발상법, 디자인씽킹',
            onedayclass: true,
            class_type: '온라인 Live',
            love_num: 10,
            class_url: 'url',
            review_num: 10,
            host: '서유경',
            host_img_url: 'url',
            nickname: '유다',
            price_per_hour: 27500,
            rate: 5,
          },
        ],
      },
    };
  },
  methods: {
    showOffMenuList() {
      this.margin_top = '';
      if (this.menu_list) {
        this.menu_list = false;
        this.show_modal = false;
        this.show_text = '🔻';
      } else {
        this.menu_list = true;
        this.show_text = 'X';
      }
    },
    showModal(index) {
      this.show_modal = true;
      if (this.show_modal && !this.menu_list) {
        this.margin_top = 'mt-[217px]';
      } else {
        this.margin_top = '';
      }
      this.choice_menu_index = index;
    },
    showoffModal() {
      this.show_modal = false;
      this.margin_top = '';
    },
  },
};
</script>

<style></style>

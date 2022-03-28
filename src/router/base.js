import HomePage from '@/views/Home/HomePage.vue';
import SearchPage from '@/views/SearchPage.vue';
import TalentDetailPage from '@/views/TalentDetailPage.vue';

export default [
  {
    path: '/',
    name: 'HomePage',
    components: { main: HomePage },
  },
  {
    // path: '/Talent/Detail/:classId',
    path: '/Talent/Detail/',
    name: 'TalentDetailPage',
    components: { main: TalentDetailPage },
  },
  {
    path: '/Home/Search/',
    name: 'SearchPage',
    components: { main: SearchPage },
  },
];

import Vue from 'vue';
import Router from 'vue-router';
import Calendar from '@/components/Calendar';
import Swap from '@/components/Swap';
import Team from '@/components/Team';
import Home from '@/components/Home';
import FullCalendar from 'vue-full-calendar';

Vue.use(Router);
Vue.use(FullCalendar);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/calendar',
      name: 'calendar',
      component: Calendar,
    },
    {
      path: '/swap',
      name: 'swap',
      component: Swap,
    },
    {
      path: '/team/:ccbuTeam',
      name: 'team',
      component: Team,
      props: true,
    },
  ],
});

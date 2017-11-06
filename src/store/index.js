import Vue from 'vue';
import Vuex from 'vuex';
import calendarEvents from './calendarEvents';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    calendarEvents,
  },
});

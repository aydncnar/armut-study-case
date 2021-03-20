/*
* Aydin Cinar <cinar.aydinn@gmail.com>
* Store
*/

import Vue from 'vue';
import Vuex from 'vuex';
import VuexPersistence from 'vuex-persist';
import answers from './answers.module';
import services from './service.module';
import questions from "./questions.module";
import ui from './ui.module';

Vue.use(Vuex);

const vuexLocal = new VuexPersistence({
  storage: window.localStorage
});

export default new Vuex.Store({
  modules: {
    answers,
    services,
    questions,
    ui
  },
  plugins: [vuexLocal.plugin]
});
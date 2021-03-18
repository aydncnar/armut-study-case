/*
* Aydin Cinar <cinar.aydinn@gmail.com>
* Store
*/

import Vue from "vue";
import Vuex from "vuex";
import services from './service.module';
import questions from "./questions.module";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    services,
    questions
  }
});
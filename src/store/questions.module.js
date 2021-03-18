/*
* Aydin Cinar <cinar.aydinn@gmail.com>
* Questions Module
*/

import { API } from '@/service/api.service';
import { FETCH_QUESTIONS } from './actions.type';
import { SET_QUESTIONS } from'./mutation.type';

const state = {
    questions: [],
};

const getters = {
    questions(state) {
        return state.questions;
    }
};

const mutations = {
    [SET_QUESTIONS](state, payload) {
        state.questions = payload;
    }
};

const actions = {
    async [FETCH_QUESTIONS]({ commit }, serviceId) {
        const response = await API.getQuestions(serviceId);
        commit(SET_QUESTIONS, response.data);
    }
};

export default {
    state,
    getters,
    mutations,
    actions
};
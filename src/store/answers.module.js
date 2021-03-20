/*
* Aydin Cinar <cinar.aydinn@gmail.com>
* Answers Module
*/
import { ADD_OR_UPDATE_ANSWERS, CLEAR_ANSWERS } from './actions.type';
import { SET_ANSWERS } from'./mutation.type';
import { AnswerService } from '@/service/answer.service';

const state = {
    answers: [],
};

const getters = {
    answers(state) {
        return state.answers;
    },
};

const mutations = {
    [SET_ANSWERS](state, payload) {
        state.answers = payload;
    }
};

const actions = {
    [ADD_OR_UPDATE_ANSWERS]({ commit }, answers) {
        commit(SET_ANSWERS, answers);
    },
    [CLEAR_ANSWERS]({commit}) {
        AnswerService.clear();
        commit(SET_ANSWERS, []);
    }
};

export default {
    state,
    getters,
    mutations,
    actions
};
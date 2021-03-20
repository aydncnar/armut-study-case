/*
* Aydin Cinar <cinar.aydinn@gmail.com>
* UI Module
*/

import { UPDATE_PROGRESS } from './actions.type';
import { SET_PROGRESS } from'./mutation.type';

const state = {
    progress: 1,
};

const getters = {
    progress(state) {
        return state.progress;
    },
};

const mutations = {
    [SET_PROGRESS](state, payload) {
        state.progress = payload;
    }
};

const actions = {
    async [UPDATE_PROGRESS]({ commit }, progress) {
        commit(SET_PROGRESS, progress);
    }
};

export default {
    state,
    getters,
    mutations,
    actions
};
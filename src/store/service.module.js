/*
* Aydin Cinar <cinar.aydinn@gmail.com>
* Services Module
*/

import { API } from '@/service/api.service';
import { FETCH_SERVICES } from './actions.type';
import { SET_SERVICES } from'./mutation.type';

const state = {
    services: [],
};

const getters = {
    services(state) {
        return state.services;
    },
    currentService: (state) => (serviceId) => {
        return state.services.find(service => service.serviceId == serviceId) || false;
    },
};

const mutations = {
    [SET_SERVICES](state, payload) {
        state.services = payload;
    }
};

const actions = {
    async [FETCH_SERVICES]({ commit }) {
        const response = await API.getServices();
        commit(SET_SERVICES, response.data);
    }
};

export default {
    state,
    getters,
    mutations,
    actions
};
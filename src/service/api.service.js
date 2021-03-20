/*
* Aydin Cinar <cinar.aydinn@gmail.com>
* API Service
*/

import Base from './api.base';

export const API = {
    getServices: () => {
        return Base.get('/services.json');
    },
    getQuestions: (serviceId) => {
        return Base.get(`/${serviceId}-questions.json`);
    },
    getCity: () => {
        return Base.get(`/cities.json`);
    },
    getDistricts: () => {
        return Base.get(`/districts.json`)
    },
    getTowns: () => {
        return Base.get(`/towns.json`)
    }
}
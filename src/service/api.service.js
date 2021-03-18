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
    }
}
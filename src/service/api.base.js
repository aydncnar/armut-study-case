/*
 * Aydin Cinar <cinar.aydinn@gmail.com>
 * API Base
 */

import axios from "axios";

const API_URL = process.env.VUE_APP_API_URL;

export default axios.create({
    baseURL: API_URL
});
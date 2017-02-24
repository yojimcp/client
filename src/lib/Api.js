import AuthToken from './AuthToken';
import 'whatwg-fetch';

import restful, { fetchBackend } from 'restful.js';
import Config from '../config/development';
const api = restful(Config.URL_SERVER, fetchBackend(fetch));
api.identifier('_id');

api.addRequestInterceptor((config) => {
    const token = AuthToken.getToken();
    if (token) {
      config.headers = config.headers || {};
      config.headers.Accept="application/json";
      config.headers.Authorization = token;
    }
    return config;
});

api.addResponseInterceptor((response, config) => {
    const { data, headers, statusCode } = response;
    if(headers.authorization){
      AuthToken.setToken(headers.authorization);
    }
    return config;
});

export default api;

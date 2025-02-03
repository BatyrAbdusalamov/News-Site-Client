import axios from 'axios';

export const postman = axios.create({
  baseURL: 'http://localhost:5000',
  paramsSerializer: params =>
    JSON.stringify(params)
});
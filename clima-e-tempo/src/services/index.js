import axios from "axios";

axios.interceptors.request.use(
  function (config) {
    config.baseURL = "https://api.openweathermap.org/data/2.5/weather";
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
  patch: axios.patch,
};

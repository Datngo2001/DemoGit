import axios from "axios";

const API_ENDPOINT = "http://localhost:3005/api";

function getToken() {
  const token = localStorage.getItem("token");

  return token ? `Bearer ${token}` : null;
}

const api = axios.create({
  baseURL: API_ENDPOINT,
});

// api.interceptors.request.use((config) => {
//   config.headers.authorization = getToken();
// });

api.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    config.headers.authorization = getToken();
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);
export default api;

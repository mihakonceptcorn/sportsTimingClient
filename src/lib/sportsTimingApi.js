import axios from "axios";
import { apiUrl } from "@/settings/config";

export default () => {
  let options = {};
  options.baseURL = apiUrl;
  options.headers = {};

  let token = localStorage.getItem('token');
  if (token) {
    options.headers.Authorization = `${token}`;
  }

  return axios.create(options);
};
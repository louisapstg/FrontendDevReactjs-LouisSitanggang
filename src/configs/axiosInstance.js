import axios from "axios";
import CONST from "../utils/constants";

const configAxios = {
  baseURL: CONST.BASE_URL_API,
  headers: {},
};

const axiosInstance = axios.create(configAxios);

export default axiosInstance;

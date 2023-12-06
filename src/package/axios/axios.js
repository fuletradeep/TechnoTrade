// import axios from "axios";
import constant from "@app/constants/constant";
import * as coreAxios from "axios";

const baseData = {
  // baseURL: process.env?.API_ENDPOINT || constant.BASE_URL,
  baseURL: constant.BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Authorization: "Basic RGVlcDpkZWVw",
    // 'Content-Type': 'application/json',
  },
  data: {
    Protocol: "jsonPTS",
    Packets: [
      {
        Id: 1,
        Type: "GetDateTime",
      },
    ],
  },
};
const apiClient = coreAxios.default.create(baseData);

export const axiosMD = coreAxios.default.create(baseData);

export default apiClient;

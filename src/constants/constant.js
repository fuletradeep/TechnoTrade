import HomeController from "@app/screens/home/HomeController";
import { AppStackC } from "./navigation";
import R from "@app/res/R";

const BASE_URL = "https://192.168.1.9/jsonPTS/"; //Debug
// const BASE_URL = 'http://203.109.112.229:98/api/v1'; //Live

const KEY_STORAGE = {
  ADDITEMLIST: "@DataCreatorApp:addItemList",
};



export default {
  BASE_URL,
  KEY_STORAGE,
};

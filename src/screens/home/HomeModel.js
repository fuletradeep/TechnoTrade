import { useDispatch, useSelector } from "react-redux";
import { AppStackC } from "@app/constants/navigation";
import { useNavigation } from "@react-navigation/native";
import { useEffect } from "react";
import { addToCart, getPumpList } from "@app/store/home/homeSlice";
import axios from "axios";
import { NativeModules } from "react-native";
import RNFetchBlob from "react-native-fetch-blob";
import toast from "@app/util/toast";

export function useHomeModel() {
  const navigation = useNavigation();
  global.Buffer = require("buffer").Buffer;

  const dispatch = useDispatch();

  const { pumpList } = useSelector((state) => state.home);


  useEffect(() => {
    dispatch(getPumpList());
  }, []);

  const onPumpCardPress = (id) => {
    console.log('iiid',id)
    navigation.navigate(AppStackC.PUMP_DETAILS, { id: id });
  };

  return {
    onPumpCardPress,
    pumpList,
  };
}

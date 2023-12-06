import { View, Text } from "react-native";
import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import {  getSelectedPumpNozelDetails } from "@app/store/pump_details/PumpDetailsSlice";
import { AppStackC } from "@app/constants/navigation";

export function useProductDetailsModel(props) {
  const navigation = useNavigation();

  const dispatch = useDispatch();

  const { pumpDetails,nozelDetails } = useSelector((state) => state.pump);
  console.log('model',nozelDetails)
  useEffect(() => {
    dispatch(getSelectedPumpNozelDetails(props));
  }, []);

  const onHeaderBackPress = () => {
    navigation.goBack();
  };


  return {
    pumpDetails,
    nozelDetails,
    onHeaderBackPress,
  };
}

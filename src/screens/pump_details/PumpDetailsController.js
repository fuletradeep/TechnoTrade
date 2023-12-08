import { View, Text } from "react-native";
import React from "react";
import ProductDetailsView from "./PumpDetailsView";
import { useProductDetailsModel } from "./PumpDetailsModel";
import { useHomeModel } from "../home/HomeModel";

const PumpDetailsController = (props) => {
  const { pumpDetails,nozelDetails, onHeaderBackPress,onForceStopPress } =
    useProductDetailsModel(props.route.params.id);

  return (
    <ProductDetailsView
      pumpDetails={pumpDetails}
      onHeaderBackPress={onHeaderBackPress}
      nozelDetails={nozelDetails}
      onForceStopPress={onForceStopPress}
    />
  );
};

export default PumpDetailsController;

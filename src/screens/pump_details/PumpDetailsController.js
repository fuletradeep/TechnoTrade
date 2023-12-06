import { View, Text } from "react-native";
import React from "react";
import ProductDetailsView from "./PumpDetailsView";
import { useProductDetailsModel } from "./PumpDetailsModel";
import { useHomeModel } from "../home/HomeModel";

const PumpDetailsController = (props) => {
  const { pumpDetails,nozelDetails, onHeaderBackPress } =
    useProductDetailsModel(props.route.params.id);

    console.log('controller',nozelDetails)
  return (
    <ProductDetailsView
      pumpDetails={pumpDetails}
      onHeaderBackPress={onHeaderBackPress}
      nozelDetails={nozelDetails}
    />
  );
};

export default PumpDetailsController;

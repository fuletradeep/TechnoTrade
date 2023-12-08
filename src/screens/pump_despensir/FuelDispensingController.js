import { View, Text } from "react-native";
import React from "react";
import { useFuelDispensingModel } from "./FuelDispensingModel";
import FuelDispensingView from "./FuelDispensingView";

const FuelDispensingController = (props) => {
  const { pumpDetails, nozelDetails, fuelDetails,onHeaderBackPress,onStopPress } = useFuelDispensingModel(
    props.route.params.id,
    props.route.params.orderId
  );
  return (
   <FuelDispensingView fuelDetails={fuelDetails} onHeaderBackPress={onHeaderBackPress} pumpDetails={pumpDetails} nozelDetails={nozelDetails} onStopPress={onStopPress}/>
  );
};

export default FuelDispensingController;

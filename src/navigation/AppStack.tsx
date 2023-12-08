import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AppStackC } from "../constants/navigation";
import BottomTabNavigation from "./BottomTabNavigation";
import PumpDetailsController from "@app/screens/pump_details/PumpDetailsController";
import FuelDispensingController from "@app/screens/pump_despensir/FuelDispensingController";
import InvoiceScreen from "@app/screens/pump_details/InvoiceScreen";

const Stack = createNativeStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator initialRouteName={AppStackC.BOTTOM_TAB_SCREEN}>
      <Stack.Screen
        name={AppStackC.BOTTOM_TAB_SCREEN}
        component={BottomTabNavigation}
        options={() => ({
          title: AppStackC.BOTTOM_TAB_SCREEN,
          headerShown: false,
        })}
      />
      <Stack.Screen
        name={AppStackC.PUMP_DETAILS}
        component={PumpDetailsController}
        options={() => ({
          title: AppStackC.PUMP_DETAILS,
          headerShown: false,
        })}
      />
      <Stack.Screen
        name={AppStackC.FUEL_DISPENSING}
        component={FuelDispensingController}
        options={() => ({
          title: AppStackC.FUEL_DISPENSING,
          headerShown: false,
        })}
      />
    </Stack.Navigator>
  );
};

export default AppStack;

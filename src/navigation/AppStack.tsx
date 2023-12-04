import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AppStackC } from "../constants/navigation";
import BottomTabNavigation from "./BottomTabNavigation";
import ProductDetailsController from "@app/screens/product_details/ProductDetailsController";
import CartController from "@app/screens/cart/CartController";

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
        name={AppStackC.PRODUCT_DETAILS}
        component={ProductDetailsController}
        options={() => ({
          title: AppStackC.PRODUCT_DETAILS,
          headerShown: false,
        })}
      />
       <Stack.Screen
        name={AppStackC.CART}
        component={CartController}
        options={() => ({
          title: AppStackC.CART,
          headerShown: false,
        })}
      />
    </Stack.Navigator>
  );
};

export default AppStack;

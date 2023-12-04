import { View, Text } from "react-native";
import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { getProductDetails } from "@app/store/product_details/ProductDetailsSlice";
import { AppStackC } from "@app/constants/navigation";

export function useProductDetailsModel(props) {
  console.log(props);
  const navigation = useNavigation();

  const dispatch = useDispatch();

  const { productDetails } = useSelector((state) => state.product);
  const { recommendProductList } = useSelector((state) => state.home);
  useEffect(() => {
    dispatch(getProductDetails(props));
  }, []);

  const onHeaderBackPress = () => {
    navigation.goBack();
  };

  const onHeaderCartPress = () => {
    navigation.navigate(AppStackC.CART);
  };

  const isAddedToCart = (selected) => {
    console.log('===```===',recommendProductList.find((item) => item?.id === selected?.id))
    // return recommendProductList.find((item) => item?.id === selected?.id)
    //   .isAddedToCart;
  };

  return {
    productDetails,
    onHeaderBackPress,
    onHeaderCartPress,
    isAddedToCart
  };
}

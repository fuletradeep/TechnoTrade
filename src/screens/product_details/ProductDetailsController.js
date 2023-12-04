import { View, Text } from "react-native";
import React from "react";
import ProductDetailsView from "./ProductDetailsView";
import { useProductDetailsModel } from "./ProductDetailsModel";
import { useHomeModel } from "../home/HomeModel";

const ProductDetailsController = (props) => {
  const { productDetails, onHeaderBackPress, onHeaderCartPress, isAddedToCart } =
    useProductDetailsModel(props.route.params.id);
    const {onAddToCartPress } = useHomeModel();
  return (
    <ProductDetailsView
      productDetails={productDetails}
      onHeaderBackPress={onHeaderBackPress}
      onHeaderCartPress={onHeaderCartPress}
      onAddToCartPress={onAddToCartPress}
      isAddedToCart={isAddedToCart}
    />
  );
};

export default ProductDetailsController;

import BaseLayout from "@app/components/layout";
// import HomeView from '@app/containers/Home';
import R from "@app/res/R";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import HomeView from "./HomeView";
import { useHomeModel } from "./HomeModel";
import axios from "axios";

const HomeController = (props) => {
  const { recommendProductList, onProductCardPress,onAddToCartPress } = useHomeModel();

  return (
    <HomeView
      {...props}
      recommendProductList={recommendProductList}
      onProductCardPress={onProductCardPress}
      onAddToCartPress={onAddToCartPress}
    />
  );
};

export default HomeController;

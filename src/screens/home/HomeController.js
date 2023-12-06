import BaseLayout from "@app/components/layout";
// import HomeView from '@app/containers/Home';
import R from "@app/res/R";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import HomeView from "./HomeView";
import { useHomeModel } from "./HomeModel";
import axios from "axios";

const HomeController = (props) => {
  const { pumpList, onPumpCardPress } = useHomeModel();

  return (
    <HomeView
      {...props}
      pumpList={pumpList}
      onPumpCardPress={onPumpCardPress}
    />
  );
};

export default HomeController;

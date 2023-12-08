import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { getSelectedPumpNozelDetails } from "@app/store/pump_details/PumpDetailsSlice";
import { AppStackC } from "@app/constants/navigation";
import moment from "moment";
import { getFuelDispensingDetails } from "@app/store/fuel_dispensing/FuelDispensingSlice";
import axios from "axios";
import toast from "@app/util/toast";

export function useFuelDispensingModel(props, orderId) {
  const navigation = useNavigation();
  const [stopcall, setStopcall] = useState(false);

  const dispatch = useDispatch();

  // useEffect(() => {
  //   console.log("webbb");
  //   // const socket = new WebSocket("wss://192.168.1.9/ptsWebSocket");

  //   // // Event listener for WebSocket connection opened
  //   // socket.addEventListener("open", (event) => {
  //   //   console.log("WebSocket connection opened", event);
  //   // });

  //   // // Event listener for WebSocket connection closed
  //   // socket.addEventListener("close", (event) => {
  //   //   console.log("WebSocket connection closed", event);
  //   // });

  //   // // Event listener for incoming WebSocket messages
  //   // socket.addEventListener("message", (event) => {
  //   //   console.log("Received message:", event.data);
  //   //   // Handle incoming messages
  //   // });

  //   // // Clean up the WebSocket connection on component unmount
  //   // return () => {
  //   //   socket.close();
  //   // };
  // }, []);

  const { pumpDetails, nozelDetails } = useSelector((state) => state.pump);
  const { fuelDetails } = useSelector((state) => state.fuel);
  useEffect(() => {
    if (!stopcall) {
      dispatch(getFuelDispensingDetails(props, orderId));
      let interval = setInterval(() => {
        dispatch(getFuelDispensingDetails(props, orderId));
      }, 1000);
      return () => {
        clearInterval(interval);
        setStopcall(false);
      };
    }
  }, [stopcall]);

  const onHeaderBackPress = () => {
    navigation.goBack();
  };

  const onStopPress = async () => {
    setStopcall(true);
    console.log("======");
    let data = JSON.stringify({
      Protocol: "jsonPTS",
      Packets: [
        {
          Id: props,
          Type: "PumpStop",
          Data: {
            Pump: props,
          },
        },
      ],
    });

    try {
      const response = await axios.post(
        "https://192.168.1.9:443/jsonPTS/",
        data,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Basic RGVlcDpkZWVw",
          },
        }
      );
      console.log("fffdsfdfdfdfdfdf", response);
      toast.show("Fuel Dispensing Stop", "", "danger");
    } catch (error) {
      console.log('error--------',error)
      if (error.response) {
        console.error("Response error:", error.response.data);
        console.error("Status code:", error.response.status);
        return {
          isError: 1,
          message: "Please try again" + `\n${error.response.data}`,
        };
      } else if (error.request) {
        console.error(
          "No response received. Is the server down?",
          error.request
        );
        return {
          isError: 1,
          message: "Please try again" + `\n${error.request}`,
        };
      } else {
        console.error("Request error:", error.message);
        return {
          isError: 1,
          message: "Please try again" + `\n${error.message}`,
        };
      }
    }
  };

  return {
    pumpDetails,
    nozelDetails,
    fuelDetails,
    onHeaderBackPress,
    onStopPress,
  };
}

import { useDispatch, useSelector } from "react-redux";
import { AppStackC } from "@app/constants/navigation";
import { useNavigation } from "@react-navigation/native";
import { useEffect } from "react";
import { addToCart, getRecommendProductList } from "@app/store/home/homeSlice";
import axios from "axios";

export function useHomeModel() {
  const navigation = useNavigation();
  global.Buffer = require("buffer").Buffer;

  const dispatch = useDispatch();

  const { recommendProductList } = useSelector((state) => state.home);

  useEffect(() => {
    // dispatch(getRecommendProductList());
    const agent = axios.create({
      httpsAgent: {
        rejectUnauthorized: false, // Disable SSL/TLS verification
      },
    });

    if (agent.defaults.httpsAgent && agent.defaults.httpsAgent.rejectUnauthorized === false) {
      console.log('SSL/TLS verification is disabled.');
    } else {
      console.log('SSL/TLS verification is enabled.');
    }

    let data = JSON.stringify({
      Protocol: "jsonPTS",
      Packets: [
        {
          Id: 1,
          Type: "GetBatteryVoltage",
        },
      ],
    });

    // let config = {
    //   method: "post",
    //   maxBodyLength: Infinity,
    //   url: "https://192.168.1.9:443/jsonPTS/",
    //   headers: {
    //     "Content-Type": "application/json",
    //     Authorization: "Basic RGVlcDpkZWVw",
    //   },
    //   data: data,
    // };

    // axios
    //   .request(config)
    //   .then((response) => {
    //     console.log(JSON.stringify(response.data));
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });

    try {
      const response = agent.post("https://192.168.1.9:443/jsonPTS/", data, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Basic RGVlcDpkZWVw",
        },
      });
    } catch (error) {
      console.log("errror", error);
    }
  }, []);

  const onProductCardPress = (id) => {
    navigation.navigate(AppStackC.PRODUCT_DETAILS, { id: id });
  };

  const onAddToCartPress = (item) => {
    dispatch(addToCart(item));
  };

  return {
    onProductCardPress,
    recommendProductList,
    onAddToCartPress,
  };
}

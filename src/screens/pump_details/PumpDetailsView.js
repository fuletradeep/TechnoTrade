import { ScrollView, View, TouchableOpacity, StyleSheet } from "react-native";
import React, { useRef, useState } from "react";
import {
  ArrowRightIcon,
  ButtonIcon,
  ButtonText,
  ChevronDownIcon,
  HStack,
  Icon,
  InputField,
  Select,
  SelectBackdrop,
  SelectContent,
  SelectDragIndicator,
  SelectDragIndicatorWrapper,
  SelectIcon,
  SelectInput,
  SelectItem,
  SelectPortal,
  SelectTrigger,
  VStack,
} from "@gluestack-ui/themed";
import Text from "@app/components/common/Text";
import R from "@app/res/R";
import { AirbnbRating } from "react-native-ratings";
import FastImage from "react-native-fast-image";
import Carousel, { Pagination } from "react-native-snap-carousel";
import { Input } from "@gluestack-ui/themed";
import { Button } from "@gluestack-ui/themed";
import { CheckIcon } from "@gluestack-ui/themed";
import { checkNull } from "@app/util/Validation";
import toast from "@app/util/toast";
import { AppStackC } from "@app/constants/navigation";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import { FUEL_DESPENSING_TYPE } from "@app/util/dummyData";
import ModelView from "@app/components/view/ModelView";

const SLIDER_WIDTH = R.unit.containerWidth;

const ProductDetailsView = ({
  pumpDetails,
  nozelDetails,
  onHeaderBackPress,
  onForceStopPress,
}) => {
  const navigation = useNavigation();
  const [selecredNozelType, setSelecredNozelType] = useState(undefined);
  const [selectedFuelDispensing, setSelectedFuelDispensing] =
    useState(undefined);
  const [formData, setData] = useState({});
  const [errors, setErrors] = useState({});
  const [model, setModel] = useState({});

  const onSubmitPress = async () => {
     if (selecredNozelType == undefined) {
      setErrors({ username: "Please Select NozzelType" });
      toast.show("Please Select NozzelType", "", "danger");
      return;
    } else if (!selectedFuelDispensing) {
      setErrors({ username: "Please Select Fuel Dispensing Type" });
      toast.show("Please Select Fuel Dispensing Type", "", "danger");
      return;
    } else  if (!formData.amount) {
      setErrors({ username: "Please Enter Amount" });
      toast.show("Please Enter Amount", "", "danger");
      return;
    } else {
      let data = JSON.stringify({
        Protocol: "jsonPTS",
        Packets: [
          {
            Id: pumpDetails?.Id,
            Type: "PumpAuthorize",
            Data: {
              Pump: pumpDetails?.Id,
              Nozzle: selecredNozelType?.Id,
              Type: "Volume",
              Dose: formData.amount,
              Price: selecredNozelType?.Price,
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
        console.log("errr", response);
        if (response?.data?.Packets[0]?.Error) {
          toast.show(response?.data?.Packets[0]?.Message, "", "danger");
          setModel({ fillStart: false });
          navigation?.goBack();
        } else {
          setModel({ fillStart: true });
        }
      } catch (error) {
        setModel({ fillStart: false });
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
    }
  };

  const onPress2 = () => {
    setModel({ fillStart: false });
    navigation.goBack();
    onForceStopPress();
  };
  return (
    <ScrollView style={styles.mainScrollView}>
      <HStack alignItems="center" justifyContent="center" padding={10}>
        <TouchableOpacity
          onPress={onHeaderBackPress}
          style={{ position: "absolute", left: 0 }}
        >
          <R.svg.back />
        </TouchableOpacity>
        <HStack>
          <Text
            numberOfLines={1}
            color={R.color.black2}
            variant="title2"
            font="bold"
          >
            Pump Details
          </Text>
        </HStack>
      </HStack>
      <VStack
        flex={1}
        paddingHorizontal={R.unit.scale(12)}
        pt={R.unit.verticalScale(24)}
      >
        <HStack>
          <Text
            numberOfLines={1}
            color={R.color.black2}
            variant="title2"
            font="bold"
          >
            Pump Id -
          </Text>
          <Text
            numberOfLines={1}
            color={R.color.gray2}
            variant="title2"
            font="bold"
          >
            {" " + pumpDetails?.Id}
          </Text>
        </HStack>

        <HStack mt={R.unit.verticalScale(24)} alignItems="center" flex={1}>
          <Text
            numberOfLines={1}
            color={R.color.black2}
            variant="title2"
            font="bold"
          >
            Nozzel Type -
          </Text>
          <Select
            flex={1}
            ml={R.unit.scale(12)}
            onValueChange={(itemValue) => setSelecredNozelType(itemValue)}
          >
            <SelectTrigger variant="outline" size="md">
              <SelectInput
                placeholder="Select Nozzel Type"
                placeholderTextColor={R.color.gray2}
                ml={R.unit.scale(6)}
              />
              <SelectIcon mr="$3">
                <Icon as={ChevronDownIcon} />
              </SelectIcon>
            </SelectTrigger>
            <SelectPortal>
              <SelectBackdrop />
              <SelectContent>
                <SelectDragIndicatorWrapper>
                  <SelectDragIndicator />
                </SelectDragIndicatorWrapper>
                {nozelDetails?.map((item) => {
                  return <SelectItem label={item?.Name} value={item} />;
                })}
              </SelectContent>
            </SelectPortal>
          </Select>
        </HStack>
        {!checkNull(selecredNozelType) ? (
          <Text
            gutterTop={R.unit.verticalScale(24)}
            numberOfLines={1}
            color={R.color.gray2}
            variant="title2"
            font="bold"
          >
            {`Selected Fuel Price ${selecredNozelType?.Price}`}
          </Text>
        ) : null}

        <HStack mt={R.unit.verticalScale(24)} alignItems="center" flex={1}>
          <Text
            numberOfLines={1}
            color={R.color.black2}
            variant="title2"
            font="bold"
          >
            Fuel Despensing Type -
          </Text>
          <Select
            flex={1}
            ml={R.unit.scale(12)}
            onValueChange={(itemValue) => setSelectedFuelDispensing(itemValue)}
          >
            <SelectTrigger variant="outline" size="md">
              <SelectInput
                placeholder="Select Fuel Type"
                placeholderTextColor={R.color.gray2}
                ml={R.unit.scale(6)}
              />
              <SelectIcon mr="$3">
                <Icon as={ChevronDownIcon} />
              </SelectIcon>
            </SelectTrigger>
            <SelectPortal>
              <SelectBackdrop />
              <SelectContent>
                <SelectDragIndicatorWrapper>
                  <SelectDragIndicator />
                </SelectDragIndicatorWrapper>
                {FUEL_DESPENSING_TYPE?.map((item) => {
                  return <SelectItem label={item?.type} value={item?.value} />;
                })}
              </SelectContent>
            </SelectPortal>
          </Select>
        </HStack>

        <HStack mt={R.unit.verticalScale(24)} flex={1} alignItems="center">
          <Text
            numberOfLines={1}
            color={R.color.black2}
            variant="title2"
            font="bold"
          >
            Amount -
          </Text>
          <Input
            variant="outline"
            size="md"
            isDisabled={false}
            isInvalid={false}
            isReadOnly={false}
            flex={1}
            ml={R.unit.scale(24)}
          >
            <InputField
              placeholder="Enter Text here"
              placeholderTextColor={R.color.gray2}
              keyboardType="numeric"
              onChangeText={(value) => {
                setData({
                  ...formData,
                  amount: value,
                });
              }}
            />
          </Input>
        </HStack>

        <Button
          size="md"
          variant="solid"
          action="positive"
          isDisabled={false}
          isFocusVisible={false}
          mt={R.unit.verticalScale(24)}
          onPress={onSubmitPress}
        >
          <ButtonText>Submit </ButtonText>
          <ButtonIcon as={CheckIcon} />
        </Button>

        <ModelView
          showModal={model?.fillStart}
          pumpDetails={pumpDetails}
          onPress2={onPress2}
          setShowModel={setModel}
        />
      </VStack>
    </ScrollView>
  );
};

export default ProductDetailsView;

const styles = StyleSheet.create({
  mainScrollView: {
    flex: 1,
    backgroundColor: R.color.white,
    paddingHorizontal: R.unit.scale(20),
    paddingTop: R.unit.verticalScale(24),
  },
});

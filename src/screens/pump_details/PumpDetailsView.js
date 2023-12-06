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

const SLIDER_WIDTH = R.unit.containerWidth;

const ProductDetailsView = ({
  pumpDetails,
  nozelDetails,
  onHeaderBackPress,
}) => {
  console.log("nnnnn", nozelDetails);
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
            Fuel Type -
          </Text>
          <Select flex={1} ml={R.unit.scale(12)}>
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
                {nozelDetails?.map((item) => {
                  return <SelectItem label={item?.Name} value={item?.Id} />;
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
          >
            <InputField placeholder="Enter Text here" />
          </Input>
        </HStack>

        <Button
          size="md"
          variant="solid"
          action="positive"
          isDisabled={false}
          isFocusVisible={false}
        >
          <ButtonText>Submit </ButtonText>
          <ButtonIcon as={CheckIcon} />
        </Button>
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

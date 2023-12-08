import { TouchableOpacity, ScrollView, StyleSheet } from "react-native";
import React from "react";
import { ButtonIcon, ButtonText, CloseCircleIcon, VStack } from "@gluestack-ui/themed";
import { HStack } from "@gluestack-ui/themed";
import R from "@app/res/R";
import Text from "@app/components/common/Text";
import { Button } from "@gluestack-ui/themed";

const FuelDispensingView = ({
  fuelDetails,
  onHeaderBackPress,
  pumpDetails,
  nozelDetails,
  onStopPress
}) => {
  

  const onSubmitPress = () => {
    onStopPress()
  }
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
            Fuel Dispensing
          </Text>
        </HStack>
      </HStack>

      <HStack alignSelf="center" mt={R.unit.verticalScale(24)}>
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

      <HStack alignSelf="center" mt={R.unit.verticalScale(24)}>
        <Text
          numberOfLines={1}
          color={R.color.black2}
          variant="title2"
          font="bold"
        >
          Fuel Type -
        </Text>
        <Text
          numberOfLines={1}
          color={R.color.gray2}
          variant="title2"
          font="bold"
        >
          {
            nozelDetails?.find((item) => {
              return item?.Id === fuelDetails?.Nozzle;
            })?.Name
          }
        </Text>
      </HStack>

      <HStack alignSelf="center" mt={R.unit.verticalScale(24)}>
        <Text
          numberOfLines={1}
          color={R.color.black2}
          variant="title2"
          font="bold"
        >
          Dispensing Amount -
        </Text>
        <Text
          numberOfLines={1}
          color={R.color.gray2}
          variant="title2"
          font="bold"
        >
          {fuelDetails?.Amount}
        </Text>
      </HStack>

      <HStack alignSelf="center" mt={R.unit.verticalScale(24)}>
        <Text
          numberOfLines={1}
          color={R.color.black2}
          variant="title2"
          font="bold"
        >
          Dispensing Volume -
        </Text>
        <Text
          numberOfLines={1}
          color={R.color.gray2}
          variant="title2"
          font="bold"
        >
          {fuelDetails?.Volume}
        </Text>
      </HStack>

      <Button
        size="md"
        variant="solid"
        action="negative"
        isDisabled={false}
        isFocusVisible={false}
        mt={R.unit.verticalScale(24)}
        onPress={onSubmitPress}
      >
        <ButtonText>Stop </ButtonText>
        <ButtonIcon as={CloseCircleIcon} />
      </Button>
    </ScrollView>
  );
};

export default FuelDispensingView;

const styles = StyleSheet.create({
  mainScrollView: {
    flex: 1,
    backgroundColor: R.color.white,
    paddingHorizontal: R.unit.scale(20),
    paddingTop: R.unit.verticalScale(24),
  },
});

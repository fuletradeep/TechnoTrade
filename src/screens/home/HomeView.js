import {
  View,
  FlatList,
  ImageBackground,
  StyleSheet,
  StatusBar,
  Image,
  TextInput,
  TouchableOpacity,
  Animated,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import R from "@app/res/R";
import Text from "@app/components/common/Text";
import { HStack, VStack } from "@gluestack-ui/themed";
import { useDispatch, useSelector } from "react-redux";
import { getRecommendProductList } from "@app/store/home/homeSlice";
import FastImage from "react-native-fast-image";
import ProductCard from "@app/components/cards/ProductCard";

const OFFER_LIST = [
  {
    color: R.color.hold,
  },
  {
    color: R.color.gray2,
  },
  {
    color: R.color.hold,
  },
  {
    color: R.color.gray2,
  },
];

const HomeView = ({ recommendProductList, onProductCardPress, onAddToCartPress }) => {
  StatusBar.setHidden(true, "none");

  const scrollX = useRef(new Animated.Value(0)).current;
  const renderProducts = ({ item }) => {
    return <ProductCard item={item} onProductCardPress={onProductCardPress} onAddToCartPress={onAddToCartPress}/>;
  };

  const renderOfferList = ({ item }) => {
    return (
      <HStack
        backgroundColor={item.color}
        paddingHorizontal={R.unit.scale(22)}
        paddingVertical={R.unit.verticalScale(26)}
        borderRadius={R.unit.scale(12)}
        marginRight={R.unit.scale(18)}
        alignItems="center"
      >
        <R.svg.dummy_img />
        <VStack ml={R.unit.scale(20)}>
          <Text
            numberOfLines={1}
            color={R.color.white}
            variant="title2"
            font="medium"
          >
            Get
          </Text>
          <Text
            numberOfLines={1}
            color={R.color.white}
            variant="title4"
            font="bold"
          >
            50% OFF
          </Text>
          <Text
            numberOfLines={1}
            color={R.color.white}
            variant="title2"
            font="medium"
          >
            On First 3 order
          </Text>
        </VStack>
      </HStack>
    );
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: R.color.white,
      }}
    >
      <VStack
        backgroundColor={R.color.primary}
        pt={R.unit.verticalScale(52)}
        paddingHorizontal={R.unit.scale(20)}
        pb={R.unit.verticalScale(12)}
      >
        <HStack justifyContent="space-between" alignItems="center">
          <Text
            numberOfLines={1}
            color={R.color.white}
            variant="title4"
            font="medium"
          >
            Hey, Deep
          </Text>
          <R.svg.cart />
        </HStack>
        <TouchableOpacity
          style={{
            backgroundColor: R.color.textinput,
            borderRadius: R.unit.scale(28),
            marginTop: R.unit.verticalScale(35),
            flexDirection: "row",
            alignItems: "center",
            paddingVertical: R.unit.verticalScale(12),
            paddingHorizontal: R.unit.scale(28),
          }}
        >
          <R.svg.search />
          <TextInput
            style={{ color: R.color.white, paddingLeft: R.unit.scale(12) }}
            placeholder="Search Products or store"
            placeholderTextColor={R.color.placeholderText}
          />
        </TouchableOpacity>
        <HStack
          mt={R.unit.verticalScale(29)}
          justifyContent="space-between"
          alignItems="center"
        >
          <VStack>
            <Text
              numberOfLines={1}
              color={R.color.grayFont}
              variant="content"
              font="medium"
            >
              Delivery to
            </Text>
            <HStack alignItems="center">
              <Text
                numberOfLines={1}
                color={R.color.white}
                variant="title3"
                font="medium"
              >
                Green Way 3000, Sylhet
              </Text>
              <R.svg.arrow_down style={{ marginLeft: R.unit.scale(10) }} />
            </HStack>
          </VStack>
          <VStack>
            <Text
              numberOfLines={1}
              color={R.color.grayFont}
              variant="content"
              font="medium"
            >
              Within{" "}
            </Text>
            <HStack alignItems="center">
              <Text
                numberOfLines={1}
                color={R.color.white}
                variant="title3"
                font="medium"
              >
                1 Hour
              </Text>
              <R.svg.arrow_down style={{ marginLeft: R.unit.scale(10) }} />
            </HStack>
          </VStack>
        </HStack>
      </VStack>

      <VStack
        // flex={1}
        backgroundColor={R.color.white}
        paddingHorizontal={R.unit.scale(20)}
      >
        <Animated.FlatList
          data={OFFER_LIST}
          renderItem={renderOfferList}
          keyExtractor={(item, index) => index.toString()}
          horizontal={true}
          pagingEnabled
          snapToInterval={R.unit.containerWidth}
          decelerationRate="fast"
          showsHorizontalScrollIndicator={false}
          scrollEventThrottle={0}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
            { useNativeDriver: true }
          )}
          style={{
            width: R.unit.containerWidth,
            marginTop: R.unit.verticalScale(27),
          }}
          contentContainerStyle={{ paddingRight: R.unit.scale(20) }}
        />

        <Text
          numberOfLines={1}
          color={R.color.black}
          variant="h4"
          font="medium"
        >
          Recommended
        </Text>

        <FlatList
          data={recommendProductList || []}
          renderItem={renderProducts}
          keyExtractor={(item, index) => "key" + index}
          numColumns={2}
          columnWrapperStyle={{ flex: 1 / 2, justifyContent: "space-between" }}
          showsVerticalScrollIndicator={false}
        />
      </VStack>
    </View>
  );
};

export default HomeView;

const styles = StyleSheet.create({
  ImageBackground: {
    width: R.unit.containerWidth,
    height: R.unit.verticalScale(150),
    paddingHorizontal: R.unit.scale(10),
    paddingTop: R.unit.scale(30),
  },
  ProfileImgStyle: {
    width: R.unit.scale(40),
    height: R.unit.verticalScale(40),
    borderRadius: R.unit.scale(40),
    borderWidth: 2,
    borderColor: R.color.blue_1,
  },
});

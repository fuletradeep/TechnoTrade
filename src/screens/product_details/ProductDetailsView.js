import { ScrollView, View, TouchableOpacity, StyleSheet } from "react-native";
import React, { useRef, useState } from "react";
import { HStack, VStack } from "@gluestack-ui/themed";
import Text from "@app/components/common/Text";
import R from "@app/res/R";
import { AirbnbRating } from "react-native-ratings";
import FastImage from "react-native-fast-image";
import Carousel, { Pagination } from "react-native-snap-carousel";

const SLIDER_WIDTH = R.unit.containerWidth;

const ProductDetailsView = ({
  productDetails,
  onHeaderCartPress,
  onHeaderBackPress,
  onAddToCartPress,
  isAddedToCart
}) => {
  console.log("productDetails", productDetails);
  const [index, setIndex] = useState(0);
  const isCarousel = useRef(null);

  const renderItem = ({ item }) => {
    return (
      <View
        style={{
          alignItems: "center",
          backgroundColor: "white",
        }}
      >
        <FastImage
          source={{ uri: item }}
          style={{ width: SLIDER_WIDTH, height: R.unit.verticalScale(200) }}
        />
      </View>
    );
  };

  const onCartPress = (item) => {
    onAddToCartPress(item);
  }

  return (
    <ScrollView style={styles.mainScrollView}>
      <HStack justifyContent="space-between" alignItems="center">
        <TouchableOpacity onPress={onHeaderBackPress}>
          <R.svg.back />
        </TouchableOpacity>
        <TouchableOpacity onPress={onHeaderCartPress}>
          <R.svg.cart_black />
        </TouchableOpacity>
      </HStack>

      <VStack>
        <Text
          numberOfLines={1}
          color={R.color.black1}
          variant="h0"
          font="regular"
        >
          {productDetails?.brand}
        </Text>
        <Text numberOfLines={1} color={R.color.black1} variant="h0" font="bold">
          {productDetails?.title}
        </Text>
      </VStack>
      <HStack
        alignSelf="flex-start"
        mt={R.unit.verticalScale(14)}
        alignItems="center"
      >
        <AirbnbRating
          count={5}
          defaultRating={productDetails?.rating}
          size={20}
          showRating={false}
          isDisabled={true}
        />
        <Text
          numberOfLines={1}
          color={R.color.gray2}
          variant="title3"
          font="regular"
        >
          110 Reviews
        </Text>
      </HStack>
      <View style={styles.imgContainer}>
        <Carousel
          ref={isCarousel}
          data={productDetails?.images}
          renderItem={renderItem}
          sliderWidth={SLIDER_WIDTH}
          itemWidth={SLIDER_WIDTH}
          onSnapToItem={(index) => setIndex(index)}
        />
        <Pagination
          layout={"tinder"}
          dotsLength={productDetails?.images.length}
          activeDotIndex={index}
          carouselRef={isCarousel}
          dotStyle={styles.paginationDotStyle}
          tappableDots={true}
          inactiveDotStyle={{
            backgroundColor: R.color.gray3,
            // Define styles for inactive dots here
          }}
          inactiveDotOpacity={1}
          inactiveDotScale={1}
        />
      </View>
      <HStack alignItems="center" mt={R.unit.verticalScale(26)}>
        <Text
          numberOfLines={1}
          color={R.color.black1}
          variant="title2"
          font="bold"
        >
          {`$ ${productDetails?.price}`}
        </Text>
        <View style={styles.discountContainer}>
          <Text
            numberOfLines={1}
            color={R.color.white}
            variant="title3"
            font="regular"
          >
            {productDetails?.discountPercentage}
          </Text>
        </View>
      </HStack>

      <HStack justifyContent="space-evenly" mt={R.unit.verticalScale(30)}>
        <TouchableOpacity style={styles.btnStyle} onPress={() => onCartPress(productDetails)}>
          <Text
            numberOfLines={1}
            color={R.color.black1}
            variant="content"
            font="bold"
          >
            {isAddedToCart(productDetails) ? 'Added To Cart' :  'Add To Cart'}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.btnStyle,
            {
              backgroundColor: R.color.blue_1,
            },
          ]}
        >
          <Text
            numberOfLines={1}
            color={R.color.white}
            variant="content"
            font="bold"
          >
            Buy Now
          </Text>
        </TouchableOpacity>
      </HStack>

      <VStack mt={R.unit.verticalScale(30)}>
        <Text
          numberOfLines={1}
          color={R.color.black1}
          variant="title2"
          font="medium"
        >
          Details
        </Text>
        <Text color={R.color.gray2} variant="title2" font="medium">
          {productDetails?.description}
        </Text>
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
    paddingTop: R.unit.verticalScale(52),
  },
  imgContainer: {
    marginTop: R.unit.verticalScale(15),
    backgroundColor: R.color.grayfont,
    alignItems: "flex-start",
  },
  paginationDotStyle: {
    width: R.unit.scale(17),
    height: R.unit.verticalScale(4),
    borderRadius: 5,
    backgroundColor: R.color.warning,
  },
  discountContainer: {
    backgroundColor: R.color.blue_1,
    paddingHorizontal: R.unit.scale(10),
    borderRadius: R.unit.scale(70),
    paddingVertical: R.unit.verticalScale(2),
    marginLeft: R.unit.scale(4),
  },
  btnStyle: {
    paddingHorizontal: R.unit.scale(30),
    paddingVertical: R.unit.verticalScale(19),
    borderRadius: 1,
    borderRadius: R.unit.scale(20),
    borderColor: R.color.blue_1,
    borderWidth: 1,
  },
});

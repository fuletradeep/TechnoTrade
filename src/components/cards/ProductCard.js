import { TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import R from "@app/res/R";
import FastImage from "react-native-fast-image";
import Text from "@app/components/common/Text";
import { HStack, VStack } from "@gluestack-ui/themed";
import { addToCart } from "@app/store/home/homeSlice";

const ProductCard = ({ item, onProductCardPress, onAddToCartPress }) => {
  const onPlusIconPress = () => {
    onAddToCartPress(item);
  };

  return (
    <TouchableOpacity
      style={styles.mainTouchable}
      onPress={() => onProductCardPress(item?.id)}
    >
      <VStack>
        <TouchableOpacity>
          <R.svg.like />
        </TouchableOpacity>
        {item?.images ? (
          <FastImage
            source={{
              uri: item?.images[0],
              priority: FastImage.priority.high,
              cache: FastImage.cacheControl.immutable,
            }}
            resizeMode="cover"
            style={styles.productImg}
          />
        ) : (
          <R.svg.dummy_img
            alignSelf={"center"}
            width={R.unit.scale(100)}
            height={R.unit.verticalScale(100)}
          />
        )}

        <HStack
          justifyContent="space-between"
          alignItems="center"
          mt={R.unit.verticalScale(12)}
        >
          <VStack>
            <Text
              numberOfLines={1}
              color={R.color.black}
              variant="title3"
              font="medium"
            >
              {`$ ${item.price}`}
            </Text>
            <Text
              numberOfLines={1}
              color={R.color.cardTitle}
              variant="content"
              font="medium"
              width={item?.isAddedToCart ?  R.unit.scale(90) : R.unit.scale(120)}
            >
              {item?.title}
            </Text>
          </VStack>
          <TouchableOpacity
            onPress={onPlusIconPress}
            style={item?.isAddedToCart ? {
              padding: 5,
              backgroundColor: R.color.blue_1,
              borderRadius: 18,
              paddingHorizontal:10
            } : {}}
          >
            {item?.isAddedToCart ? (
              <Text
                numberOfLines={1}
                color={R.color.white}
                variant="content"
                font="medium"
              >
                ADDED
              </Text>
            ) : (
              <R.svg.add />
            )}
          </TouchableOpacity>
        </HStack>
      </VStack>
    </TouchableOpacity>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  mainTouchable: {
    padding: R.unit.scale(13),
    backgroundColor: R.color.black + 30,
    flex: 1 / 2.05,
    borderRadius: R.unit.scale(12),
    marginBottom: R.unit.verticalScale(22),
  },
  productImg: {
    width: R.unit.scale(100),
    height: R.unit.verticalScale(100),
    alignSelf: "center",
  },
});

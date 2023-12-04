import { TouchableOpacity, View, StyleSheet, FlatList } from "react-native";
import React from "react";
import { HStack, VStack } from "@gluestack-ui/themed";
import Text from "@app/components/common/Text";
import R from "@app/res/R";
import FastImage from "react-native-fast-image";

const cartProduct = [
  {
    id: 8,
    title: "Microsoft Surface Laptop 4",
    description:
      "Style and speed. Stand out on HD video calls backed by Studio Mics. Capture ideas on the vibrant touchscreen.",
    price: 1499,
    discountPercentage: 10.23,
    rating: 4.43,
    stock: 68,
    brand: "Microsoft Surface",
    category: "laptops",
    thumbnail: "https://i.dummyjson.com/data/products/8/thumbnail.jpg",
    images: [
      "https://i.dummyjson.com/data/products/8/1.jpg",
      "https://i.dummyjson.com/data/products/8/2.jpg",
      "https://i.dummyjson.com/data/products/8/3.jpg",
      "https://i.dummyjson.com/data/products/8/4.jpg",
      "https://i.dummyjson.com/data/products/8/thumbnail.jpg",
    ],
  },
  {
    id: 9,
    title: "Infinix INBOOK",
    description:
      "Infinix Inbook X1 Ci3 10th 8GB 256GB 14 Win10 Grey – 1 Year Warranty",
    price: 1099,
    discountPercentage: 11.83,
    rating: 4.54,
    stock: 96,
    brand: "Infinix",
    category: "laptops",
    thumbnail: "https://i.dummyjson.com/data/products/9/thumbnail.jpg",
    images: [
      "https://i.dummyjson.com/data/products/9/1.jpg",
      "https://i.dummyjson.com/data/products/9/2.png",
      "https://i.dummyjson.com/data/products/9/3.png",
      "https://i.dummyjson.com/data/products/9/4.jpg",
      "https://i.dummyjson.com/data/products/9/thumbnail.jpg",
    ],
  },
  {
    id: 10,
    title: "HP Pavilion 15-DK1056WM",
    description:
      "HP Pavilion 15-DK1056WM Gaming Laptop 10th Gen Core i5, 8GB, 256GB SSD, GTX 1650 4GB, Windows 10",
    price: 1099,
    discountPercentage: 6.18,
    rating: 4.43,
    stock: 89,
    brand: "HP Pavilion",
    category: "laptops",
    thumbnail: "https://i.dummyjson.com/data/products/10/thumbnail.jpeg",
    images: [
      "https://i.dummyjson.com/data/products/10/1.jpg",
      "https://i.dummyjson.com/data/products/10/2.jpg",
      "https://i.dummyjson.com/data/products/10/3.jpg",
      "https://i.dummyjson.com/data/products/10/thumbnail.jpeg",
    ],
  },
  {
    id: 11,
    title: "perfume Oil",
    description:
      "Mega Discount, Impression of Acqua Di Gio by GiorgioArmani concentrated attar perfume Oil",
    price: 13,
    discountPercentage: 8.4,
    rating: 4.26,
    stock: 65,
    brand: "Impression of Acqua Di Gio",
    category: "fragrances",
    thumbnail: "https://i.dummyjson.com/data/products/11/thumbnail.jpg",
    images: [
      "https://i.dummyjson.com/data/products/11/1.jpg",
      "https://i.dummyjson.com/data/products/11/2.jpg",
      "https://i.dummyjson.com/data/products/11/3.jpg",
      "https://i.dummyjson.com/data/products/11/thumbnail.jpg",
    ],
  },
  {
    id: 12,
    title: "Brown Perfume",
    description: "Royal_Mirage Sport Brown Perfume for Men & Women - 120ml",
    price: 40,
    discountPercentage: 15.66,
    rating: 4,
    stock: 52,
    brand: "Royal_Mirage",
    category: "fragrances",
    thumbnail: "https://i.dummyjson.com/data/products/12/thumbnail.jpg",
    images: [
      "https://i.dummyjson.com/data/products/12/1.jpg",
      "https://i.dummyjson.com/data/products/12/2.jpg",
      "https://i.dummyjson.com/data/products/12/3.png",
      "https://i.dummyjson.com/data/products/12/4.jpg",
      "https://i.dummyjson.com/data/products/12/thumbnail.jpg",
    ],
  },
  {
    id: 13,
    title: "Fog Scent Xpressio Perfume",
    description:
      "Product details of Best Fog Scent Xpressio Perfume 100ml For Men cool long lasting perfumes for Men",
    price: 13,
    discountPercentage: 8.14,
    rating: 4.59,
    stock: 61,
    brand: "Fog Scent Xpressio",
    category: "fragrances",
    thumbnail: "https://i.dummyjson.com/data/products/13/thumbnail.webp",
    images: [
      "https://i.dummyjson.com/data/products/13/1.jpg",
      "https://i.dummyjson.com/data/products/13/2.png",
      "https://i.dummyjson.com/data/products/13/3.jpg",
      "https://i.dummyjson.com/data/products/13/4.jpg",
      "https://i.dummyjson.com/data/products/13/thumbnail.webp",
    ],
  },
  {
    id: 14,
    title: "Non-Alcoholic Concentrated Perfume Oil",
    description:
      "Original Al Munakh® by Mahal Al Musk | Our Impression of Climate | 6ml Non-Alcoholic Concentrated Perfume Oil",
    price: 120,
    discountPercentage: 15.6,
    rating: 4.21,
    stock: 114,
    brand: "Al Munakh",
    category: "fragrances",
    thumbnail: "https://i.dummyjson.com/data/products/14/thumbnail.jpg",
    images: [
      "https://i.dummyjson.com/data/products/14/1.jpg",
      "https://i.dummyjson.com/data/products/14/2.jpg",
      "https://i.dummyjson.com/data/products/14/3.jpg",
      "https://i.dummyjson.com/data/products/14/thumbnail.jpg",
    ],
  },
  {
    id: 15,
    title: "Eau De Perfume Spray",
    description:
      "Genuine  Al-Rehab spray perfume from UAE/Saudi Arabia/Yemen High Quality",
    price: 30,
    discountPercentage: 10.99,
    rating: 4.7,
    stock: 105,
    brand: "Lord - Al-Rehab",
    category: "fragrances",
    thumbnail: "https://i.dummyjson.com/data/products/15/thumbnail.jpg",
    images: [
      "https://i.dummyjson.com/data/products/15/1.jpg",
      "https://i.dummyjson.com/data/products/15/2.jpg",
      "https://i.dummyjson.com/data/products/15/3.jpg",
      "https://i.dummyjson.com/data/products/15/4.jpg",
      "https://i.dummyjson.com/data/products/15/thumbnail.jpg",
    ],
  },
  {
    id: 16,
    title: "Hyaluronic Acid Serum",
    description:
      "L'OrÃ©al Paris introduces Hyaluron Expert Replumping Serum formulated with 1.5% Hyaluronic Acid",
    price: 19,
    discountPercentage: 13.31,
    rating: 4.83,
    stock: 110,
    brand: "L'Oreal Paris",
    category: "skincare",
    thumbnail: "https://i.dummyjson.com/data/products/16/thumbnail.jpg",
    images: [
      "https://i.dummyjson.com/data/products/16/1.png",
      "https://i.dummyjson.com/data/products/16/2.webp",
      "https://i.dummyjson.com/data/products/16/3.jpg",
      "https://i.dummyjson.com/data/products/16/4.jpg",
      "https://i.dummyjson.com/data/products/16/thumbnail.jpg",
    ],
  },
  {
    id: 17,
    title: "Tree Oil 30ml",
    description:
      "Tea tree oil contains a number of compounds, including terpinen-4-ol, that have been shown to kill certain bacteria,",
    price: 12,
    discountPercentage: 4.09,
    rating: 4.52,
    stock: 78,
    brand: "Hemani Tea",
    category: "skincare",
    thumbnail: "https://i.dummyjson.com/data/products/17/thumbnail.jpg",
    images: [
      "https://i.dummyjson.com/data/products/17/1.jpg",
      "https://i.dummyjson.com/data/products/17/2.jpg",
      "https://i.dummyjson.com/data/products/17/3.jpg",
      "https://i.dummyjson.com/data/products/17/thumbnail.jpg",
    ],
  },
];

const CartView = () => {
  const renderCartItem = ({ item }) => {
    console.log(item);
    return (
      <VStack>
        <HStack alignItems="center" mt={R.unit.verticalScale(12)}>
          {item?.thumbnail ? (
            <FastImage
              source={{
                uri: item?.thumbnail,
                priority: FastImage.priority.high,
                cache: FastImage.cacheControl.immutable,
              }}
              resizeMode="cover"
              style={styles.productImg}
            />
          ) : (
            <R.svg.dummy_img
              alignSelf={"center"}
              width={R.unit.scale(30)}
              height={R.unit.verticalScale(30)}
            />
          )}
          <VStack width={R.unit.scale(200)} ml={R.unit.scale(26)}>
            <Text
              numberOfLines={1}
              color={R.color.black1}
              variant="title3"
              font="regular"
            >
              {item?.title}
            </Text>
            <Text
              numberOfLines={1}
              color={R.color.black1}
              variant="title3"
              font="bold"
            >
              {item?.price}
            </Text>
          </VStack>

          <HStack alignItems="center">
            <R.svg.add_to_cart />
            <Text
              numberOfLines={1}
              color={R.color.black1}
              variant="title3"
              font="regular"
            >
              1
            </Text>
            <R.svg.remove_to_cart />
          </HStack>
        </HStack>
        <View
          style={{
            width: "100%",
            height: R.unit.verticalScale(2),
            backgroundColor: R.color.grayFont,
            marginTop: R.unit.scale(16),
          }}
        />
      </VStack>
    );
  };
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: R.color.white,
        paddingHorizontal: R.unit.scale(20),
        paddingVertical: R.unit.verticalScale(52),
      }}
    >
      <VStack>
        <HStack alignItems="center">
          <TouchableOpacity style={{ marginRight: R.unit.scale(20) }}>
            <R.svg.back />
          </TouchableOpacity>
          <Text
            numberOfLines={1}
            color={R.color.black1}
            variant="title3"
            font="regular"
          >
            Shopping Cart (5)
          </Text>
        </HStack>
      </VStack>

      <FlatList
        data={cartProduct}
        renderItem={renderCartItem}
        keyExtractor={(item, index) => "key" + index}
        style={{
          marginTop: R.unit.verticalScale(35),
          paddingBottom: R.unit.verticalScale(30),
        }}
        showsVerticalScrollIndicator={false}
      />

      <VStack
        backgroundColor={R.color.grayFont}
        paddingVertical={16}
        position="absolute"
        bottom={0}
        width={"100%"}
        paddingHorizontal={R.unit.scale(36)}
        alignSelf="center"
        borderTopLeftRadius={R.unit.scale(20)}
        borderTopRightRadius={R.unit.scale(20)}
      >
        <HStack justifyContent="space-between">
          <Text
            numberOfLines={1}
            color={R.color.cardTitle}
            variant="title3"
            font="regular"
          >
            SubTotal
          </Text>
          <Text
            numberOfLines={1}
            color={R.color.black1}
            variant="title3"
            font="bold"
          >
            12
          </Text>
        </HStack>

        <HStack justifyContent="space-between">
          <Text
            numberOfLines={1}
            color={R.color.cardTitle}
            variant="title3"
            font="regular"
          >
            Delivery
          </Text>
          <Text
            numberOfLines={1}
            color={R.color.black1}
            variant="title3"
            font="bold"
          >
            2
          </Text>
        </HStack>

        <HStack justifyContent="space-between">
          <Text
            numberOfLines={1}
            color={R.color.cardTitle}
            variant="title3"
            font="regular"
          >
            Total
          </Text>
          <Text
            numberOfLines={1}
            color={R.color.black1}
            variant="title3"
            font="bold"
          >
            14
          </Text>
        </HStack>

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
            Proceed To checkout
          </Text>
        </TouchableOpacity>
      </VStack>
    </View>
  );
};

export default CartView;

const styles = StyleSheet.create({
  btnStyle: {
    borderRadius: 1,
    borderRadius: R.unit.scale(20),
    borderColor: R.color.blue_1,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: R.unit.verticalScale(52),
    paddingVertical: R.unit.verticalScale(19),
  },
  productImg: {
    width: R.unit.scale(30),
    height: R.unit.scale(30),
    borderRadius: R.unit.scale(5),
  },
});

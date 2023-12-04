import { FlatList, View, ScrollView } from "react-native";
import React from "react";
import { HStack, VStack } from "@gluestack-ui/themed";
import R from "@app/res/R";
import Text from "@app/components/common/Text";
import { HighestSellingList } from "@app/util/dummyData";
import CardheighestSell from "@app/components/cards/CardheighestSell";
import { useFoodInsightModel } from "./CategoryModel";
import { BarChart } from "react-native-chart-kit";

var ChartData = {
  labels: ["12 Jan", "13 Jan", "14 Jan", "15 Jan", "16 Jan", "17 Jan"],
  datasets: [
    {
      data: [20, 45, 28, 80, 99, 43],
    },
  ],
};

var chartConfig = {
  backgroundGradientFrom: R.color.black2,
  backgroundGradientTo: R.color.black2,
  decimalPlaces: 2, // optional, defaults to 2dp
  color: () => `rgba(1, 227, 1, 1)`,
  labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
  propsForBackgroundLines: {
    strokeWidth: 1,
    stroke: R.color.gray4 + 70,
  },
  useShadowColorFromDataset: false,
  propsForLabels: {
    fontSize: R.unit.scale(30),
  },
};

const FoodInsightView = () => {
  const renderHeighestSellList = ({ item }) => {
    return <CardheighestSell item={item} />;
  };
  return (
    <View
    style={{
      flex: 1,
      paddingHorizontal: R.unit.scale(35),
      paddingVertical:R.unit.verticalScale(70),
      backgroundColor: R.color.black2,
    }}
    showsVerticalScrollIndicator={false}
    contentContainerStyle={{ paddingBottom: R.unit.verticalScale(70) }}
  >
    <HStack justifyContent={"space-between"}>
      <VStack
        backgroundColor={R.color.header}
        borderRadius={R.unit.scale(35)}
        // p={R.unit.scale(10)}
        justifyContent={"center"}
        alignItems={"flex-start"}
        flex={1 / 4.3}
        pl={R.unit.scale(65)}
        pt={R.unit.verticalScale(40)}
        pb={R.unit.verticalScale(40)}
      >
        <Text
          numberOfLines={2}
          color={R.color.fontDisable}
          variant="h1"
          style={{ width: R.unit.scale(400) }}
        >
          {"Total Order"}
        </Text>
        <Text
          numberOfLines={2}
          color={R.color.white}
          variant="h3"
          style={{ width: R.unit.scale(400) }}
        >
          {"128"}
        </Text>
      </VStack>

      <VStack
        backgroundColor={R.color.header}
        borderRadius={R.unit.scale(35)}
        // p={R.unit.scale(10)}
        justifyContent={"center"}
        alignItems={"flex-start"}
        pl={R.unit.scale(65)}
        flex={1 / 4.3}
        pt={R.unit.verticalScale(40)}
        pb={R.unit.verticalScale(40)}
      >
        <Text
          numberOfLines={2}
          color={R.color.fontDisable}
          variant="h1"
          style={{ width: R.unit.scale(400) }}
        >
          {"Total Items"}
        </Text>
        <Text
          numberOfLines={2}
          color={R.color.white}
          variant="h3"
          style={{ width: R.unit.scale(400) }}
        >
          {"698"}
        </Text>
      </VStack>

      <VStack
        backgroundColor={R.color.header}
        borderRadius={R.unit.scale(35)}
        // p={R.unit.scale(10)}
        justifyContent={"center"}
        alignItems={"flex-start"}
        pl={R.unit.scale(65)}
        flex={1 / 4.3}
        pt={R.unit.verticalScale(40)}
        pb={R.unit.verticalScale(40)}
      >
        <Text
          numberOfLines={2}
          color={R.color.fontDisable}
          variant="h1"
          style={{ width: R.unit.scale(400) }}
        >
          {"Total Cooked"}
        </Text>
        <Text
          numberOfLines={2}
          color={R.color.white}
          variant="h3"
          style={{ width: R.unit.scale(400) }}
        >
          {"7:15"}
        </Text>
      </VStack>

      <VStack
        backgroundColor={R.color.header}
        borderRadius={R.unit.scale(35)}
        // p={R.unit.scale(10)}
        justifyContent={"center"}
        alignItems={"flex-start"}
        flex={1 / 4.3}
        pl={R.unit.scale(65)}
        pt={R.unit.verticalScale(40)}
        pb={R.unit.verticalScale(40)}
      >
        <Text
          numberOfLines={2}
          color={R.color.fontDisable}
          variant="h1"
          style={{ width: R.unit.scale(400) }}
        >
          {"Total Order"}
        </Text>
        <Text
          numberOfLines={2}
          color={R.color.white}
          variant="h3"
          style={{ width: R.unit.scale(400) }}
        >
          {"128"}
        </Text>
      </VStack>
    </HStack>

    <Text
      gutterTop={R.unit.verticalScale(120)}
      color={R.color.white}
      variant="h1"
    >
      {"Highest Selling Item"}
    </Text>

    <FlatList
      data={HighestSellingList}
      renderItem={renderHeighestSellList}
      keyExtractor={(item, index) => index.toString()}
      horizontal
      contentContainerStyle={{ marginTop: R.unit.verticalScale(50) }}
      showsHorizontalScrollIndicator={false}  
    />

    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={{ marginTop: R.unit.verticalScale(60) }}
    >
      <BarChart
        style={{  fontSize: 30 }}
        data={ChartData}
        width={
          ChartData.labels.length < 4
            ? R.unit.scale(600)
            : R.unit.scale(450 * ChartData.labels.length)
        }
        height={R.unit.scale(650)}
        // yAxisLabel="$"
        withInnerLines
        chartConfig={chartConfig}
        showBarTops={true}
        showValuesOnTopOfBars={true}
      />
    </ScrollView>
  </View>
  );
};

export default FoodInsightView;

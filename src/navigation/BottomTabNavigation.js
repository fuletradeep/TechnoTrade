import { View, StyleSheet, TouchableOpacity, Animated } from "react-native";
import React, { useEffect, useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import R from "@app/res/R";
import constant from "@app/constants/constant";
import Text from "@app/components/common/Text";
import { TAB_BAR } from "@app/util/dummyData";

const Tab = createBottomTabNavigator();

const MARGIN = R.unit.scale(16);
const TAB_BAR_WIDTH = R.unit.containerWidth;
const TAB_WIDTH = TAB_BAR_WIDTH / TAB_BAR.length;

function MyTabBar({ state, descriptors, navigation }) {
  const [translateX] = useState(new Animated.Value(0));

  const translateTab = (index) => {
    Animated.spring(translateX, {
      toValue: index * TAB_WIDTH,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    translateTab(state.index);
  }, [state.index]);

  return (
    <View style={styles.tabBarContainer}>
      <View style={styles.slidingTabContainer}>
        <Animated.View
          style={[styles.slidingTab, { transform: [{ translateX }] }]}
        />
      </View>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;
        const tabBarIcon = options.tabBarIcon;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{ flex: 1, alignItems: "center" }}
          >
            <TabIcon
              tabIcon={
                isFocused ? tabBarIcon.active_icon : tabBarIcon.inactive_icon
              }
              isFocused={isFocused}
              label={label}
              index={state.index}
            />
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const TabIcon = ({ isFocused, label, index, tabIcon }) => {
  const [translateY] = useState(new Animated.Value(0));

  const translateIcon = (val) => {
    Animated.spring(translateY, {
      toValue: val,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    if (isFocused) {
      translateIcon(-R.unit.scale(18));
    } else {
      translateIcon(0);
    }
  }, [index]);
  return (
    <>
      <Animated.View style={{ transform: [{ translateY }] }}>
        {tabIcon}
      </Animated.View>
      {!isFocused && (
        <Text
          numberOfLines={1}
          color={R.color.placeholderText}
          variant="content"
          font="medium"
        >
          {label}
        </Text>
      )}
    </>
  );
};

const BottomTabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false }}
      tabBar={(props) => <MyTabBar {...props} />}
    >
      {TAB_BAR.map((_, index) => {
        return (
          <Tab.Screen
            key={index}
            name={_.route}
            component={_.Screen}
            icon={_.icon}
            options={{
              tabBarIcon: _.icon,
            }}
          />
        );
      })}
    </Tab.Navigator>
  );
};

export default BottomTabNavigation;

const styles = StyleSheet.create({
  tabBarContainer: {
    flexDirection: "row",
    width: TAB_BAR_WIDTH,
    height: R.unit.scale(60),
    position: "absolute",
    bottom: 0,
    backgroundColor: R.color.white,
    borderRadius: R.unit.scale(10),
    alignItems: "center",
    justifyContent: "space-around",
  },
  slidingTabContainer: {
    width: TAB_WIDTH,
    ...StyleSheet.absoluteFillObject,
    backgroundColor: R.color.blur,
    alignItems: "center",
  },
  slidingTab: {
    width: R.unit.scale(60),
    height: R.unit.scale(60),
    borderRadius: R.unit.scale(30),
    backgroundColor: R.color.black,
    bottom: R.unit.scale(20),
    borderWidth: R.unit.scale(6),
    borderColor: '#C4C4C460',
    zIndex:1000
  },
});

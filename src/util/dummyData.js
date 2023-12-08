import R from "@app/res/R";
import CategoryControler from "@app/screens/category/CategoryControler";
import HomeController from "@app/screens/home/HomeController";

export const TAB_BAR = [
  {
    route: "Home",
    label: "Home",
    Screen: HomeController,
    icon: {
      active_icon: <R.svg.home />,
      inactive_icon: <R.svg.home_inactive />,
    },
  },
  {
    route: "Category",
    label: "Category",
    Screen: CategoryControler,
    icon: {
      active_icon: <R.svg.category_active />,
      inactive_icon: <R.svg.category_inactive />,
    },
  },
  {
    route: "Favorite",
    label: "Favorite",
    Screen: CategoryControler,
    icon: {
      active_icon: <R.svg.favourite_active />,
      inactive_icon: <R.svg.favourite_inactive />,
    },
  },
  {
    route: "More",
    label: "More",
    Screen: CategoryControler,
    icon: {
      active_icon: <R.svg.more_active />,
      inactive_icon: <R.svg.more_inactive />,
    },
  },
];

export const FUEL_DESPENSING_TYPE = [
  {
    type:'Amount',
    value:'Amount'
  },
  {
    type:'Volume',
    value:'Volume'
  },
  {
    type:'Full Tank',
    value:'FullTank'
  }
]



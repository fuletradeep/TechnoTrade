import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import apiClient, { axiosMD } from "@app/package/axios/axios";
import apiUrls from "@app/constants/apiUrls";
import axios from "axios";

export const getRecommendProductList = createAsyncThunk(
  "home/getRecommendProductList",
  
);

const initialState = {
  isLoadingRequest: false,
  requestLoader: "",
  recommendProductList: undefined,
  status: "idle",
  error: undefined,
  paginate: {
    page: 0,
    take: 10,
  },
  total: 0,
  isListEnd: false,
  searchText: null,
  cartItem: [],
};

const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {
    clearError(state) {
      state.error = undefined;
    },
    reset(state) {
      state.isLoadingRequest = false;
      state.requestLoader = "";
      state.recommendProductList = undefined;
      state.status = "idle";
      state.error = undefined;
    },
    resetHomeList(state) {
      state.isLoadingRequest = false;
      state.requestLoader = "";
      state.recommendProductList = undefined;
      state.status = "idle";
      state.error = undefined;
      state.paginate.page = 0;
      state.total = 0;
      state.isListEnd = false;
      state.searchText = null;
    },
    setPagination(state, action) {
      state.paginate.page = action.payload;
    },
    setSearchText(state, action) {
      state.searchText = action.payload;
    },
    addToCart(state, action) {
      console.log("ACCCCCCC===", action.payload);
      const isAlreadySelected = state.cartItem.some(
        (selectedItem) => selectedItem.id === action.payload.id
      );

      // If not selected, add it to the array and update isAddedToCart to true
      if (!isAlreadySelected) {
        const updatedItem = { ...action.payload, isAddedToCart: true };
        state.cartItem = [...state.cartItem, updatedItem];
        console.log('CART____',state.cartItem)
      }

      const updatedData = state.recommendProductList.map((dataItem) =>
        dataItem.id === action.payload.id
          ? { ...dataItem, isAddedToCart: true }
          : dataItem
      );
      console.log("ooooooo8888888", updatedData);
      state.recommendProductList = updatedData;
    },
    default: initialState,
  },
  extraReducers: (builder) => {
    builder.addCase(getRecommendProductList.pending, (state) => {
      state.status = "loading";
      state.isLoadingRequest = true;
      state.requestLoader = "getRecommendProductList";
      state.error = undefined;
    });
    builder.addCase(getRecommendProductList.fulfilled, (state, action) => {
      // console.log("=====>>>", action.payload);
      if (action.payload.isError === 0) {
        state.status = "succeeded";
        state.isLoadingRequest = false;
        state.requestLoader = "getRecommendProductList";
        state.error = undefined;
        state.total = action.payload.response.total;
        if (
          action.payload.response.products == null ||
          action.payload.response.products?.length == 0
        ) {
          state.isListEnd = true;
        } else {
          // const recommendProductList = state.recommendProductList || [];
          // state.recommendProductList = [
          //   ...recommendProductList,
          //   ...action.payload.response.products,
          // ];
          state.recommendProductList = action.payload.response.products.map(
            (product) => ({ ...product, isAddedToCart: false })
          );
          state.isListEnd = false;
        }
      } else {
        state.status = "failed";
        state.isLoadingRequest = false;
        state.requestLoader = "getRecommendProductList";
        state.error = action.payload?.message;
        state.isListEnd = false;
      }
    });
    builder.addCase(getRecommendProductList.rejected, (state, action) => {
      state.status = "failed";
      state.isLoadingRequest = false;
      state.requestLoader = "getRecommendProductList";
      const { error } = action;
      state.error = error;
      state.isListEnd = false;
    });
  },
});

export const {
  clearError,
  reset,
  updateHomeList,
  resetHomeList,
  resetHomeUserList,
  resetHomeUserItemList,
  setPagination,
  setSearchText,
  addToCart,
} = homeSlice.actions;

export default homeSlice.reducer;

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import apiClient, { axiosMD } from "@app/package/axios/axios";
import apiUrls from "@app/constants/apiUrls";
import { updateCart } from "../home/homeSlice";

export const addCartItems = createAsyncThunk(
  "cart/addCartItems",
  async (product) => {
    try {
      return { isError: 0, response: product };
    } catch (err) {
      return {
        isError: 1,
        message: "Please try again" + `\n${err.toString()}`,
      };
    }
  }
);

export const removeCartItems = createAsyncThunk(
    "cart/removeCartItems",
    async (product) => {
      try {
        return { isError: 0, response: product };
      } catch (err) {
        return {
          isError: 1,
          message: "Please try again" + `\n${err.toString()}`,
        };
      }
    }
  );

const initialState = {
  isLoadingRequest: false,
  requestLoader: "",
  cartItem: [],
  status: "idle",
  error: undefined,
  paginate: {
    page: 0,
    take: 10,
  },
  total: 0,
  isListEnd: false,
  searchText: null,
};

const cartItemsSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clearError(state) {
      state.error = undefined;
    },
    reset(state) {
      state.isLoadingRequest = false;
      state.requestLoader = "";
      state.cartItem = undefined;
      state.status = "idle";
      state.error = undefined;
    },
    resetHomeList(state) {
      state.isLoadingRequest = false;
      state.requestLoader = "";
      state.cartItem = undefined;
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
      const isAlreadySelected = state.cartItem.some(
        (selectedItem) => selectedItem.id === action.payload.id
      );

      // If not selected, add it to the array and update isAddedToCart to true
      if (!isAlreadySelected) {
        const updatedItem = { ...action.payload, isAddedToCart: true };
        state.cartItem = [...state.cartItem, updatedItem];
      }
      updateCart(action.payload)
    },
    default: initialState,
  },
});

export const { clearError, reset, setPagination, setSearchText } =
  cartItemsSlice.actions;

export default cartItemsSlice.reducer;

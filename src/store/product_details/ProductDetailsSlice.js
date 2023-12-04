import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import apiClient, { axiosMD } from "@app/package/axios/axios";
import apiUrls from "@app/constants/apiUrls";

export const getProductDetails = createAsyncThunk(
  "product/getProductDetails",
  async (id) => {
    try {
      const response = await apiClient.get(apiUrls.PRODUCT_DETAILS(id));
      console.log("111---111", id, response);
      return { isError: 0, response: response };
    } catch (err) {
      console.log(" product/getProductDetails error ", err);
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
  productDetails: undefined,
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

const productDetailsSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    clearError(state) {
      state.error = undefined;
    },
    reset(state) {
      state.isLoadingRequest = false;
      state.requestLoader = "";
      state.productDetails = undefined;
      state.status = "idle";
      state.error = undefined;
    },
    resetHomeList(state) {
      state.isLoadingRequest = false;
      state.requestLoader = "";
      state.productDetails = undefined;
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
    default: initialState,
  },
  extraReducers: (builder) => {
    builder.addCase(getProductDetails.pending, (state) => {
      state.status = "loading";
      state.isLoadingRequest = true;
      state.requestLoader = "getProductDetails";
      state.error = undefined;
    });
    builder.addCase(getProductDetails.fulfilled, (state, action) => {
      // console.log("=====>>>", action.payload);
      if (action.payload.isError === 0) {
        state.status = "succeeded";
        state.isLoadingRequest = false;
        state.requestLoader = "getProductDetails";
        state.error = undefined;
        state.total = action.payload.response.total;
        const productDetails = state.productDetails || [];
        state.productDetails = action.payload.response;
        state.isListEnd = false;
      } else {
        state.status = "failed";
        state.isLoadingRequest = false;
        state.requestLoader = "getProductDetails";
        state.error = action.payload?.message;
        state.isListEnd = false;
      }
    });
    builder.addCase(getProductDetails.rejected, (state, action) => {
      state.status = "failed";
      state.isLoadingRequest = false;
      state.requestLoader = "getProductDetails";
      const { error } = action;
      state.error = error;
      state.isListEnd = false;
    });
  },
});

export const { clearError, reset, setPagination, setSearchText } =
  productDetailsSlice.actions;

export default productDetailsSlice.reducer;

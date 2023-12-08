import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import apiClient, { axiosMD } from "@app/package/axios/axios";
import apiUrls from "@app/constants/apiUrls";
import axios from "axios";

export const getFuelDispensingDetails = createAsyncThunk(
  "fuel_dispensing/getFuelDispensingDetails",
  async (item,orderId) => {
    let data = JSON.stringify({
      Protocol: "jsonPTS",
      Packets: [
        {
          Id: item,
          Type: "PumpGetStatus",
          Data: {
            Pump: item,
          },
        },
      ],
    });
    try {
      const response = await axios.post(
        "https://192.168.1.9:443/jsonPTS/",
        data,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Basic RGVlcDpkZWVw",
          },
        }
      );
      return { isError: 0, response: response.data, orderId: orderId };
    } catch (error) {
      if (error.response) {
        console.error("Response error:", error.response.data);
        console.error("Status code:", error.response.status);
        return {
          isError: 1,
          message: "Please try again" + `\n${error.response.data}`,
        };
      } else if (error.request) {
        console.error(
          "No response received. Is the server down?",
          error.request
        );
        return {
          isError: 1,
          message: "Please try again" + `\n${error.request}`,
        };
      } else {
        console.error("Request error:", error.message);
        return {
          isError: 1,
          message: "Please try again" + `\n${error.message}`,
        };
      }
    }
  }
);

const initialState = {
  isLoadingRequest: false,
  requestLoader: "",
  fuelDetails: undefined,
  nozelDetails: [],
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
  name: "fuel_dispensing",
  initialState,
  reducers: {
    clearError(state) {
      state.error = undefined;
    },
    reset(state) {
      state.isLoadingRequest = false;
      state.requestLoader = "";
      state.fuelDetails = undefined;
      state.status = "idle";
      state.error = undefined;
    },
    default: initialState,
  },
  extraReducers: (builder) => {
    builder.addCase(getFuelDispensingDetails.pending, (state) => {
      state.status = "loading";
      state.isLoadingRequest = true;
      state.requestLoader = "getFuelDispensingDetails";
      state.error = undefined;
    });
    builder.addCase(getFuelDispensingDetails.fulfilled, (state, action) => {
      
      if (action.payload.isError === 0) {
        state.status = "succeeded";
        state.isLoadingRequest = false;
        state.requestLoader = "getFuelDispensingDetails";
        state.error = undefined;
        state.fuelDetails = action.payload.response.Packets[0]?.Data;
        state.fuelDetails = {
          ...state.fuelDetails,
          orderId: action.payload.orderId,
        };
        state.isListEnd = false;
      } else {
        state.status = "failed";
        state.isLoadingRequest = false;
        state.requestLoader = "getFuelDispensingDetails";
        state.error = action.payload?.message;
        state.isListEnd = false;
      }
    });
    builder.addCase(getFuelDispensingDetails.rejected, (state, action) => {
      state.status = "failed";
      state.isLoadingRequest = false;
      state.requestLoader = "getFuelDispensingDetails";
      const { error } = action;
      state.error = error;
      state.isListEnd = false;
    });
  },
});

export const { clearError, reset, setPagination, setSearchText } =
  productDetailsSlice.actions;

export default productDetailsSlice.reducer;

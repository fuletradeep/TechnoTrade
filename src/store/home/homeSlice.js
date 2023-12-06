import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import apiClient, { axiosMD } from "@app/package/axios/axios";
import apiUrls from "@app/constants/apiUrls";
import axios from "axios";

export const getPumpList = createAsyncThunk("home/getPumpList", async (id) => {
  let data = JSON.stringify({
    Protocol: "jsonPTS",
    Packets: [
      {
        Id: 1,
        Type: "GetPumpsConfiguration",
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
    return { isError: 0, response: response.data };
  } catch (error) {
    if (error.response) {
      console.error("Response error:", error.response.data);
      console.error("Status code:", error.response.status);
      return {
        isError: 1,
        message: "Please try again" + `\n${error.response.data}`,
      };
    } else if (error.request) {
      console.error("No response received. Is the server down?", error.request);
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
});

const initialState = {
  isLoadingRequest: false,
  requestLoader: "",
  pumpList: [],
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
      state.pumpList = undefined;
      state.status = "idle";
      state.error = undefined;
    },
    resetHomeList(state) {
      state.isLoadingRequest = false;
      state.requestLoader = "";
      state.pumpList = undefined;
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
    builder.addCase(getPumpList.pending, (state) => {
      state.status = "loading";
      state.isLoadingRequest = true;
      state.requestLoader = "getPumpList";
      state.error = undefined;
    });
    builder.addCase(getPumpList.fulfilled, (state, action) => {
      if (action.payload.isError === 0) {
        state.status = "succeeded";
        state.isLoadingRequest = false;
        state.requestLoader = "getPumpList";
        state.error = undefined;
        state.total = action.payload.response.total;
        state.pumpList = action.payload.response.Packets[0]?.Data;
        state.isListEnd = false;
      } else {
        state.status = "failed";
        state.isLoadingRequest = false;
        state.requestLoader = "getPumpList";
        state.error = action.payload?.message;
        state.isListEnd = false;
        state.pumpList = [];
      }
    });
    builder.addCase(getPumpList.rejected, (state, action) => {
      state.status = "failed";
      state.isLoadingRequest = false;
      state.requestLoader = "getPumpList";
      const { error } = action;
      state.error = error;
      state.isListEnd = false;
      state.pumpList = [];
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
} = homeSlice.actions;

export default homeSlice.reducer;

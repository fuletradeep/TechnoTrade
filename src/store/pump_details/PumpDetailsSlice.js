import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import apiClient, { axiosMD } from "@app/package/axios/axios";
import apiUrls from "@app/constants/apiUrls";
import axios from "axios";

export const getSelectedPumpNozelDetails = createAsyncThunk(
  "pump/getSelectedPumpNozelDetails",
  async (item) => {
    let data = JSON.stringify({
      Protocol: "jsonPTS",
      Packets: [
        {
          Id: item?.Id,
          Type: "GetFuelGradesConfiguration",
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
      return { isError: 0, response: response.data, selectedPumpDetails: item };
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

export const getPumpStatus = createAsyncThunk(
  "pump/getPumpStatus",
  async (item) => {
    let data = JSON.stringify({
      Protocol: "jsonPTS",
      Packets: [
        {
          Id: 1,
          Type: "PumpGetStatus",
          Data: {
            Pump: item?.Id,
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
      // console.log( "[[[[[[[=>", response);
      // return { isError: 0, response: response.data };
      return response.data;
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
          "No response received. Is the server down?----------====",
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

export const pumpForceStop = createAsyncThunk(
  "pump/pumpForceStop",
  async (item) => {
    let data = JSON.stringify({
      Protocol: "jsonPTS",
      Packets: [
        {
          Id: 1,
          Type: "PumpStop",
          Data: {
            Pump: item?.Id,
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
      console.log(item, "stop Pump Response", response);
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

export const pumpEndOfTransaction = createAsyncThunk(
  "pump/pumpEndOfTransaction",
  async (item) => {
    console.log("00000", item);
    let data = JSON.stringify({
      Protocol: "jsonPTS",
      Packets: [
        {
          Id: 1,
          Type: "PumpCloseTransaction",
          Data: {
            Pump: item?.Pump,
            Transaction: item?.Transaction,
          },
        },
      ],
    });
    try {
      console.log("try");
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
      console.log("pump close transection--- ", response);
      return { isError: 0, response: response.data };
    } catch (error) {
      console.log("==================", error);
      if (error.response) {
        console.error("Response error:", error.response.data);
        console.error("Status code:", error.response.status);
        return {
          isError: 1,
          message: "Please try again" + `\n${error.response.data}`,
        };
      } else if (error.request) {
        console.error("pump close transection error ----------", error.request);
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
  pumpDetails: undefined,
  nozelDetails: [],
  pumpStatus: {},
  status: "idle",
  error: undefined,
  paginate: {
    page: 0,
    take: 10,
  },
  total: 0,
  isListEnd: false,
  searchText: null,
  pumpStatusError: undefined,
  pumpStatusLoadingRequest: false,
  pumpCurrentStatus: "",
};

const productDetailsSlice = createSlice({
  name: "pump",
  initialState,
  reducers: {
    clearError(state) {
      state.error = undefined;
    },
    reset(state) {
      state.isLoadingRequest = false;
      state.requestLoader = "";
      state.pumpDetails = undefined;
      state.status = "idle";
      state.error = undefined;
    },
    resetHomeList(state) {
      state.isLoadingRequest = false;
      state.requestLoader = "";
      state.pumpDetails = undefined;
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
    builder.addCase(getSelectedPumpNozelDetails.pending, (state) => {
      state.status = "loading";
      state.isLoadingRequest = true;
      state.requestLoader = "getSelectedPumpNozelDetails";
      state.error = undefined;
    });
    builder.addCase(getSelectedPumpNozelDetails.fulfilled, (state, action) => {
      if (action.payload.isError === 0) {
        state.status = "succeeded";
        state.isLoadingRequest = false;
        state.requestLoader = "getSelectedPumpNozelDetails";
        state.error = undefined;
        state.total = action.payload.response.total;
        state.pumpDetails = action.payload.selectedPumpDetails;
        state.nozelDetails =
          action.payload.response?.Packets[0]?.Data?.FuelGrades;
        state.isListEnd = false;
      } else {
        state.status = "failed";
        state.isLoadingRequest = false;
        state.requestLoader = "getSelectedPumpNozelDetails";
        state.error = action.payload?.message;
        state.isListEnd = false;
      }
    });
    builder.addCase(getSelectedPumpNozelDetails.rejected, (state, action) => {
      state.status = "failed";
      state.isLoadingRequest = false;
      state.requestLoader = "getSelectedPumpNozelDetails";
      const { error } = action;
      state.error = error;
      state.isListEnd = false;
    });

    builder.addCase(getPumpStatus.pending, (state) => {
      state.pumpStatusLoadingRequest = true;
      state.requestLoader = "getPumpStatus";
      state.pumpStatusError = undefined;
    });
    builder.addCase(getPumpStatus.fulfilled, (state, action) => {
      // console.log("=======>",action.payload);
      // console.log("=======>>",action.payload.Packets[0]?.Data);
      // if (action.payload.isError === 0) {
      state.pumpStatusLoadingRequest = false;
      state.requestLoader = "getPumpStatus";
      state.pumpStatusError = undefined;
      state.pumpStatus = action.payload.Packets[0]?.Data;
      state.pumpCurrentStatus = action.payload.Packets[0]?.Type;
      // } else {
      //   state.pumpStatusLoadingRequest = false;
      //   state.requestLoader = "getPumpStatus";
      //   state.pumpStatusError = action.payload?.message;
      //   state.pumpCurrentStatus = "";
      // }
    });
    builder.addCase(getPumpStatus.rejected, (state, action) => {
      state.isLoadingRequest = false;
      state.requestLoader = "getPumpStatus";
      const { error } = action;
      state.pumpStatusError = error;
      state.pumpCurrentStatus = "";
    });

    builder.addCase(pumpForceStop.pending, (state) => {
      state.pumpStatusLoadingRequest = true;
      state.requestLoader = "pumpForceStop";
      state.pumpStatusError = undefined;
    });
    builder.addCase(pumpForceStop.fulfilled, (state, action) => {
      if (action.payload.isError === 0) {
        state.pumpStatusLoadingRequest = false;
        state.requestLoader = "pumpForceStop";
        state.pumpStatusError = undefined;
        state.pumpStatus = {};
        state.pumpCurrentStatus = "";
        // state.pumpStatus = action.payload.response.Packets[0]?.Data;
      } else {
        state.pumpStatusLoadingRequest = false;
        state.requestLoader = "pumpForceStop";
        state.pumpStatusError = action.payload?.message;
        state.pumpStatus = {};
        state.pumpCurrentStatus = "";
      }
    });
    builder.addCase(pumpForceStop.rejected, (state, action) => {
      state.isLoadingRequest = false;
      state.requestLoader = "pumpForceStop";
      const { error } = action;
      state.pumpStatusError = error;
      state.pumpStatus = {};
      state.pumpCurrentStatus = "";
    });

    builder.addCase(pumpEndOfTransaction.pending, (state) => {
      state.pumpStatusLoadingRequest = true;
      state.requestLoader = "pumpEndOfTransaction";
      state.pumpStatusError = undefined;
    });
    builder.addCase(pumpEndOfTransaction.fulfilled, (state, action) => {
      if (action.payload.isError === 0) {
        state.pumpStatusLoadingRequest = false;
        state.requestLoader = "pumpEndOfTransaction";
        state.pumpStatusError = undefined;
        state.pumpStatus = {};
        state.pumpCurrentStatus = "";
        // state.pumpStatus = action.payload.response.Packets[0]?.Data;
      } else {
        state.pumpStatusLoadingRequest = false;
        state.requestLoader = "pumpEndOfTransaction";
        state.pumpStatusError = action.payload?.message;
      }
    });
    builder.addCase(pumpEndOfTransaction.rejected, (state, action) => {
      state.isLoadingRequest = false;
      state.requestLoader = "pumpEndOfTransaction";
      const { error } = action;
      state.pumpStatusError = error;
    });
  },
});

export const { clearError, reset, setPagination, setSearchText } =
  productDetailsSlice.actions;

export default productDetailsSlice.reducer;

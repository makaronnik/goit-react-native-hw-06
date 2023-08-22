import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { register, login, logout } from "./userThunks";
import { thunkStatuses, combineThunksActions } from "../../utils/thunksHelper";

const thunks = [register, login, logout];

const persistConfig = {
  key: "user",
  storage: AsyncStorage,
  whitelist: ["user"],
};

const initialState = {
  user: null,
  isLoading: false,
  error: null,
};

const handlePending = (state) => {
  state.isLoading = true;
  state.error = null;
};

const handleFulfilled = (state) => {
  state.isLoading = false;
  state.error = null;
};

const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const userSlice = createSlice({
  name: "user",
  initialState,

  reducers: {
    setUser: (state, { payload }) => {
      if (!state.user) {
        state.user = payload;
      }
    },
    clearUser: (state) => {
      if (state.user) {
        state.user = null;
      }
    },
  },

  extraReducers: (builder) => {
    const { PENDING, FULFILLED, REJECTED } = thunkStatuses;

    builder
      .addMatcher(
        isAnyOf(...combineThunksActions(PENDING, thunks)),
        handlePending
      )
      .addMatcher(
        isAnyOf(...combineThunksActions(FULFILLED, thunks)),
        handleFulfilled
      )
      .addMatcher(
        isAnyOf(...combineThunksActions(REJECTED, thunks)),
        handleRejected
      )

      .addDefaultCase((state) => state);
  },
});

export const { setUser, clearUser } = userSlice.actions;

export default persistReducer(persistConfig, userSlice.reducer);

import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  registerUser,
  loginUser,
  logoutUser,
  updateUserAvatar,
} from "../../firebase/authOperations";
import { uploadUserAvatar } from "../../firebase/firestoreOperations";

export const register = createAsyncThunk(
  "user/register",
  async (data, { rejectWithValue }) => {
    try {
      const user = await registerUser(data.email, data.password, data.login);

      if (user && data.avatarUri) {
        const avatarUrl = await uploadUserAvatar(user.uid, data.avatarUri);

        await updateUserAvatar(avatarUrl);
      }
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const login = createAsyncThunk(
  "user/login",
  async (data, { rejectWithValue }) => {
    try {
      await loginUser(data.email, data.password);
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const logout = createAsyncThunk(
  "user/logout",
  async (_, { rejectWithValue }) => {
    try {
      await logoutUser();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

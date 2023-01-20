import { createSlice } from "@reduxjs/toolkit";
import { login, signUp } from "../services/auth";
import jwt_decode from "jwt-decode";


const INITIAL_STATE = {
  user: localStorage.getItem("user") ? localStorage.getItem("user") : null,
  authtokens: localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null,
  isLoading: false,
  isRegisterd: false,
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState: INITIAL_STATE,
  reducers: {
    updateToken: (state, action) => {
      console.log("somethinggg");
    },
  },
  extraReducers: {

    [login.pending]: (state, { payload }) => {
      console.log('pendingggg')
      state.isLoading = true;
    },
    [login.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.user = jwt_decode(payload.access);
      state.isLoggedIn = true;
      state.authtokens = payload;
    },

    [login.rejected]: (state, { payload }) => {
      state.isLoading = false
    },

    [signUp.pending]: (state, { payload }) => {
      state.isLoading = true;
    },
    [signUp.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.isRegisterd = true;
    },

    [signUp.rejected]: (state, { payload }) => {
      state.isLoading = false
    },


  },
});

export const { updateToken } = authSlice.actions;
export default authSlice.reducer;

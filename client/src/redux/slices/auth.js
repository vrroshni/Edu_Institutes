import { createSlice } from "@reduxjs/toolkit";
import { login, signUp } from "../services/auth";
import jwt_decode from "jwt-decode";


const INITIAL_STATE = {
  user: window.localStorage.getItem("authTokens")
    ? jwt_decode(window.localStorage.getItem("authTokens"))
    : null,
  authtokens: window.localStorage.getItem("authTokens")
    ? JSON.parse(window.localStorage.getItem("authTokens"))
    : null,
  isLoading: false,
  isRegisterd: false,
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState: INITIAL_STATE,
  reducers: {
    updateToken: (state, { payload }) => {
      console.log('its happeningggg update')
      state.user = jwt_decode(payload.access)
      state.authtokens = payload;
    },
    logout: (state, { payload }) => {
      state.user = null
      state.authtokens = null;
      localStorage.removeItem("authTokens")
    },
  },
  extraReducers: {

    [login.pending]: (state, { payload }) => {
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

export const { updateToken,logout } = authSlice.actions;
export default authSlice.reducer;

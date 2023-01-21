import { createSlice } from "@reduxjs/toolkit";
import { profile } from "../services/profile";



const INITIAL_STATE = {
    profileinfo: null
};

const profileSlice = createSlice({
    name: "getprofile",
    initialState: INITIAL_STATE,
    reducers: {
        updateprofile: (state, action) => {
            state.profileinfo = action.payload
        },
    },
    extraReducers: {

        [profile.fulfilled]: (state, { payload }) => {
            console.log(payload,'pppppppppp')
            state.profileinfo = payload;
        },

    },
});

export const { updateprofile } = profileSlice.actions;
export default profileSlice.reducer;
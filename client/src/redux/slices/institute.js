import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";


const INITIAL_STATE = {
    institutes:[],
    instituteprofileinfo:null,
};


const instituteSlice = createSlice({
    name: "institute",
    initialState: INITIAL_STATE,
    reducers: {
        institutesList: (state, action) => {
        state.institutes=action.payload
      },
        instituteInfo: (state, action) => {
        state.instituteprofileinfo=action.payload
      },
        add_institute_info: (state, action) => {
        state.instituteprofileinfo=action.payload
        toast.success('Your details are Added!!');
      },
        edit_institute_info: (state, action) => {
          state.instituteprofileinfo=action.payload
        toast.success('Your details are Update!!');
      },
    },
  });
  
  export const { institutesList,instituteInfo,add_institute_info,edit_institute_info } = instituteSlice.actions;
  export default instituteSlice.reducer;
  
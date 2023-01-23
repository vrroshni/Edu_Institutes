import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import toast from "react-hot-toast";



export const profile = createAsyncThunk("getprofile/profile", async (credentials, { rejectWithValue }) => {
    try {
  
      const config = {
        headers: {
          'Content-type': 'application/json',
          Authorization: `Bearer ${credentials?.token}`
        }
      }
  
      const { data } = await axios.get('user/profile/', config
      )
      return data;
  
    } catch (err) {
      const error = err.response && err.response.data.detail ?
        err.response.data.detail : err.message
      return rejectWithValue(error)
  
    }
  })
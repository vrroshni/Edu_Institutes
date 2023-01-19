import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import toast from "react-hot-toast";

export const login = createAsyncThunk("auth/login", async (credentials, { rejectWithValue }) => {
  try {

    const config = {
      headers: {
        'Content-type': 'application/json'
      }
    }

    const { data } = await axios.post('user/login/',
      { 'email': credentials.email, 'password': credentials.password }, config
    )
    toast.success("You are Successfully Logged in");
    localStorage.setItem('user', JSON.stringify(data))
    return data;

  } catch (err) {
    const error = err.response && err.response.data.detail ?
      err.response.data.detail : err.message
    toast.error(error);
    return rejectWithValue(error)


  }
})


export const signUp = createAsyncThunk("auth/signUp", async (credentials, { rejectWithValue }) => {
  try {

    const config = {
      headers: {
        'Content-type': 'application/json'
      }
    }

    const { data } = await axios.post('user/register/',
      { 'username': credentials.username, 'first_name': credentials.firstname, 'last_name': credentials.lastname, 'password': credentials.password, 'email': credentials.email, "is_institute": credentials.is_institute }, config
    )
    toast.success("You have Successfully Registered");
  } catch (err) {
    const error = err.response && err.response.data.detail ?
      err.response.data.detail : err.message
    toast.error(error);
    return rejectWithValue(error)

  }
})
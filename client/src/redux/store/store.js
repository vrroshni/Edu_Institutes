import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../slices/auth'
import instituteReducer from '../slices/institute'
import profileReducer from '../slices/profile'

export const store = configureStore({
    reducer: {
        auth: authReducer,
        institute:instituteReducer,
        profile:profileReducer,

    
    },
})
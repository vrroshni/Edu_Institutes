import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../slices/auth'
import profileReducer from '../slices/account'

export const store = configureStore({
    reducer: {
        auth: authReducer,
        profile: profileReducer,
    
    },
})
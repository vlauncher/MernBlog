import { configureStore } from '@reduxjs/toolkit';
import authReducer from './features/slices/authSlice';
import postReducer from './features/slices/postsSlice'

const store = configureStore({
    reducer:{
        auth:authReducer,
        posts:postReducer
    }
})

export default store;
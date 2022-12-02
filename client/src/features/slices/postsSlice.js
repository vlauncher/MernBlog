import { createAsyncThunk,createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    isSuccess : false,
    isError : false,
    isLoading:false,
    posts: [],
    message2 : ''
}

/* Actions */

export const createpost = createAsyncThunk('posts/createpost', async (post,thunkAPI) => {
    try {
        const token = thunkAPI.getState().auth.user.token
        const config = {
            headers : {
                Authorization: `Bearer ${token}`
            }
        }
        const response = await axios.post('http://localhost:8000/posts/create/',post,config)
        return response.data
    } catch (error) {
        const message2 = error.response.data.msg
        console.log(message2)
        return thunkAPI.rejectWithValue(message2)
    }
})

export const listposts = createAsyncThunk('posts/listposts',async (_,thunkAPI)=>{
    try {
        const token = thunkAPI.getState().auth.user.token
        const config = {
            headers : {
                Authorization: `Bearer ${token}`
            }
        }
        const response = await axios.get('http://localhost:8000/posts/list/',config)
        return response.data
    } catch (error) {
        const message2 = error.response.data.msg
        console.log(message2)
        return thunkAPI.rejectWithValue(message2)
    }
})

/* Reducers */

export const postsSlice = createSlice({
    name:'posts',
    initialState,
    reducers :{
        reset : (state)=> initialState
    },
    extraReducers:(builder)=>{
        builder
            .addCase (listposts.pending,(state)=>{
                state.isLoading = true
            })
            .addCase(listposts.fulfilled,(state,action)=>{
                state.isLoading = false
                state.isSuccess = true
                state.posts = action.payload
            })
            .addCase(listposts.rejected,(state,action)=>{
                state.isError = true
                state.posts=[]
                state.isLoading = false
                state.message2 = action.payload
            })
            .addCase(createpost.pending,(state)=>{
                state.isLoading = true
            })
            .addCase(createpost.fulfilled,(state,action)=>{
                state.isLoading = false
                state.isSuccess = true
                state.posts.push(action.payload)
            })
            .addCase(createpost,(state,action)=>{
                state.isLoading = false
                state.isError = true
                state.message2 = action.payload
            })
    }
})

export const { reset } = postsSlice.actions
export default postsSlice.reducer;
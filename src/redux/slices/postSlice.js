import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    posts: [],
    post: {},
    postComment: [],
    isLoading: true,
    errorMessage: ''
}

export const getPostComments = createAsyncThunk('post/fetchPostComments', async (postId) => {
    try {
        let response = await axios.get(`https://gorest.co.in/public/v2/posts/${postId}/comments`)
        let post = await response.data;
        // console.log(post, 'post data is here.')
        return post;
    }
    catch (error) {
        return error.message;
    }
})


export const postSlice = createSlice({
    name: 'post',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(getPostComments.pending, (state) => {
            state.isLoading= true
        });
        builder.addCase(getPostComments.fulfilled, (state, action) => {
            state.postComment= [...state.postComment, action.payload],
            state.isLoading= false
        });
        builder.addCase(getPostComments.rejected, (state, action) => {
            state.isLoading= false,
            state.postComment=  [],
            state.errorMessage= action.error.message
        })
    }
});

// export const { createNewUser } = postSlice.actions;
export default postSlice.reducer;
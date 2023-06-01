import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    users: [],
    user: {},
    userPosts:[],
    isLoading: true,
    errorMessage:''
}

export const getUser = createAsyncThunk('user/fetchAllUsers', async () => {
    try {
        let response = await axios.get('https://gorest.co.in/public/v2/users');
        let allUsers = await response.data;
        return allUsers;
    }
    catch (error) {
        return error.message
    }
})

export const getSingleUser = createAsyncThunk('user/fetchSingleUser', async (userId) => {
    try {
        let response = await axios.get(`https://gorest.co.in/public/v2/users/${userId}`)
        let user = await response.data;
        return user;
    }
    catch (error) {
        return error.message;
    }
})

export const getUserPosts = createAsyncThunk('user/fetchUserPosts', async (userId) => {
    let response = await axios.get(`https://gorest.co.in/public/v2/users/${userId}/posts`) 
    let posts = await response.data;
    return posts;
});



/* Authentication Issue while creating user via endpoint */
export const createUser = createAsyncThunk('user/createNewUser', async (user) => {
    let response = await axios.post('https://gorest.co.in/public/v2/users', user, {
    headers: {
        'Authorization':"Bearer 8dcba866aac17e1681e32571c9e73aeac317d9ccf4014f97dd24a2ab72bbd7c8"
    }
});
// console.log(response, 'response')
let newUser = await response.data;
return newUser;
})

export const userSlice = createSlice({
    name: 'user',
    initialState,
    extraReducers: (builder)=>{
        builder.addCase(getUser.pending, (state) => {
            // console.log('Pending')
            state.isLoading=true
        });
        builder.addCase(getUser.fulfilled, (state, action) => {
            // console.log('Fulfilled')
            state.users = action.payload;
            state.isLoading = false
        });
        builder.addCase(getUser.rejected, (state, action) => {
            // console.log('Error')
            state.isLoading = false
            state.users = [];
            state.errorMessage= action.error.message
        })
        
        /* Get Single User Cases */
        builder.addCase(getSingleUser.pending, (state, action) => {
            state.isLoading = true;
        });
        builder.addCase(getSingleUser.fulfilled, (state, action) => {
            state.isLoading = false;
            state.user = action.payload;
        });
        builder.addCase(getSingleUser.rejected, (state, action) => {
            state.errorMessage = action.error.message;
            state.isLoading = false,
            state.user = {}
        })
        
        /* Get User Posts Cases */
        builder.addCase(getUserPosts.pending, (state, action) => {
            state.isLoading = true;
        });
        builder.addCase(getUserPosts.fulfilled, (state, action) => {
            state.isLoading = false;
            state.userPosts = action.payload;
        });
        builder.addCase(getUserPosts.rejected, (state, action) => {
            state.errorMessage = action.error.message;
            state.isLoading = false,
            state.userPosts = []
        })
        
        /* Get User Posts Cases */
        builder.addCase(createUser.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(createUser.fulfilled, (state, action) => {
            state.isLoading = false;
            state.users.push(action.payload);
        });
        builder.addCase(createUser.rejected, (state, action) => {
            state.errorMessage = action.error.message;
            state.isLoading = false,
            state.users = []
        })
    }
});

// export const { createNewUser } = userSlice.actions;
export default userSlice.reducer;
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchUsers = createAsyncThunk('users/fetchusers', async (users) => {
    console.log(users)
    try {
        const headers = {
            'Content-Type': 'application/json'
        };
        const response = await axios.post(`https://imgupld.herokuapp.com/user/register`, users
        ,{headers : headers})
        console.log(response)
        return response.data
    } catch (err) {
        console.error(err)
    }
})

const slice = createSlice({
    name: "users",
    initialState: {users : JSON.parse(localStorage.getItem('user') || null), isUsersFetching : false},
    reducers: {

    },
    extraReducers: {

        [fetchUsers.pending]: (state, action) => {
			state.isUsersFetching = true;
		},
		[fetchUsers.fulfilled]: (state, action) => {
            //console.log(action.payload.createUser.accessToken)
            const userJSON = JSON.stringify(action.payload);
            localStorage.setItem('user', userJSON)
			state.users = action.payload;
			state.isUsersFetching = false;
		},
		[fetchUsers.rejected]: (state, action) => {
			state.isUsersFetching = false;
		},

    }

    
})


export default slice.reducer;
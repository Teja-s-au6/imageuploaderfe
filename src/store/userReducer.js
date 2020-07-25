import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchUsers = createAsyncThunk('users/fetchusers', async (users) => {
    console.log(users)
    try {
        const headers = {
            'Content-Type': 'application/json'
        };
        const reponse = await axios.post(`https://imgupld.herokuapp.com/user/register`, {
            users
        },{headers})
        console.log(reponse.data)
        return Response.data
    } catch (err) {
        console.error(err)
    }
})

const slice = createSlice({
    name: "users",
    initialState: {users : null, isUsersFetching : false},
    reducers: {

    },
    extraReducers: {

        [fetchUsers.pending]: (state, action) => {
			state.isUsersFetching = true;
		},
		[fetchUsers.fulfilled]: (state, action) => {
			state.videos = action.payload;
			state.isUsersFetching = false;
		},
		[fetchUsers.rejected]: (state, action) => {
			state.isUsersFetching = false;
		},

    }

    
})


export default slice.reducer;
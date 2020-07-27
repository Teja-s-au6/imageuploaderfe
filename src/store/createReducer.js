import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchfiles = createAsyncThunk('users/fetchfiles', async (files, { getState }) => {
    console.log(files)
    console.log(getState().features.users.users.createUser.accessToken)
    const accessToken = getState().features.users.users.createUser.accessToken
    try {
        const headers = {
            'Content-Type': 'application/json,text/html; charset=UTF-8,multipart/form-data; boundary=something'
        };
        const response = await axios.post(`https://imgupld.herokuapp.com/user/create/${accessToken}`, files
        ,{headers : headers})
        console.log(response)
        return response.data
    } catch (err) {
        console.error(err)
    }
})

const slice = createSlice({
    name: "files",
    initialState: {files : null, isFilesFetching : false},
    reducers: {

    },
    extraReducers: {

        [fetchfiles.pending]: (state, action) => {
			state.isFilesFetching = true;
		},
		[fetchfiles.fulfilled]: (state, action) => {
			state.files = action.payload;
			state.isFilesFetching = false;
		},
		[fetchfiles.rejected]: (state, action) => {
			state.isFilesFetching = false;
		},

    }

    
})


export default slice.reducer;
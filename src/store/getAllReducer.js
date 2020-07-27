import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchAllfiles = createAsyncThunk('files/fetchAllfiles', async (_, { getState }) => {
    try {
        const response = await axios.get(`https://imgupld.herokuapp.com/imageuploaders`)
        //console.log(response.data)
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

        [fetchAllfiles.pending]: (state, action) => {
			state.isFilesFetching = true;
		},
		[fetchAllfiles.fulfilled]: (state, action) => {
			state.files = action.payload;
			state.isFilesFetching = false;
		},
		[fetchAllfiles.rejected]: (state, action) => {
			state.isFilesFetching = false;
		},

    }

    
})


export default slice.reducer;
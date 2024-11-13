import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import PropTypes from 'prop-types';



///////////////////////////////// FETCH SINGLE USERS /////////////////////////////////
export const fetchSingleUser = createAsyncThunk('users/fetchSingle', async (userId) => {
    try {
      const { data } = await axios.get(`http://localhost:3000/api/users/${userId}`);
      return data;
    } catch (err) {
      console.error('Failed to fetch user:', err);
      // debugger;
      throw err;
    }
  });


  ///////////////////////////////// SLICE /////////////////////////////////
const singleUserSlice = createSlice({
    name: 'user',
    initialState:{
      user: [],
      singleUser: null,
      status: 'idle',
      error: null
    },
    reducers: {},
    extraReducers: (builder) => {
      builder
      .addCase(fetchSingleUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.status = 'succeeded';
      })
    },
  });

  export const selectSingleUser = (state) => state.user.status

  export default singleUserSlice.reducer;

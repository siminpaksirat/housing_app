import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import PropTypes from 'prop-types';



///////////////////////////////// FETCH PROFILE /////////////////////////////////
export const fetchProfile = createAsyncThunk('users/profile', async () => {
    try {
      const { data } = await axios.get('http://localhost:3000/api/users/profile');
      return data;
    } catch (err) {
      console.error('Failed to fetch profile:', err);
      // debugger;
      throw err;
    }
  });





  ///////////////////////////////// SLICE /////////////////////////////////
const profileSlice = createSlice({
    name: 'profile',
    initialState:{
      user: [],
      status: 'idle',
      error: null
    },
    reducers: {},
    extraReducers: (builder) => {
      builder
      .addCase(fetchProfile.fulfilled, (state, action) => {
        state.profile = action.payload;
        state.status = 'succeeded';
      })
    },
  });

  export const selectProfile = (state) => state.users.user;
  export default userProfile.reducer;

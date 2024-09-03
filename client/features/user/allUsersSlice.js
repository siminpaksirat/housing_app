import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import PropTypes from 'prop-types';



///////////////////////////////// FETCH ALL USERS /////////////////////////////////
export const fetchAllUsers = createAsyncThunk('users/fetchAll', async () => {
  try {
    const { data } = await axios.get('http://localhost:3000/api/users');
    return data;
  } catch (err) {
    console.error('Failed to fetch users:', err);
    // debugger;
    throw err;
  }
});

///////////////////////////////// FETCH SINGLE USERS /////////////////////////////////
// export const fetchUser = createAsyncThunk('users/userId', async (userId) => {
//   try {
//     const { data } = await axios.get(`http://localhost:3000/api/users/${userId}`);
//     return data;
//   } catch (err) {
//     console.error('Failed to fetch user:', err);
//     // debugger;
//     throw err;
//   }
// });

///////////////////////////////// ADD USER /////////////////////////////////
export const addUser = createAsyncThunk('users/addUser', async ({ email, password}) => {
  try {
    const {data }=  await axios.post('http://localhost:3000/api/users', {email, password});
    return data;
  } catch (err) {
    console.error('Failed to add user:', err);
    // debugger;
    throw err;
  }
});








///////////////////////////////// SLICE /////////////////////////////////
const allUsersSlice = createSlice({
  name: 'users',
  initialState:{
    user: [],
    status: 'idle',
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(fetchAllUsers.fulfilled, (state, action) => {
      state.user = action.payload;
      state.status = 'succeeded';
    })
    // .addCase(fetchUser.fulfilled, (state, action) => {
    //   state.user = action.payload;
    //   state.status = 'succeeded';
    // })
    .addCase(addUser.fulfilled, (state, action) => {
      state.users.push(action.payload);
    })
  },
});

export const selectAllUsers = (state) => state.users.user;
export default allUsersSlice.reducer;

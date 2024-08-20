import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';




// Thunk to fetch properties from the backend
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

const allUsersSlice = createSlice({
  name: 'allUsers',
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
    });
  },
});

export const selectAllUsers = (state) => state.users.user;
export default allUsersSlice.reducer;

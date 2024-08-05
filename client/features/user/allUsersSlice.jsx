import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchAllUsers = createAsyncThunk('/users/fetchAll', async () => {
  try {
    const { data } = await axios.get(
      'https://maverick-merchants.onrender.com/api/users'
    );
    return data;
  } catch (err) {
    console.log(err);
  }
});

const allUsersSlice = createSlice({
  name: 'allUsers',
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAllUsers.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export const selectAllUsers = (state) => state.allUsers;
export default allUsersSlice.reducer;

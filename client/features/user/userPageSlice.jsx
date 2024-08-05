import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const updatePassword = createAsyncThunk(
  'user/updateUser',
  async (formData) => {
    try {
      const { data } = await axios.put(
        'https://maverick-merchants.onrender.com/api/auth/change-password',
        formData
      );
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const userSlice = createSlice({
  name: 'user',
  initialState: {},
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(updatePassword.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});
export const currentUser = (state) => {
  return state.user;
};

export const selectUser = (state) => state.user;
export default userSlice.reducer;

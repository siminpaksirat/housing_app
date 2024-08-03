import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchSingleProperty = createAsyncThunk('properties/:id', async () => {
    try {
      const { data } = await axios.get('http://localhost:3000/api/properties/:id');
      return data;
    } catch (err) {
      console.error('Failed to fetch properties:', err);
      throw err;
    }
  });

  export const editSingleProperty = createAsyncThunk('properties/:id', async () => {
    try {
      const { data } = await axios.put('http://localhost:3000/api/properties/:id');
      return data;
    } catch (err) {
      console.error('Failed to fetch properties:', err);
      throw err;
    }
  });




  const singlePropertySlice = createSlice({
    name: 'singleProperty',
    initialState: {
        properties: [],
        status: 'idle',
        error: null
      },
    reducers: {},
    extraReducers: (builder) => {
      builder

        .addCase(fetchSingleProperty.fulfilled, (state, action) => {
          state.status = 'succeeded';
          state.singleProperty = action.payload;
        })
        .addCase(editSingleProperty.fulfilled, (state, action) => {
          state.status = 'succeeded';
          state.singleProperty = action.payload;
        })

    },
  });


  export const selectSingleProperty = (state) => state.properties.singleProperty;




  export default singlePropertySlice.reducer;

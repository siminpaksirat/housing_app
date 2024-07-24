import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

// Thunk to fetch properties from the backend
export const fetchAllProperties = createAsyncThunk('properties/fetchAll', async () => {
  try {
    const { data } = await axios.get('http://localhost:3000/api/properties');
    return data;
  } catch (err) {
    console.error('Failed to fetch properties:', err);
    // debugger;
    throw err;
  }
});


export const fetchSingleProperty = createAsyncThunk('properties/:id', async () => {
  try {
    const { data } = await axios.get('http://localhost:3000/api/properties/:id');
    return data;
  } catch (err) {
    console.error('Failed to fetch properties:', err);
    throw err;
  }
});


const propertiesSlice = createSlice({
  name: 'properties',
  initialState: {
    properties: [],
    status: 'idle',
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllProperties.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchAllProperties.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.properties = action.payload;
      })
      .addCase(fetchAllProperties.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(fetchSingleProperty.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchSingleProperty.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.properties = action.payload;
      })
      .addCase(fetchSingleProperty.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});


export const selectSingleProperty = (state) => state.properties.properties;
export const selectPropertyStatus = (state) => state.properties.status;
export const selectPropertyError = (state) => state.properties.error;



export const selectAllProperties = (state) => state.properties.properties;
export const selectPropertiesStatus = (state) => state.properties.status;
export const selectPropertiesError = (state) => state.properties.error;
export default propertiesSlice.reducer;

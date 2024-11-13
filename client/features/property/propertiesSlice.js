import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import PropTypes from 'prop-types';



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


export const addProperty = createAsyncThunk('properties/addProperty', async ({ name, address}) => {
  try {
    const {data }=  await axios.post('http://localhost:3000/api/properties', {name, address});
    // const { data } = await axios.get('http://localhost:3000/api/properties');
    //  console.log('the add thunk activated', name, address);
    return data;
  } catch (err) {
    console.error('Failed to fetch properties:', err);
    // debugger;
    throw err;
  }
});


export const deleteProperty = createAsyncThunk('properties/deleteProperty', async (propertyId) => {
  try {
    const { data } = await axios.delete(`http://localhost:3000/api/properties/${propertyId}`);
    return {id : propertyId};
  } catch (err) {
    console.error('Failed to fetch properties:', err);
    // debugger;
    throw err;
  }
});


const propertiesSlice = createSlice({
  name: 'properties',
  initialState: {
    property: [],
    status: 'idle',
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllProperties.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.property = action.payload;
      })
      .addCase(addProperty.fulfilled, (state, action) => {
        state.property.push(action.payload);
        // const newProperty = action.payload;
        // return [...state.properties, newProperty]
      })
      .addCase(deleteProperty.fulfilled, (state, action) => {
        const propertyId = action.payload;
        return state.property.filter((property) => property.id === propertyId)
      })
  }
});






export const selectAllProperties = (state) => state.properties.property;
export default propertiesSlice.reducer;

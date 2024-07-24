import { configureStore } from '@reduxjs/toolkit';
import propertiesReducer from './features/property/propertiesSlice.js';

const store = configureStore({
  reducer: {
    properties: propertiesReducer,
  },
});

export default store;

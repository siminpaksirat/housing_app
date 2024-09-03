import { configureStore } from '@reduxjs/toolkit';
import propertiesReducer from './features/property/propertiesSlice.js';
import usersReducer from './features/user/allUsersSlice.js'


const store = configureStore({
  reducer: {
    properties: propertiesReducer,
    users: usersReducer,
  },
});

export default store;

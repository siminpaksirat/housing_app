import { configureStore } from '@reduxjs/toolkit';
import propertiesReducer from './features/property/propertiesSlice.js';
import usersReducer from './features/user/allUsersSlice.js'
import authReducer from './features/user/authSlice.jsx'


const store = configureStore({
  reducer: {
    properties: propertiesReducer,
    users: usersReducer,
    auth: authReducer,
  },
});

export default store;

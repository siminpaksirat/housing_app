// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';

// const TOKEN = 'token';



// export const login = createAsyncThunk('/login', async () => {
//   const token = window.localStorage.getItem(TOKEN);
//   try {
//     if (token) {
//       const res = await axios.get(
//         'http://localhost:3000/api/login',
//         {
//           headers: {
//             Authorization: token,
//           },
//         }
//       );
//       return res.data;
//     } else {
//       return {};
//     }
//   } catch (err) {
//     if (err.response.data) {
//       // eslint-disable-next-line no-undef
//       return thunkAPI.rejectWithValue(err.response.data);
//     } else {
//       return 'There was an issue with your request.';
//     }
//   }
// });




// export const profile = createAsyncThunk('/profile', async () => {
//   const token = window.localStorage.getItem(TOKEN);
//   try {
//     if (token) {
//       const res = await axios.get(
//         'http://localhost:3000/api/profile',
//         {
//           headers: {
//             Authorization: token,
//           },
//         }
//       );
//       return res.data;
//     } else {
//       return {};
//     }
//   } catch (err) {
//     if (err.response.data) {
//       // eslint-disable-next-line no-undef
//       return thunkAPI.rejectWithValue(err.response.data);
//     } else {
//       return 'There was an issue with your request.';
//     }
//   }
// });

// export const authenticate = createAsyncThunk(
//   'auth/authenticate',
//   async ({ email, password, method, firstname, lastname }, thunkAPI) => {
//     // eslint-disable-next-line no-useless-catch
//     try {
//       const res = await axios.post(
//         `https://maverick-merchants.onrender.com/auth/${method}`,
//         {
//           email,
//           password,
//           firstname,
//           lastname,
//         }
//       );
//       window.localStorage.setItem(TOKEN, res.data.token);
//       thunkAPI.dispatch(me());
//     } catch (err) {
//       throw err;
//     }
//   }
// );

// export const authSlice = createSlice({
//   name: 'authenticate',
//   initialState: {
//     auth: {},
//     error: null,
//     errorMessage: null,
//   },
//   reducers: {
//     // logout(state, action) {
//     //   window.localStorage.removeItem(TOKEN);
//     //   state.me = {};
//     //   state.error = null;
//     // },
//   },
//   extraReducers: (builder) => {
//     builder.addCase(login.fulfilled, (state, action) => {
//       state.login = action.payload;
//     });
//     builder.addCase(login.rejected, (state, action) => {
//       state.error = action.error;
//     });
//     // builder.addCase(authenticate.rejected, (state, action) => {
//     //   state.error = action.payload;
//     // });
//   },
// });

// export const { logout } = authSlice.actions;
// export const selectUser = (state) => {
//   return state.auth;
// };


// export const selectAuth = (state) => state.authenticate.auth;
// export default authSlice.reducer;

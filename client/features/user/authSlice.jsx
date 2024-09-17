import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const TOKEN = 'token';

export const fetchMe = createAsyncThunk('auth/me', async (TOKEN) => {
  const token = window.localStorage.getItem(TOKEN);
  try {
    if (token) {
      const res = await axios.get(
        'http://localhost:3000/api/me',
        {
          headers: {
            Authorization: token,
          },
        }
      );
      return res.data;
    } else {
      return {};
    }
  } catch (err) {
    if (err.response.data) {
      // eslint-disable-next-line no-undef
      return thunkAPI.rejectWithValue(err.response.data);
    } else {
      return 'There was an issue with your request.';
    }
  }
});

export const authenticate = createAsyncThunk(
  'auth/authenticate',
  async ({ email, password, id, firstName, lastName }, thunkAPI) => {
    // eslint-disable-next-line no-useless-catch
    try {
      const res = await axios.post(
        `http://localhost:3000/api/me/${id}`,
        {
          email,
          password,
          firstName,
          lastName,
        }
      );
      window.localStorage.setItem(TOKEN, res.data.token);
      thunkAPI.dispatch(fetchMe());
    } catch (err) {
      throw err;
    }
  }
);

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    me: {},
    error: null,
    errorMessage: null,
  },
  reducers: {
    logout(state, action) {
      window.localStorage.removeItem(TOKEN);
      state.me = {};
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchMe.fulfilled, (state, action) => {
      state.fetchMe = action.payload;
    });
    builder.addCase(fetchMe.rejected, (state, action) => {
      state.error = action.error;
    });
    builder.addCase(authenticate.rejected, (state, action) => {
      state.error = action.payload;
    });
  },
});

export const { logout } = authSlice.actions;
export const selectUser = (state) => {
  return state.auth;
};

export default authSlice.reducer;

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const name = 'user';

const initialValue = {
  user: {
    token: '',
    id: '',
    admin: false,
    groupCode: '',
    name: '',
    email: '',
  },
  isLoading: false,
};

// const fetchUser = createAsyncThunk(`${name}/FETCH_USER`);

export const user = createSlice({
  name,
  initialState: initialValue,
  reducers: {
    LoginStart: {
      reducer: (state) => {
        state.isLoading = true;
      },
    },
    LoginSuccess: {
      reducer: (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
      },
      prepare: ({ token, id, admin, groupCode, name, email }) => ({
        payload: {
          token,
          id,
          admin,
          groupCode,
          name,
          email,
        },
      }),
    },
    Logout: {
      reducer: (state) => {
        state.user = initialValue.user;
      },
    },
  },
});

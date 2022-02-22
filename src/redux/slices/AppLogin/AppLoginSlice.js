/* eslint-disable no-param-reassign */

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { appConstant } from '../../../constants/appConstants';

const initialState = {
  status: '',
  auth_user_details: {},
  token: '',
};

const userLogin = createAsyncThunk(
  'login/userLogin',
  async ({ username, password }) => {
    try {
      if (username && password) {
        const response = await axios.post(`${appConstant.adminUrl}login_api`, {
          username,
          password,
        });
        return response.data;
      }
      return {};
    } catch (error) {
      console.log(`${error}`);
      return [];
    }
  },
);

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    loginUser() {},
  },
  extraReducers: {
    [userLogin.pending]: (state) => {
      state.status = 'loading';
    },
    [userLogin.fulfilled]: (state, payload) => {
      state.status = 'success';
      state.auth_user_details = payload;
    },
    [userLogin.rejected]: (state) => {
      state.status = 'failed';
    },
  },
});

const { actions: loginActions } = loginSlice;
export { userLogin, loginSlice, loginActions };

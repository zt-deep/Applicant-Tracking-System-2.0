import { createAsyncThunk } from "@reduxjs/toolkit";

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
  }
);

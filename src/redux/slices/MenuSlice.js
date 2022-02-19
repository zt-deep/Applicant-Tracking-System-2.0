import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userMenus: [],
  orgMenus: [],
  activites: [],
};
const menuSlice = createSlice({
  name: 'menuState',
  initialState,
  reducers: {
    getMenuActivitesData() {},
  },
  extraReducers: {},
});
const { actions: menuActions } = menuSlice;
export { menuSlice, menuActions };

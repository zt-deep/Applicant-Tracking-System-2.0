import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  atsHiringActivities: {}
};
const menuSlice = createSlice({
  name: 'hiringActivity',
  initialState,
  reducers: {
    getMenuActivitesData() {},
  },
  extraReducers: {},
});
const { actions: menuActions } = menuSlice;
export { menuSlice, menuActions };

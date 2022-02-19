import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  alertType: '',
  alertMessage: '',
};
const alertSlice = createSlice({
  name: 'alert',
  initialState,
  reducers:{
    showInfo: (state, action) => {
      state.alertType = 'info';
      state.alertMessage = action.payload.message;
    },
    showSuccess: (state, action) => {
      console.log(action.payload)
      state.alertType = 'success';
      state.alertMessage = action.payload;
    },
    showError: (state, action) => {
      state.alertType = 'error';
      state.alertMessage = action.payload.message;
    },
  }  
},);
const {actions: alertActions} = alertSlice;
export {alertSlice, alertActions};
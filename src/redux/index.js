import { configureStore } from '@reduxjs/toolkit';
import reducers from './slices/rootReducers';

const store = configureStore({
  reducer: reducers,
});

export default store;

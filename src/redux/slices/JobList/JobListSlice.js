/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { getJobList } from './JobListReducers';

const initialState = {
  jobList: [],
  totalJobs: 0,
  page: 1,
  rowsPerPage: 10,
};
const jobListSlice = createSlice({
  name: 'jobList',
  initialState,
  reducers: {},
  extraReducers: {
    [getJobList.fulfilled]: (state, { payload }) => {
      state.jobList = payload.data.jobDataList;
      state.totalJobs = payload.data.totalJobs;
    },
  },
});
const jobListActions = jobListSlice.actions;
export { jobListSlice, jobListActions };

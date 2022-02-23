/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { fetchCandidatesByJobId, fetchCandidateStatusCount, fetchJobActiveStepDetails, fetchJobDetailsById, fetchJobHistoryDetails } from './JobDetailsReducer';

const initialState = {
  statusCount: {},
  jobDetails: {},
  jobHistory: [],
  candidateDetails: [],
  hiringTeam: [],
  hiringActiveSteps: [],
};
const jobDetailsSlice = createSlice({
  name: 'jobDetails',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchCandidateStatusCount.fulfilled]: (state, { payload }) => {
      console.log(payload);
      state.statusCount = payload;
    },
    [fetchJobDetailsById.fulfilled]: (state, { payload }) => {
      console.log(payload);
      state.jobDetails = payload;
    },
    [fetchCandidatesByJobId.fulfilled]: (state, {payload}) => {
      console.log(payload);
      state.candidateDetails = payload;
    },
    [fetchJobActiveStepDetails.fulfilled]: (state, {payload}) => {
      console.log(payload);
      state.hiringActiveSteps = payload;
    },
    [fetchJobHistoryDetails.fulfilled]: (state, {payload}) => {
      console.log(payload);
      state.jobHistory = payload;
    }
  },
});
const jobDetailsActions = jobDetailsSlice.actions;
export { jobDetailsSlice, jobDetailsActions };

/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { fetchCandidatesByJobId, fetchCandidateStatusCount, fetchJobDetailsById } from './JobDetailsReducer';

const initialState = {
  statusCount: {},
  jobDetails: {},
  candidateDetails: [],
  hiringTeam: [],
  hiringSteps: [],
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
    }
  },
});
const jobDetailsActions = jobDetailsSlice.actions;
export { jobDetailsSlice, jobDetailsActions };

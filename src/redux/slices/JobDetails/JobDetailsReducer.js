import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { appConstant } from '../../../constants/appConstants';

const fetchCandidateStatusCount = createAsyncThunk(
  'jobs/statusCount',
  async (payload) => {
    try {
      const { data } = await axios.post(
        `${appConstant.url}/jobs/candidateStatusCount`,
        payload,
      );
      console.log(data);
      return data.data;
    } catch (error) {
      return {};
    }
  },
);

const fetchCandidatesByJobId = createAsyncThunk('jobs/candidate', async (payload) => {
  console.log(payload);
  const response = await axios.get(`${appConstant.url}/candidate/${payload.jobId}`);
  return response.data.data;
});

const fetchJobDetailsById = createAsyncThunk(
  'jobs/details',
  async (payload) => {
    const response = await axios.get(
      `${appConstant.url}/jobs/${payload.jobId}`,
    );
    return response.data.data[0];
  },
);

const fetchJobActiveStepDetails = createAsyncThunk('jobs/activeSteps', async (payload) => {
  const response = await axios.get(
    `${appConstant.url}/hire/active/${payload.jobId}`,
  );
  return response.data.data;
});

const fetchJobHistoryDetails = createAsyncThunk('jobs/history', async (payload) => {
  const { data } = await axios.post(
    `${appConstant.url}/jobs/history`,
    payload,
  );
  return data.data;
});

export {
  fetchCandidateStatusCount,
  fetchCandidatesByJobId,
  fetchJobDetailsById,
  fetchJobActiveStepDetails,
  fetchJobHistoryDetails
};

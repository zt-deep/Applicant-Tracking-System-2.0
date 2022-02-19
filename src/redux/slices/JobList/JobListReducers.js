import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import appConstant from '../../../constants/appConstants';

const getJobListData = async (payload) => {
  try {
    const response = await axios.post(`${appConstant.url}/jobs/getJobs`, payload);
    return response.data;
  } catch (error) {
    return [];
  }
};

const getJobDetailsById = async (payload) => {
  const response = await axios.get(`${appConstant.url}/job/${payload.jobId}`);
  return response.data;
};

const getJobList = createAsyncThunk('jobs/getJobList', getJobListData);
const getJobDataById = createAsyncThunk('job/jobId', getJobDetailsById);

export { getJobList, getJobDataById };

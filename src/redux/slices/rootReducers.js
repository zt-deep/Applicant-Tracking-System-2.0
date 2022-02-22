import { menuSlice } from './MenuSlice';
import { loginSlice } from './AppLogin/AppLoginSlice';
import { alertSlice } from './Alert/AlertSlice';
import { jobListSlice } from './JobList/JobListSlice';
import { jobDetailsSlice } from './JobDetails/JobDetailSlice';

const reducers = {
  alert: alertSlice.reducer,
  login: loginSlice.reducer,
  appMenu: menuSlice.reducer,
  jobsList: jobListSlice.reducer,
  jobDetails: jobDetailsSlice.reducer,
};

export default reducers;

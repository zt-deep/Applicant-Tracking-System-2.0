import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  Box, Card, Grid, Typography,
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCandidateStatusCount } from '../../../redux/slices/JobDetails/JobDetailsReducer';
import JobCandidateCountStatusComponent from '../../../components/JobCountComponent';

function CommonPanel(props) {
  const { jobId } = props;
  const dispatch = useDispatch();
  const statusCount = useSelector((state) => state.jobDetails.statusCount);
  const {
    JOB_ID,
    JOB_TITLE,
    UNIQUE_JOB_ID,
    CREATED_ON,
    OPEN_TILL_DATE,
  } = useSelector((state) => state.jobDetails.jobDetails);

  useEffect(() => {
    dispatch(fetchCandidateStatusCount({ jobIds: [jobId] }));
  }, [jobId]);

  const jobCountHtml = statusCount[jobId] ? Object.keys(statusCount[jobId]).map((key) => {
    const { id, name, count } = statusCount[jobId][key];
    return (
      <JobCandidateCountStatusComponent
        key={id}
        name={name}
        jobId={JOB_ID}
        count={count}
        statusId={id}
      />
    );
  }) : null;
  return (
    <Grid className="css-7551ie mt-30">
      <Card className="cardbox">
        <Grid container>
          <Grid item xs={3}>
            <Typography variant="h6" style={{ fontSize: '18px' }}>
              {JOB_TITLE}
            </Typography>
            <Typography variant="body1" className="mt-10">
              Job Id :
              {' '}
              {UNIQUE_JOB_ID}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              {jobCountHtml}
            </Box>
          </Grid>

          <Grid item xs={3}>
            <Box sx={{ display: 'flex', justifyContent: 'space-around' }}>
              <Box>
                <Typography
                  variant="body1"
                  color="subtitle1"
                  className="numberjobs2"
                >
                  {CREATED_ON?.split('T')[0]}
                </Typography>
                <Typography variant="body1">Published On</Typography>
              </Box>

              <Box>
                <Typography
                  variant="body1"
                  color="subtitle1"
                  className="numberjobs2"
                >
                  {OPEN_TILL_DATE}
                </Typography>
                <Typography variant="body1">Expiring On</Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Card>
    </Grid>
  );
}

CommonPanel.propTypes = {
  jobId: PropTypes.string.isRequired,
};

export default CommonPanel;

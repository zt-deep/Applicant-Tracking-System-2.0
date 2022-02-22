import React from 'react';
import { Box, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function JobCandidateCountStatusComponent({
  statusId, name, count, jobId,
}) {
  return (
    <Box>
      <Link to={`/job/${jobId}/status/${statusId}`} style={{textDecoration: 'none'}}>
        <Typography variant="body1">{name.split('_').join(' ')}</Typography>
      </Link>
      <Typography variant="h6" className="numberjobs">
        {count}
      </Typography>
    </Box>
  );
}

JobCandidateCountStatusComponent.propTypes = {
  statusId: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
  jobId: PropTypes.number.isRequired,
};

export default JobCandidateCountStatusComponent;

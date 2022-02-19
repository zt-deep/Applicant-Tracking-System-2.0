import React from 'react';
import PropTypes from 'prop-types';

import { Avatar, AvatarGroup, Box } from '@mui/material';
import googleIcon from '../images/google-icon.png';
import linkedinIcon from '../images/linkedin.svg';
import naukriIcon from '../images/naukri.svg';

function JobBoardsPublishedComponent({ jobBoards }) {
  let image = '';
  const getIcon = (name) => {
    switch (name) {
      case 'GOOGLE':
        image = googleIcon;
        break;
      case 'NAUKRI':
        image = naukriIcon;
        break;
      case 'LINKEDIN':
        image = linkedinIcon;
        break;
      default:
        image = googleIcon;
    }
  };
  return (
    <Box className="mr-20">
      <AvatarGroup max={3} direction="row">
        {jobBoards.map((name) => {
          getIcon(name);
          return (
            <Avatar
              key={name}
              alt={name.toLowerCase()}
              src={image}
              style={{
                width: 24,
                height: 24,
                background: '#f0f0f0',
                marginRight: '15px',
                padding: 5,
              }}
            />
          );
        })}
      </AvatarGroup>
    </Box>
  );
}

JobBoardsPublishedComponent.propTypes = {
  jobBoards: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default JobBoardsPublishedComponent;

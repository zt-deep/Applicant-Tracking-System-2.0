import React from 'react';
import {
  Link,
} from 'react-router-dom';
import {
  Typography,
  Box,
  Grid,
  Button,
} from '@mui/material';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import Scrollbars from 'react-custom-scrollbars';

function JobDetail() {
  return (
    <Box className="css-7551ie h-100">
      <Grid
        container
        justify="space-between"
        alignItems="center"
        className="title-bar"
      >
        <Grid
          xs={12}
          sm={12}
          md={12}
          justify="flex-start"
          alignItems="center"
        >
          <Typography variant="subtitle1" style={{ marginBottom: 25 }}>
            Job Details
          </Typography>
        </Grid>
      </Grid>
      <Box>
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <Grid className="borderRIghtnew">
              <Scrollbars style={{ height: '65vh', paddingRight: 10 }}>
                <Box>
                  <Avatar
                    alt="Detail Logo"
                    src="/img/detaillogo.png"
                    sx={{ width: 60, height: 60 }}
                  />
                </Box>
                <Box className="mt-20">
                  <Typography variant="h6" style={{ fontSize: '18px' }}>
                    {' '}
                    Front End Developer (React)
                  </Typography>
                  <Typography variant="body1" className="mt-10">
                    Management Consulting Pvt. Ltd
                  </Typography>
                  <Typography variant="body1" className="mt-10">
                    Chandigarh, India
                  </Typography>
                </Box>
                <Box className="mt-30">
                  <Typography style={{ fontSize: 14 }}>
                    Front End Developer
                  </Typography>
                  <Typography
                    style={{ fontSize: 12, color: '#757575', marginTop: 4 }}
                  >
                    Designation
                  </Typography>
                </Box>

                <Box className="mt-20">
                  <Typography style={{ fontSize: 14 }}>Finance</Typography>
                  <Typography
                    style={{ fontSize: 12, color: '#757575', marginTop: 4 }}
                  >
                    Department
                  </Typography>
                </Box>

                <Box className="mt-20">
                  <Typography style={{ fontSize: 14 }}>
                    Mahalakshmi Logistics
                  </Typography>
                  <Typography
                    style={{ fontSize: 12, color: '#757575', marginTop: 4 }}
                  >
                    Entity
                  </Typography>
                </Box>

                <Box className="mt-20">
                  <Typography style={{ fontSize: 14 }}>Full Time</Typography>
                  <Typography
                    style={{ fontSize: 12, color: '#757575', marginTop: 4 }}
                  >
                    Type of Employment
                  </Typography>
                </Box>

                <Box className="mt-20">
                  <Typography style={{ fontSize: 14 }}>1-3 Years</Typography>
                  <Typography
                    style={{ fontSize: 12, color: '#757575', marginTop: 4 }}
                  >
                    Total Experience
                  </Typography>
                </Box>

                <Box className="mt-20">
                  <Typography style={{ fontSize: 14 }}>Analyst</Typography>
                  <Typography
                    style={{ fontSize: 12, color: '#757575', marginTop: 4 }}
                  >
                    Functional
                  </Typography>
                </Box>

                <Box className="mt-20">
                  <Typography style={{ fontSize: 14 }}>2</Typography>
                  <Typography
                    style={{ fontSize: 12, color: '#757575', marginTop: 4 }}
                  >
                    Number Of Position
                  </Typography>
                </Box>

                <Box className="mt-20">
                  <Typography style={{ fontSize: 14 }}>
                    Job Closing Date
                  </Typography>
                  <Typography
                    style={{ fontSize: 12, color: '#757575', marginTop: 4 }}
                  >
                    Designation
                  </Typography>
                </Box>
              </Scrollbars>
            </Grid>
          </Grid>
          <Grid item xs={6}>
            <Grid className="borderRIghtnew">
              <Scrollbars style={{ height: '65vh', paddingRight: 10 }}>
                <Box style={{ paddingRight: 20 }}>
                  <Typography variant="body2">Company Description</Typography>
                  <Typography variant="body1" className="mt-10">
                    Ask yourself - Do you want to work in the fastest-growing
                    IP firm? Do you thrive in a flexible work environment? Do
                    you prefer a work culture where years of experience do not
                    decide your growth path? If you said yes, then our team
                    might be interested in talking to you.
                  </Typography>

                  <Typography variant="body1" className="mt-20">
                    Know more about us at www.greyb.com or follow our account
                    www.instagram.com/lifeatgreyb/ to know more about what's
                    happening inside GreyB.
                  </Typography>

                  <Typography variant="body2" className="mt-30">
                    Job Description
                  </Typography>
                  <Typography variant="body1" className="mt-10">
                    Ask yourself - Do you want to work in the fastest-growing
                    IP firm? Do you thrive in a flexible work environment? Do
                    you prefer a work culture where years of experience do not
                    decide your growth path? If you said yes, then our team
                    might be interested in talking to you.
                  </Typography>

                  <Typography variant="body1" className="mt-10">
                    Know more about us at www.greyb.com or follow our account
                    www.instagram.com/lifeatgreyb/ to know more about what's
                    happening follow our account
                    www.instagram.com/lifeatgreyb/ to know more about what's
                    happening inside GreyB. Know more about us at
                    www.greyb.com or follow our account
                    www.instagram.com/lifeatgreyb/ to know more about what's
                    happening follow our account
                    www.instagram.com/lifeatgreyb/ to know more about what's
                    happening inside GreyB. Know more about us at
                    www.greyb.com or follow our account
                    www.instagram.com/lifeatgreyb/ to know more about what's
                    happening follow our account
                    www.instagram.com/lifeatgreyb/ to know more about what's
                    happening inside GreyB. Know more about us at
                    www.greyb.com or follow our account
                    www.instagram.com/lifeatgreyb/ to know more about what's
                    happening follow our account
                    www.instagram.com/lifeatgreyb/ to know more about what's
                    happening inside GreyB.
                  </Typography>

                  <Typography variant="body1" className="mt-10">
                    Know more about us at www.greyb.com or follow our follow
                    our account www.instagram.com/lifeatgreyb/ to know more
                    about what's happening follow our account
                    www.instagram.com/lifeatgreyb/ to know more about what's
                    happening follow our account
                    www.instagram.com/lifeatgreyb/ to know more about what's
                    happening account www.instagram.com/lifeatgreyb/ to know
                    more about what's happening inside GreyB.
                  </Typography>

                  <Typography variant="body1" className="mt-10">
                    Know more about us at www.greyb.com or follow our account
                    www.instagram.com/lifeatgreyb/ to know more about what's
                    happening inside GreyB.
                  </Typography>
                </Box>
              </Scrollbars>
            </Grid>
          </Grid>

          <Grid item xs={3}>
            <Box>
              <Typography variant="body2">Published On</Typography>
              <AvatarGroup
                max={3}
                direction="row"
                className="mt-10"
                style={{ flexDirection: 'inherit' }}
              >
                <Avatar
                  alt="Naukri"
                  src="/img/naukri.svg"
                  className="iconjobs"
                />
                <Avatar
                  alt="Glassdor"
                  src="/img/glass.svg"
                  className="iconjobs"
                />
                <Avatar
                  alt="Linkedin"
                  src="/img/linkedin.svg"
                  className="iconjobs"
                />
              </AvatarGroup>
            </Box>

            <Box className="mt-30">
              <Typography variant="body2">Share</Typography>
              <AvatarGroup
                max={3}
                className="mt-10"
                style={{ flexDirection: 'inherit' }}
              >
                <Avatar
                  alt="Naukri"
                  src="/img/naukri.svg"
                  className="iconjobs"
                />
                <Avatar
                  alt="Glassdor"
                  src="/img/glass.svg"
                  className="iconjobs"
                />
                <Avatar
                  alt="Linkedin"
                  src="/img/linkedin.svg"
                  className="iconjobs"
                />
              </AvatarGroup>
            </Box>

            <Box className="mt-30">
              <Typography>Published</Typography>
              <Typography>Feb 08, 2022</Typography>
            </Box>

            <Box className="mt-30">
              <Typography>Valid Till Date</Typography>
              <Typography>Feb 08, 2022</Typography>
            </Box>

            <Box className="mt-30">
              <Button className="deactivebtn" size="medium">
                Deactivate this job
              </Button>
              <Link href="www.google.com" underline="always" className="manageform">
                Manage Candidate Form
              </Link>

              <Link href="www.google.com" underline="always" className="manageform mt-10">
                Apply Job
              </Link>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default JobDetail;

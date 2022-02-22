import React from 'react';
import {
  Typography,
  Box,
  ListItemText,
  ListItem,
  Grid,
  Button,
  ListItemAvatar,
  Divider,
  Rating,
  Avatar,
} from '@mui/material';
import Scrollbars from 'react-custom-scrollbars';

function SourceJob() {
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
            Source
          </Typography>
        </Grid>
      </Grid>
      <Box>
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <Grid className="borderRIghtnew">
              <Scrollbars style={{ height: '65vh', paddingRight: 10 }}>
                <Box>
                  <Typography variant="h6" style={{ fontSize: '18px' }}>
                    {' '}
                    At A Glance
                  </Typography>
                </Box>
                <Box className="mt-30">
                  <Typography style={{ fontSize: 14 }}>28/02/2022</Typography>
                  <Typography
                    style={{ fontSize: 12, color: '#757575', marginTop: 4 }}
                  >
                    Close Date
                  </Typography>
                </Box>

                <Box className="mt-20">
                  <Typography style={{ fontSize: 14 }}>3</Typography>
                  <Typography
                    style={{ fontSize: 12, color: '#757575', marginTop: 4 }}
                  >
                    Open Date
                  </Typography>
                </Box>

                <Box className="mt-20">
                  <Typography style={{ fontSize: 14 }}>4</Typography>
                  <Typography
                    style={{ fontSize: 12, color: '#757575', marginTop: 4 }}
                  >
                    Applications
                  </Typography>
                </Box>

                <Box className="mt-20">
                  <Typography style={{ fontSize: 14 }}>100</Typography>
                  <Typography
                    style={{ fontSize: 12, color: '#757575', marginTop: 4 }}
                  >
                    Total Opening
                  </Typography>
                </Box>

                <Box className="mt-20">
                  <Typography style={{ fontSize: 14 }}>20</Typography>
                  <Typography
                    style={{ fontSize: 12, color: '#757575', marginTop: 4 }}
                  >
                    Onboarded
                  </Typography>
                </Box>

                <Box className="mt-20">
                  <Typography style={{ fontSize: 14 }}>20</Typography>
                  <Typography
                    style={{ fontSize: 12, color: '#757575', marginTop: 4 }}
                  >
                    Balance positions
                  </Typography>
                </Box>
              </Scrollbars>
            </Grid>
          </Grid>
          <Grid item xs={6}>
            <Grid className="borderRIghtnew">
              <Scrollbars style={{ height: '65vh', paddingRight: 10 }}>
                <Box style={{ paddingRight: 20 }}>
                  <Typography variant="body2">Top Candidates</Typography>

                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      p: 1,
                      m: 1,
                      bgcolor: 'background.paper',
                      borderRadius: 1,
                    }}
                  >
                    <Box>
                      <ListItem
                        alignItems="flex-start"
                        style={{ padding: 0 }}
                      >
                        <ListItemAvatar>
                          <Avatar alt="Travis Howard" src="/img/bitmap.png" />
                        </ListItemAvatar>
                        <ListItemText>
                          <Typography
                            variant="h6"
                            style={{ fontSize: '16px', marginBottom: 8 }}
                          >
                            {' '}
                            Sahud Khan
                          </Typography>
                          <Typography variant="body1">
                            {' '}
                            <Rating
                              value={2}
                              readOnly
                              name="size-small"
                              size="small"
                            />
                          </Typography>
                        </ListItemText>
                      </ListItem>
                    </Box>
                    <Box>
                      <Button
                        variant="outlined"
                        style={{
                          minWidth: 110,
                          height: 33,
                          marginTop: '12px',
                        }}
                      >
                        In Progress
                      </Button>
                    </Box>
                  </Box>
                  <Divider />

                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      p: 1,
                      m: 1,
                      bgcolor: 'background.paper',
                      borderRadius: 1,
                    }}
                  >
                    <Box>
                      <ListItem
                        alignItems="flex-start"
                        style={{ padding: 0 }}
                      >
                        <ListItemAvatar>
                          <Avatar alt="Travis Howard" src="/img/bitmap.png" />
                        </ListItemAvatar>
                        <ListItemText>
                          <Typography
                            variant="h6"
                            style={{ fontSize: '16px', marginBottom: 8 }}
                          >
                            {' '}
                            Sahud Khan
                          </Typography>
                          <Typography variant="body1">
                            {' '}
                            <Rating
                              value={3}
                              readOnly
                              name="size-small"
                              size="small"
                            />
                          </Typography>
                        </ListItemText>
                      </ListItem>
                    </Box>
                    <Box>
                      <Button
                        variant="outlined"
                        style={{
                          minWidth: 110,
                          height: 33,
                          marginTop: '12px',
                        }}
                      >
                        New
                      </Button>
                    </Box>
                  </Box>
                </Box>
              </Scrollbars>
            </Grid>
          </Grid>

          <Grid item xs={3}>
            <Box style={{ paddingLeft: 30 }}>
              <Box>
                <Typography variant="body2">
                  Applications By Source
                </Typography>
              </Box>

              <Box className="mt-20">
                <Typography style={{ fontSize: 14 }}>20</Typography>
                <Typography
                  style={{ fontSize: 12, color: '#757575', marginTop: 4 }}
                >
                  LinkedIn
                </Typography>
              </Box>

              <Box className="mt-20">
                <Typography style={{ fontSize: 14 }}>20</Typography>
                <Typography
                  style={{ fontSize: 12, color: '#757575', marginTop: 4 }}
                >
                  Job Portal
                </Typography>
              </Box>

              <Box className="mt-20">
                <Typography style={{ fontSize: 14 }}>20</Typography>
                <Typography
                  style={{ fontSize: 12, color: '#757575', marginTop: 4 }}
                >
                  Reference
                </Typography>
              </Box>

              <Box className="mt-20">
                <Typography style={{ fontSize: 14 }}>20</Typography>
                <Typography
                  style={{ fontSize: 12, color: '#757575', marginTop: 4 }}
                >
                  Facebook
                </Typography>
              </Box>

              <Box className="mt-20">
                <Typography style={{ fontSize: 14 }}>20</Typography>
                <Typography
                  style={{ fontSize: 12, color: '#757575', marginTop: 4 }}
                >
                  Naukri
                </Typography>
              </Box>

              <Box className="mt-20">
                <Typography style={{ fontSize: 14 }}>20</Typography>
                <Typography
                  style={{ fontSize: 12, color: '#757575', marginTop: 4 }}
                >
                  Glassdor
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default SourceJob;

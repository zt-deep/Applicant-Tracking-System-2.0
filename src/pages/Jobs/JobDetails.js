import {
  Box,
  Grid,
  TabsUnstyled,
  Typography,
  ListItemText,
  List,
  ListItem,
  Popover,
  IconButton,
  Card,
} from '@mui/material';
import { ArrowBack, MoreVert } from '@mui/icons-material';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import HorizontalTabs from '../../components/HorizontalTabs';

function JobDetailsComponent() {
  const { jobId } = useParams();
  const allowedTabs = [
    'Candidates',
    'Timeline',
    'Job details',
    'Hiring Process',
    'Sourcing',
  ];
  const [currentTab, setCurrentTab] = useState('Candidates');
  const updateCurrentTab = (event, value) => {
    setCurrentTab(value);
  };
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const 
  return (
    <Box className="w-100 flex-column">
      <TabsUnstyled defaultValue={0}>
        <Grid
          className="flex-between-center css-7551ie"
          style={{ borderBottom: '1px solid #EBECF0' }}
        >
          <Typography variant="h2">
            <ArrowBack />
            {' Jobs '}
          </Typography>

          <HorizontalTabs
            defaultTab={currentTab}
            allowedTabs={allowedTabs}
            onchange={updateCurrentTab}
          />
          <Grid className="flex-end-center">
            <Box>
              <IconButton onClick={handleClick} style={{ padding: 0 }}>
                <MoreVert />
              </IconButton>
              <Popover
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
              >
                <List className="list-popover">
                  <ListItem className="list-item flex-start-center">
                    <ListItemText
                      primaryTypographyProps={{
                        style: {
                          fontWeight: 500,
                          color: 'inherit',
                        },
                      }}
                    >
                      Edit
                    </ListItemText>
                  </ListItem>
                </List>
              </Popover>
            </Box>
          </Grid>
        </Grid>
        <Grid className="css-7551ie mt-30">
          <Card className="cardbox">
            <Grid container>
              <Grid item xs={3}>
                <Typography variant="h6" style={{ fontSize: '18px' }}>
                  {' '}
                  Front End Developer (React)
                </Typography>
                <Typography variant="body1" className="mt-10">
                  Job Id : #12310074
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                  <Box>
                    <Typography variant="h6" className="numberjobs">
                      200
                    </Typography>
                    <Typography variant="body1">All Active </Typography>
                  </Box>

                  <Box>
                    <Typography variant="h6" className="numberjobs">
                      80
                    </Typography>
                    <Typography variant="body1">New </Typography>
                  </Box>

                  <Box>
                    <Typography variant="h6" className="numberjobs">
                      100
                    </Typography>
                    <Typography variant="body1">In Progress </Typography>
                  </Box>

                  <Box>
                    <Typography variant="h6" className="numberjobs">
                      29
                    </Typography>
                    <Typography variant="body1">On Hold </Typography>
                  </Box>

                  <Box>
                    <Typography variant="h6" className="numberjobs">
                      44
                    </Typography>
                    <Typography variant="body1">Selected </Typography>
                  </Box>

                  <Box>
                    <Typography variant="h6" className="numberjobs">
                      555
                    </Typography>
                    <Typography variant="body1">Hired </Typography>
                  </Box>
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
                      Feb 24, 2021
                    </Typography>
                    <Typography variant="body1">Published On</Typography>
                  </Box>

                  <Box>
                    <Typography
                      variant="body1"
                      color="subtitle1"
                      className="numberjobs2"
                    >
                      Feb 24, 2021
                    </Typography>
                    <Typography variant="body1">Expiring On</Typography>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Card>
        </Grid>
      </TabsUnstyled>
    </Box>
  );
}

export default JobDetailsComponent;

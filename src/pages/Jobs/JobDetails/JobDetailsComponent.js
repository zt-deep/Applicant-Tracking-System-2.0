/* eslint-disable react/jsx-props-no-spreading */
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
  Tabs,
  Tab,
} from '@mui/material';
import { ArrowBack, MoreVert } from '@mui/icons-material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import CommonPanel from './CommonPanel';
import { fetchJobDetailsById } from '../../../redux/slices/JobDetails/JobDetailsReducer';
import CandidatesComponent from './CandidatesComponent';
import TimelineComponent from './TimelineComponent';
import HiringProcessComponent from './HiringProcessComponent';
import SourceComponent from './SourceComponent';
import DetailsComponent from './DetailsComponent';
import TabPanel from '../../../components/TabPanel';

function JobDetailsComponent() {
  const { jobId } = useParams();
  const [currentTab, setCurrentTab] = useState(0);

  const dispatch = useDispatch();
  const a11yProps = (index) => ({
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  });

  // const TabPanel = styled(TabPanelUnstyled)`
  //   width: 100%;
  //   font-size: 0.875rem;
  // `;

  useEffect(() => {
    dispatch(fetchJobDetailsById({ jobId }));
  }, [jobId]);

  const allowedTabs = [
    'Candidates',
    'Timeline',
    'Hiring Process',
    'Sourcing',
    'Job Details',
  ];
  const updateCurrentTab = (event, value) => {
    setCurrentTab(value);
  };
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

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

          {/* <HorizontalTabs
            defaultTab={currentTab}
            allowedTabs={allowedTabs}
            onchange={updateCurrentTab}
          /> */}
          <Tabs
            value={currentTab}
            onChange={updateCurrentTab}
            aria-label="jobdetails tab"
          >
            {allowedTabs.map((tab, index) => (
              <Tab label={tab} {...a11yProps(index)} />
            ))}
          </Tabs>
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
        <CommonPanel jobId={jobId} />
        <TabPanel value={currentTab} index={0}>
          <CandidatesComponent jobId={jobId} />
        </TabPanel>
        <TabPanel value={currentTab} index={1}>
          <TimelineComponent jobId={jobId} />
        </TabPanel>
        <TabPanel value={currentTab} index={2}>
          <HiringProcessComponent jobId={jobId} />
        </TabPanel>
        <TabPanel value={currentTab} index={3}>
          <SourceComponent jobId={jobId} />
        </TabPanel>
        <TabPanel value={currentTab} index={4}>
          <DetailsComponent jobId={jobId} />
        </TabPanel>
      </TabsUnstyled>
    </Box>
  );
}

export default JobDetailsComponent;

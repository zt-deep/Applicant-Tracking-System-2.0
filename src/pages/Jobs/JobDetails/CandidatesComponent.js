import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { Link } from 'react-router-dom';
import { makeStyles } from '@mui/styles';
import {
  Typography,
  Box,
  ListItem,
  TableRow,
  ListItemText,
  Popover,
  List,
  ListItemAvatar,
  TableHead,
  TableContainer,
  Table,
  TableCell,
  TableBody,
  Grid,
  Button,
  IconButton,
  Avatar,
  ListItemButton,
} from '@mui/material';
import Scrollbars from 'react-custom-scrollbars';
import ListIcon from '@mui/icons-material/List';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FilterListIcon from '@mui/icons-material/FilterList';
import { useDispatch, useSelector } from 'react-redux';
import SearchComponent from '../../../components/SearchComponent';
import CustomDropDown from '../../../components/CustomDropDown';
import FitlerDrawer from '../../../components/FilterDrawer';
import { JOB_ACTION } from '../../../constants/appConstants';
import { fetchCandidatesByJobId, fetchJobActiveStepDetails } from '../../../redux/slices/JobDetails/JobDetailsReducer';

const useStyles = makeStyles({
  table: {
    fontSize: 12,
    margin: 'auto',
    borderSpacing: '2px 20px',
    borderCollapse: 'inherit',
  },
});

const getMovableSteps = (currentStep = 0, allActiveSteps = []) => {
  const movableSteps = [];
  const lastIndex = allActiveSteps.length;
  const currentStepIndex = allActiveSteps.findIndex((data) => data.ID === currentStep);
  if (currentStepIndex + 1 < lastIndex) {
    const { ID, PROCESS_NAME } = allActiveSteps[currentStepIndex + 1];
    movableSteps.push({ ID, name: `Move forward to ${PROCESS_NAME}` });
  }
  if (currentStepIndex + 2 < lastIndex) {
    const { ID, PROCESS_NAME } = allActiveSteps[currentStepIndex + 2];
    movableSteps.push({ ID, name: `Move forward to ${PROCESS_NAME}` });
  }
  if (currentStepIndex - 1 >= 0) {
    const { ID, PROCESS_NAME } = allActiveSteps[currentStepIndex-1];
    movableSteps.push({ ID, name: `Move Back to ${PROCESS_NAME}` });
  }
  if (currentStepIndex - 2 >= 0) {
    const { ID, PROCESS_NAME } = allActiveSteps[currentStepIndex-2];
    movableSteps.push({ ID, name: `Move Back to ${PROCESS_NAME}` });
  }
  return movableSteps;
};

function JobCandidates(props) {
  const { jobId } = props;
  const classes = useStyles();
  const dispatch = useDispatch();
  const [filter, setfilter] = useState({});
  const [openDrawer, setopenDrawer] = useState(false);
  const [initialMount, setInitialMount] = useState(true);
  const [selectByStatus, setSelectByStatus] = useState('Select Next Steps');
  const [openFitlerDrawer, setOpenFilterDrawer] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const triggerJobAction = (event) => {
    console.log(event);
  };

  const mapJobAction = () => JOB_ACTION.map(({ menuId, menuName }) => (
    <ListItemButton
      className="list-item flex-start-center"
      onClick={() => triggerJobAction(menuId)}
    >
      <ListItemText
        primaryTypographyProps={{
          style: {
            fontWeight: 500,
            color: 'inherit',
          },
        }}
      >
        {menuName}
      </ListItemText>
    </ListItemButton>
  ));

  useEffect(() => {
    dispatch(fetchCandidatesByJobId({ jobId }));
    dispatch(fetchJobActiveStepDetails({ jobId }));
  }, [jobId]);

  const candidateDetails = useSelector((state) => state.jobDetails.candidateDetails);
  const activeHiringSteps = useSelector((state) => state.jobDetails.hiringActiveSteps);
  const renderCandidates = () => _.map(candidateDetails, (value) => {
    const {
      FIRST_NAME, LAST_NAME, HIGHER_NAME, EMAIL, MOBILE, CREATED_AT, UPDATED_AT, PROCESS_NAME, STEP
    } = value;

    return (
      <TableRow className="bordernewcollumn">
        <TableCell>
          <ListItem alignItems="flex-start" style={{ padding: 0 }}>
            <ListItemAvatar>
              <Avatar alt="Travis Howard" src="/img/bitmap.png" />
            </ListItemAvatar>
            <ListItemText>
              <Typography
                variant="h6"
                style={{ fontSize: '16px', marginBottom: 8 }}
              >
                {` ${FIRST_NAME} ${LAST_NAME}`}
              </Typography>
              <Typography variant="body1">{EMAIL}</Typography>
              <Typography variant="body1">{MOBILE}</Typography>
            </ListItemText>
          </ListItem>
        </TableCell>

        <TableCell className="tablebody-14-roboto border-bottom-tab">
          {HIGHER_NAME}
        </TableCell>
        <TableCell className="tablebody-14-roboto border-bottom-tab">
          {CREATED_AT}
        </TableCell>
        <TableCell className="tablebody-14-roboto border-bottom-tab">
          {PROCESS_NAME || 'New'}
        </TableCell>
        <TableCell className="tablebody-14-roboto border-bottom-tab">
          {UPDATED_AT}
        </TableCell>
        <TableCell className="tablebody-14-roboto border-bottom-tab">
          <Box className="mr-20">
            <CustomDropDown
              width={215}
              selectedMenu={selectByStatus}
              updateMenu={(item) => {
                setInitialMount(false);
                setSelectByStatus(item);
              }}
              menuItem={getMovableSteps(STEP, activeHiringSteps)}
            />
          </Box>
        </TableCell>

        <TableCell>
          <Box>
            <IconButton onClick={handleClick} style={{ padding: 0 }}>
              <MoreVertIcon />
            </IconButton>
            <Popover
              anchorEl={anchorEl}
              id="account-menu"
              open={open}
              onClose={handleClose}
              onClick={handleClose}
              transformOrigin={{
                horizontal: 'right',
                vertical: 'top',
              }}
              anchorOrigin={{
                horizontal: 'right',
                vertical: 'bottom',
              }}
            >
              <List className="list-popover">{mapJobAction()}</List>
            </Popover>
          </Box>
        </TableCell>
      </TableRow>
    );
  });

  // renderCandidates();

  return (
    <Box className="wh-100 flex-center-start">
      <Box
        className="css-7551ie h-100"
        style={{ width: openDrawer ? 'calc(100% - 18.4vw)' : '100%' }}
      >
        <Grid
          container
          justify="space-between"
          alignItems="center"
          className="title-bar"
        >
          <Grid xs={4} sm={5} md={4} justify="flex-start" alignItems="center">
            <Typography variant="subtitle1">Candidates</Typography>
          </Grid>
          <Grid xs={8} sm={7} md={8} className="flex-end-center">
            <Box style={{ marginRight: 20 }}>
              <SearchComponent />
            </Box>

            <Box className="icon-cover flex-center mr-20">
              <ListIcon className="header-icon" />
            </Box>

            <Box
              className="icon-cover flex-center mr-20"
              style={{ marginRight: 20 }}
              onClick={() => setOpenFilterDrawer(true)}
            >
              <FilterListIcon className="header-icon" />
            </Box>

            <Link
              style={{ textDecoration: 'none' }}
              to="/CreateJob"
            >
              <Button
                variant="contained"
                color="secondary"
                disableElevation
                disableRipple
                style={{ height: '35px', textDecoration: 'none' }}
              >
                Add New
              </Button>
            </Link>
          </Grid>
        </Grid>
        <Box sx={{ width: '100%', overflow: 'hidden' }}>
          <Scrollbars style={{ height: '60vh' }}>
            <TableContainer className="table-container-default table-container">
              <Table aria-label="table" size="small" className={classes.table}>
                <TableHead>
                  <TableRow>
                    <TableCell className="tablehead-14-roboto border-bottom-tab">
                      Name
                    </TableCell>
                    <TableCell className="tablehead-14-roboto border-bottom-tab">
                      Source
                    </TableCell>
                    <TableCell className="tablehead-14-roboto border-bottom-tab">
                      Applied
                    </TableCell>
                    <TableCell className="tablehead-14-roboto border-bottom-tab">
                      Overall Status
                    </TableCell>
                    <TableCell className="tablehead-14-roboto border-bottom-tab">
                      Updated On
                    </TableCell>
                    <TableCell className="tablehead-14-roboto border-bottom-tab">
                      Next Stage
                    </TableCell>
                    <TableCell className="tablehead-14-roboto border-bottom-tab">
                      Action
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {renderCandidates()}
                </TableBody>
              </Table>
            </TableContainer>
          </Scrollbars>
        </Box>
      </Box>
      {openFitlerDrawer ? (
        <FitlerDrawer
          width="260px"
          // style={{ width: "250px !important" }}
          openFilter={openFitlerDrawer}
          closeFilter={(e) => {
            e.preventDefault();
            setOpenFilterDrawer(false);
          }}
          filterKey="jobs"
          filter={filter}
          updateFilterList={(val) => setfilter({ ...val })}
        />
      ) : null}
    </Box>
  );
}

JobCandidates.propTypes = {
  jobId: PropTypes.string.isRequired,
};

export default JobCandidates;

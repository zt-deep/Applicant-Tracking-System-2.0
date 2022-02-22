import React, { useEffect, useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import {
  ListItemText,
  List,
  ListItem,
  Popover,
  Grid,
  Card,
  Button,
  Typography,
  Box,
  Divider,
  IconButton,
  TablePagination,
} from '@mui/material';
import FilterListIcon from '@mui/icons-material/FilterList';
import DownloadIcon from '@mui/icons-material/Download';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useDispatch, useSelector } from 'react-redux';
import CustomDropDown from '../../components/CustomDropDown';
import SearchComponent from '../../components/SearchComponent';
import { getJobList } from '../../redux/slices/JobList/JobListReducers';
import JobCandidateCountStatusComponent from '../../components/JobCountComponent';
import JobBoardsPublishedComponent from '../../components/JobBoardsPublished';

function Alljobs() {
  const dispatch = useDispatch();

  const [anchorEl, setAnchorEl] = useState(null);
  const [selectByStatus, setSelectByStatus] = useState('Expired');
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [, setInitialMount] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');

  const { jobList, totalJobs } = useSelector((state) => state.jobsList);
  useEffect(() => {
    dispatch(getJobList({ searchQuery, page, limit: rowsPerPage }));
  }, [rowsPerPage, page, searchQuery]);

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleChangePage = (event, value) => {
    setPage(value);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  const searchJobByName = (event) => {
    setSearchQuery(event.target.value);
  };

  console.log(jobList);
  const renderJobList = jobList.map((job) => {
    const {
      countStatus, JOB_ID, JOB_TITLE, FULL_NAME, OPEN_TILL_DATE, UNIQUE_JOB_ID, NO_OF_POSITION,
    } = job;
    const hiredCount = countStatus?.Hired?.count;
    const jobCountHtml = Object.keys(countStatus).map((key) => {
      const { id, name, count } = countStatus[key];
      return (
        <JobCandidateCountStatusComponent
          key={id}
          name={name}
          jobId={JOB_ID}
          count={count}
          statusId={id}
        />
      );
    });
    return jobList.length > 0 ? (
      <Card key={JOB_ID} className="cardbox">
        <Grid container>
          <Grid item xs={8}>
            <Typography variant="h6" style={{ fontSize: '18px' }}>
              <Link style={{ textDecoration: 'none' }} to={`/job/${JOB_ID}`}>{JOB_TITLE}</Link>
            </Typography>
            <Typography variant="body1" className="mt-10">
              Job Id:
              {`${UNIQUE_JOB_ID}`}
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
              <JobBoardsPublishedComponent jobBoards={job.publishedBoards} />
              <Box className="mr-20">
                <CustomDropDown
                  width={135}
                  selectedMenu={selectByStatus}
                  updateMenu={(item) => {
                    setInitialMount(false);
                    setSelectByStatus(item);
                  }}
                  menuItem={['Active', 'Inactive']}
                />
              </Box>
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
                    <ListItem className="list-item flex-start-center">
                      <ListItemText
                        primaryTypographyProps={{
                          style: {
                            fontWeight: 500,
                            color: 'inherit',
                          },
                        }}
                      >
                        View
                      </ListItemText>
                    </ListItem>
                    <ListItem className="list-item flex-start-center">
                      <ListItemText
                        primaryTypographyProps={{
                          style: {
                            fontWeight: 500,
                            color: 'inherit',
                          },
                        }}
                      >
                        Delete
                      </ListItemText>
                    </ListItem>
                  </List>
                </Popover>
              </Box>
            </Box>
          </Grid>
        </Grid>

        <Divider className="spacem" />
        <Grid container>
          <Grid item xs={7}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              {jobCountHtml}
            </Box>
          </Grid>

          <Grid item xs={5}>
            <Box sx={{ display: 'flex', justifyContent: 'space-around' }}>
              <Box>
                <Typography variant="body1">Position Closed</Typography>
                <Typography
                  variant="body1"
                  color="subtitle1"
                  className="numberjobs2"
                >
                  {`${hiredCount}/${NO_OF_POSITION}`}
                </Typography>
              </Box>

              <Box>
                <Typography variant="body1">Expiring On</Typography>
                <Typography
                  variant="body1"
                  color="subtitle1"
                  className="numberjobs2"
                >
                  {OPEN_TILL_DATE}
                </Typography>
              </Box>

              <Box>
                <Typography variant="body1">Created By </Typography>
                <Typography
                  variant="body1"
                  color="subtitle1"
                  className="numberjobs2"
                >
                  {FULL_NAME}
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Card>
    ) : (
      <h1>Loading......</h1>
    );
  });

  return (
    <main>
      <Grid className="top_tabs">
        <Box className="start-flex mainheadingall">
          <Typography variant="h2" style={{ fontSize: 18 }}>
            Jobs
          </Typography>
        </Box>
        <Grid item align="center" justify="center" alignItems="center">
          <NavLink
            exact
            className="menuneww"
            activeClassName="active_class"
            to="/Myjobs"
          >
            My Jobs
          </NavLink>
          <NavLink
            exact
            className="menuneww"
            activeClassName="active_class"
            to="/alljobs"
          >
            All Jobs
          </NavLink>
        </Grid>
      </Grid>

      <Grid className="allcssmain">
        <Box className="w-100 flex-between-center mb-20">
          <Typography variant="h2">All Jobs</Typography>
          <div className="flex-center">
            <Box className="mr-20">
              <SearchComponent
                getSearch={searchJobByName}
                value={searchQuery}
              />
            </Box>

            <Box className="icon-cover flex-center mr-20">
              <DownloadIcon className="header-icon" />
            </Box>

            <Box className="icon-cover flex-center mr-20">
              <FilterListIcon className="header-icon" />
            </Box>

            <Box>
              <Button
                variant="contained"
                color="secondary"
                disableElevation
                disableRipple
                style={{ height: '35px' }}
              >
                Create New
              </Button>
            </Box>
          </div>
        </Box>

        {renderJobList}

        {jobList.length > 0 && (
        <TablePagination
          component="div"
          count={totalJobs}
          page={page}
          onPageChange={handleChangePage}
          rowsPerPage={rowsPerPage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
        )}
      </Grid>
    </main>
  );
}

export default Alljobs;

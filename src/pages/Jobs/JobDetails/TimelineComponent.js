import React, { useState } from 'react';
import { makeStyles } from '@mui/styles';
import {
  Typography,
  Box,
  ListItem,
  TableRow,
  ListItemText,
  ListItemAvatar,
  TableHead,
  TableContainer,
  Table,
  TableCell,
  TableBody,
  Grid,
} from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Scrollbars from 'react-custom-scrollbars';
import FitlerDrawer from '../../../components/FitlerDrawer';

const useStyles = makeStyles({
  table: {
    fontSize: 12,
    margin: 'auto',
    borderSpacing: '2px 20px',
    borderCollapse: 'inherit',
  },
});

function TimelineJob() {
  const classes = useStyles();
  const [filter, setfilter] = useState({});
  const [openDrawer, setopenDrawer] = useState(false);
  const [openFitlerDrawer, setOpenFilterDrawer] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [initialMount, setInitialMount] = useState(true);
  const [selectByStatus, setSelectByStatus] = useState('Select Next Steps');

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
          <Grid
            xs={12}
            sm={12}
            md={12}
            justify="flex-start"
            alignItems="center"
          >
            <Typography variant="subtitle1">Timeline</Typography>
          </Grid>
        </Grid>
        <Box sx={{ width: '100%', overflow: 'hidden' }}>
          <Scrollbars style={{ height: '60vh' }}>
            <TableContainer className="table-container-default table-container">
              <Table
                aria-label="table"
                size="small"
                className={classes.table}
              >
                <TableHead>
                  <TableRow>
                    <TableCell className="tablehead-14-roboto border-bottom-tab">
                      Updated On
                    </TableCell>
                    <TableCell className="tablehead-14-roboto border-bottom-tab">
                      Action On
                    </TableCell>
                    <TableCell className="tablehead-14-roboto border-bottom-tab">
                      Details
                    </TableCell>

                    <TableCell className="tablehead-14-roboto border-bottom-tab">
                      Action By
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow className="bordernewcollumn">
                    <TableCell className="tablebody-14-roboto border-bottom-tab">
                      Nov 06, 2020, 11:22 AM
                    </TableCell>
                    <TableCell>
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
                            style={{ fontSize: '16px', marginBottom: 6 }}
                          >
                            {' '}
                            Sahud Khan
                          </Typography>
                          <Typography variant="body1">
                            khansahud@gmail.com
                          </Typography>
                        </ListItemText>
                      </ListItem>
                    </TableCell>
                    <TableCell className="tablebody-14-roboto border-bottom-tab">
                      Candidate moved to interview 1 from Resume
                    </TableCell>
                    <TableCell className="tablebody-14-roboto border-bottom-tab">
                      Bessie Cooper
                    </TableCell>
                  </TableRow>
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

export default TimelineJob;

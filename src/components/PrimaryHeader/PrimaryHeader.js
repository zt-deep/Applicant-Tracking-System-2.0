import React from 'react';
import AppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import { makeStyles } from '@mui/styles';
import PersonAdd from '@material-ui/icons/PersonAdd';
import Settings from '@material-ui/icons/Settings';
import Logout from '@mui/icons-material/Logout';
import {
  ListItemIcon,
  Tooltip,
  Grid,
  ListItemText,
  List,
  ListItem,
  Popover,
  Typography,
} from '@mui/material';
import {
  Nav, NavLink, Bars, NavMenu,
} from '../NavbarElements';

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
}));
function Header() {
  const classes = useStyles();
  // const [value, setValue] = React.useState(0);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <AppBar
        className="css-7551ie sahud"
        style={{
          position: 'sticky',
          backgroundColor: 'white',
          color: 'black',
          boxShadow: 'rgb(0 0 0 / 12%) 0rem 0.125rem 0.125rem',
        }}
      >
        <Grid container>
          <Grid item md={2}>
            <Typography variant="h6" className={classes.title}>
              <img alt="org logo" src="/img/logo.png" width="130" />
            </Typography>
          </Grid>

          <Grid item md={8} align="center" justify="center" alignItems="center">
            <Nav>
              <Bars />

              <NavMenu>
                <NavLink exact activeStyle to="/Dashboard">
                  Dashboard
                </NavLink>
                <NavLink exact activeStyle to="/Myjobs">
                  Jobs
                </NavLink>
                <NavLink exact activeStyle to="/Candidates">
                  Candidates
                </NavLink>
                <NavLink exact activeStyle to="/Workflow">
                  Workflow
                </NavLink>
                <NavLink exact activeStyle to="/Analytics">
                  Analytics
                </NavLink>
                <NavLink exact activeStyle to="/Requisition">
                  Requisition
                </NavLink>
                <NavLink exact activeStyle to="/Interview">
                  Interview
                </NavLink>
                <NavLink exact activeStyle to="/Settings">
                  Settings
                </NavLink>
              </NavMenu>
            </Nav>
          </Grid>

          <Grid
            item
            md={2}
            className={classes.root}
            align="right"
            justify="flex-end"
            alignItems="flex-end"
          >
            <Grid item>
              <Tooltip title="Account settings">
                <IconButton
                  onClick={handleClick}
                  size="small"
                  aria-controls={open ? 'account-menu' : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? 'true' : undefined}
                  style={{ marginTop: 10 }}
                >
                  <Avatar sx={{ width: 32, height: 32 }}>S</Avatar>
                </IconButton>
              </Tooltip>

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
                    <ListItemIcon>
                      <PersonAdd fontSize="small" />
                    </ListItemIcon>
                    <ListItemText
                      primaryTypographyProps={{
                        style: {
                          fontWeight: 500,
                          color: 'inherit',
                        },
                      }}
                    >
                      My Profile
                    </ListItemText>
                  </ListItem>
                  <ListItem className="list-item flex-start-center">
                    <ListItemIcon>
                      <Settings fontSize="small" />
                    </ListItemIcon>
                    <ListItemText
                      primaryTypographyProps={{
                        style: {
                          fontWeight: 500,
                          color: 'inherit',
                        },
                      }}
                    >
                      Settings
                    </ListItemText>
                  </ListItem>
                  <ListItem className="list-item flex-start-center">
                    <ListItemIcon>
                      <Logout fontSize="small" />
                    </ListItemIcon>
                    <ListItemText
                      primaryTypographyProps={{
                        style: {
                          fontWeight: 500,
                          color: 'inherit',
                        },
                      }}
                    >
                      Logout
                    </ListItemText>
                  </ListItem>
                </List>
              </Popover>
            </Grid>
          </Grid>
        </Grid>
      </AppBar>
    </div>
  );
}

export default Header;

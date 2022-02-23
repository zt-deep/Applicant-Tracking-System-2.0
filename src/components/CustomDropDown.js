import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Button from '@mui/material/Button';
import Popover from '@mui/material/Popover';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

function CustomDropDown(props) {
  const {
    menuItem = ['All'],
    selectedMenu = 'All',
    width = 168,
    updateMenu = () => {},
    height = 35,
  } = props;
  const [openPopover, setOpenPopover] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  return (
    <Box>
      <Button
        onClick={({ currentTarget }) => {
          setAnchorEl(currentTarget);
          setOpenPopover(true);
        }}
        variant="outlined"
        color="inherit"
        className="custom-button"
        style={{
          minWidth: width,
          border: props.border ? 'none' : 'block',
          minHeight: height,
        }}
      >
        <Box className="flex-between-center wh-100">
          <Typography variant="body1" sx={{ mr: 0.5 }}>
            {selectedMenu}
          </Typography>
          <KeyboardArrowDownIcon style={{ width: 20, height: 20 }} />
        </Box>
      </Button>
      <Popover
        id="openModal"
        open={openPopover}
        anchorEl={anchorEl}
        onClose={() => setOpenPopover(!openPopover)}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        className="mt-10"
        //   onClose={() => setOpenPopover(false)}
      >
        <List className="list-popover">
          {menuItem.map((item, index) => {
            const { id, name } = item;
            return (
              <ListItem
                key={id}
                value={id}
                onClick={() => {
                  updateMenu(item, index);
                  setOpenPopover(false);
                }}
                variant="menu"
                className="list-item flex-start-center"
              >
                <Typography variant="h6" sx={{ color: 'inherit' }}>
                  {name}
                </Typography>
              </ListItem>
            );
          })}
        </List>
      </Popover>
    </Box>
  );
}

export default CustomDropDown;

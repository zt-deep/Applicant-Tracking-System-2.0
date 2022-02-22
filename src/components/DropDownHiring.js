import React, { useState } from 'react';
import {
  Box, Typography, Popover, Button, List, ListItem,
} from '@mui/material';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';

function DropDownHiring(props) {
  const {
    menuItem = ['All'],
    selectedMenu = 'All',
    width = '100%',
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

        color="inherit"
        className="custom-button2 p-0"
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
          <KeyboardArrowDown style={{ width: 20, height: 20 }} />
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
          {menuItem.map((item, index) => (
            <ListItem
              key={index}
              value={item}
              onClick={() => {
                updateMenu(item, index);
                setOpenPopover(false);
              }}
              variant="menu"
              className="list-item flex-start-center"
            >
              <Typography variant="h6" sx={{ color: 'inherit' }}>
                {item}
              </Typography>
            </ListItem>
          ))}
        </List>
      </Popover>
    </Box>
  );
}

export default DropDownHiring;

import React, { useState } from 'react';
import {
  Box,
  Button,
  IconButton,
  FormControlLabel,
  Typography,
  Divider,
  Slide,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material';
import { Close, KeyboardArrowDown } from '@mui/icons-material';

function FitlerDrawer(props) {
  // const dispatch = useDispatch();
  // const { formFieldValue = {} } = useSelector((state) => state.profileReducer);
  // const { token } = useSelector((state) => state.userReducer);
  const { openFitlerDrawer = false, setOpenFilterDrawer = () => {} } = props;
  const [expand, setExpand] = useState('Designation');
  const [checkedItems, setCheckedItems] = useState({});
  const [AndPushData, SetAndPushData] = useState([]);

  const handleChange = (event) => {
    SetAndPushData([...AndPushData, { Name: event.target.name }]);
    // updating an object instead of a Map

    setCheckedItems({
      ...checkedItems,
      [event.target.name]: event.target.checked,
    });
  };

  // useEffect(() => {
  //   dispatch(getFormFieldValue({ headers: { token } }));
  // }, [dispatch, token]);

  return (
    <Slide in={openFitlerDrawer} className="drawer-container" direction="left">
      <Box className="wh-100 flex-column start-flex">
        <Box sx={{ p: 2 }} className="w-100  flex-between-center">
          <Typography variant="subtitle1">Filters</Typography>
          <IconButton
            onClick={setOpenFilterDrawer}
            sx={{ color: 'primary.main' }}
          >
            <Close />
          </IconButton>
        </Box>
        <Box>
          {AndPushData.map((val, key) => (
            <label>
              <Button
                style={{
                  marginLeft: '5px',
                  marginBottom: '20px',
                  marginRight: '2px',
                }}
                variant="contained"
                color="primary"
              >
                <span> sahud </span>
                <span
                  className="Icon_style"
                  style={{
                    borderRadius: '12px',
                    backgroundColor: 'white',
                    fontSize: '10px',
                  }}
                >
                  <Close />
                </span>
              </Button>
            </label>
          ))}
        </Box>
        <Divider flexItem variant="fullWidth" orientation="horizontal" />

        {[
          { title: 'Designation', keyValue: '7' },
          { title: 'Department', keyValue: '5' },
          { title: 'Location', keyValue: '8' },
          { title: 'Status', keyValue: '125' },
          { title: 'Entity', keyValue: '12' },
          { title: 'Shift', keyValue: '22' },
        ].map((item, index) => (
          <Accordion
            square
            className="mp-0 w-100"
            sx={{ backgroundColor: 'inherit' }}
            expanded={item.title === expand}
            key={index}
          >
            <AccordionSummary
              className="mp-0 w-100"
              expandIcon={<KeyboardArrowDown />}
            >
              <Box
                onClick={() => setExpand(expand === item.title ? '' : item.title)}
                sx={{ px: 2 }}
                className="w-100 flex-start-center cursor-pointer"
              >
                <Typography variant="h3">{item.title}</Typography>
              </Box>
            </AccordionSummary>
            <AccordionDetails className="mp-0">
              <Box
                sx={{ height: 181, pl: 2, pr: 1 }}
                className="overflow-overlay w-100"
              >

                <FormControlLabel

                  className="w-100 m-0"
                  style={{ paddingBottom: 15 }}
                  control={(
                    <input
                      type="checkbox"
                      checked={checkedItems[item.name]}
                      onChange={handleChange}

                      size="small"
                      sx={{ color: false ? 'secondary.main' : '#EBECF0' }}
                    />
                        )}
                  label={(
                    <Typography noWrap sx={{ fontSize: 12 }}>
                      Test
                    </Typography>
                        )}
                />

              </Box>
            </AccordionDetails>
            <Divider flexItem variant="fullWidth" orientation="horizontal" />
          </Accordion>
        ))}
      </Box>
    </Slide>
  );
}

export default FitlerDrawer;

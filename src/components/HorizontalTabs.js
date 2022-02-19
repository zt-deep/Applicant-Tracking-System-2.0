import React from 'react';
import PropTypes from 'prop-types';
import { Tab, Tabs } from '@mui/material';

function HorizontalTabs(props) {
  const { defaultTab, allowedTabs, onchange } = props;
  const tabsList = allowedTabs.map((tab) => (
    <Tab key={tab} label={tab} value={tab} />
  ));
  return (
    <Tabs value={defaultTab} onChange={onchange}>
      {tabsList}
    </Tabs>
  );
}

HorizontalTabs.propTypes = {
  defaultTab: PropTypes.string.isRequired,
  allowedTabs: PropTypes.arrayOf(PropTypes.string).isRequired,
  onchange: PropTypes.func.isRequired,
};

export default HorizontalTabs;

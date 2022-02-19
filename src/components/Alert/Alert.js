import { Alert, AlertTitle } from '@mui/material';
import React from 'react';

function AlertBox(props){
  console.log(props);
  // const {alertType, alertMessage} = props.alertData;

  // const { alertType, alertMessage } = useSelector((state) => {
  //   console.log(state.alert);
  //   return state.alert;
  // });

  return (
    <Alert severity='success'>
      <AlertTitle>Success</AlertTitle>
      {props.alertData}
    </Alert>
  );
} 

export default AlertBox;
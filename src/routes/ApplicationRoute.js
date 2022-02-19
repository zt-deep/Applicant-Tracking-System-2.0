import React from 'react';
import { Route } from 'react-router-dom';
import AuthLayout from './layouts/AuthLayout';

const ApplicationRoute = ({
  isLayoutRequired,
  props: Props,
  component: Component,
  child,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={() => {
        if (isLayoutRequired) {
          return <AuthLayout component={Component} children={child} />;
        } else {
          return <Component children={child} />;
        }
      }}
    />
  );
};

export default ApplicationRoute;

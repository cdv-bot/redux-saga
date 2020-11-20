import React from 'react';
import { Route } from 'react-router-dom';
import Dashboard from './../../../components/Dashboard';
const DefaultLayoutRoute = ({ component: YourComponent, exact, path, name }) => {
  return (
    <Route
      path={path}
      exact={exact}
      render={
        item => {
          return (
            <YourComponent {...item} />
          );
        }
      }
    />
  );
};

export default DefaultLayoutRoute;

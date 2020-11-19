import React from 'react';
import { Route } from 'react-router-dom';
import Dashboard from './../../../components/Dashboard';
const AdminLayoutRoute = ({ component: YourComponent, exact, path, name }) => {
  return (
    <Route
      path={path}
      exact={exact}
      render={
        item => {
          return (
            <Dashboard name={name} >
              <YourComponent {...item} />
            </Dashboard>
          );
        }
      }
    />
  );
};

export default AdminLayoutRoute;

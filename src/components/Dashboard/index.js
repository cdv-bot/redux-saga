import { withStyles } from '@material-ui/core';
import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import style from './style';

const Dashboard = ({ children, classes, name }) => {
  return (
    <div className={classes.dashboard}>
      <Header name={name} />
      <div className={classes.wrapper}>
        <Sidebar />
        {children}
      </div>
    </div >
  );
};

export default withStyles(style)(Dashboard);

import { withStyles } from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';
import styles from './style';
import LoadingIcon from './../../assets/images/loading2.gif';

function GlobalLoading({ classes }) {
  const showLoading = useSelector(state => state.ui.showLoading);
  let xml = null;
  if (showLoading) {
    xml = (<div className={classes.loading}>
      <img src={LoadingIcon} alt="icon loading" className={classes.icon} />
    </div>);
  }
  return xml;
}

export default withStyles(styles)(GlobalLoading);

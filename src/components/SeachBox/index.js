import { TextField, withStyles } from '@material-ui/core';
import React from 'react';
import styles from './style';

SeachBox.propTypes = {

};

function SeachBox({ classes, handChange }) {
  return (
    <div>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField id="standard-basic" label="Mời nhập giá trị" onChange={handChange} />
      </form>
    </div>
  );
}

export default withStyles(styles)(SeachBox);

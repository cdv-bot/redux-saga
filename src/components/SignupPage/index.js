import { Button, Card, CardContent, Checkbox, FormControlLabel, TextField, Typography, withStyles } from '@material-ui/core';
import React from 'react';
import styles from './style';
import { Link } from 'react-router-dom';

const SignupPage = ({ classes }) => {
  return (
    <div className={classes.background}>
      <div className={classes.login}>
        <Card>
          <CardContent>
            <form>
              <div className='text-xs-center pb-xs'>
                <Typography variant="caption">
                  Đăng nhập để tiếp tục
                </Typography>
              </div>
              <TextField
                id="email"
                label='Email'
                className={classes.textField}
                fullWidth
                margin="normal"
              />
              <TextField
                id="password"
                label='Password'
                type="password"
                className={classes.textField}
                fullWidth
                margin="normal"
              />
              <TextField
                id="cpassword"
                label='Confirm password'
                type="password"
                className={classes.textField}
                fullWidth
                margin="normal"
              />
              <FormControlLabel
                control={<Checkbox value='agree' />}
                label='Tôi đã đọc chính sách và đồng ý điều khoản'
                className={classes.fullWidth}
              />
              <Button variant='contained' color='primary' fullWidth type="submit">
                Signup
              </Button>
              <div className='pt-1 text-md-center'>
                <Link to='/login'>
                  <Button>Đăng nhập tài khoản</Button>
                </Link>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default withStyles(styles)(SignupPage);

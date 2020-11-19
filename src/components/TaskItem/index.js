import { withStyles } from '@material-ui/core';
import React from 'react';
import style from './style';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Fab from '@material-ui/core/Fab';
import Icon from '@material-ui/core/Icon';


function TaskItem({ classes, index, task, status, onClickEdit, onHandelDelete }) {
  return (
    <>
      <Card className={classes.root} key={index}>
        <CardContent>
          <Grid container justify="space-between">
            <Grid item md={8}>
              <Typography component="h2">
                {task.title}
              </Typography>
              <Typography component="h3">
                {task.description}
              </Typography>
            </Grid>
            <Grid item md={4}>
              {
                status.label
              }
            </Grid>
          </Grid>
        </CardContent>
        <CardActions className={classes.cardActions}>
          <Fab color="primary" aria-label="edit" onClick={onHandelDelete}>
            <Icon>delete</Icon>
          </Fab>
          <Fab color="primary" aria-label="edit" onClick={onClickEdit}>
            <Icon>group_add</Icon>
          </Fab>
        </CardActions>
      </Card>
    </>
  );
}

export default withStyles(style)(TaskItem);

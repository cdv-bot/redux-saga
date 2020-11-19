import React from 'react';
import { withStyles } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import TaskItem from '../TaskItem';
import style from './style';

function TaskList({ status, index, taskFillter, classes, onClickEdit, onHandelDeletes }) {
  return (
    <>
      <Grid item md={4} xs={12} key={index}>
        <div>
          {taskFillter.map((task, index) => (
            <TaskItem key={index} task={task} index={index} status={status} onClickEdit={() => onClickEdit(task)} onHandelDelete={() => onHandelDeletes(task.id)} />
          ))}
        </div>
      </Grid>
    </>
  );
}

export default withStyles(style)(TaskList);

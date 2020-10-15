import React from 'react';
import { withStyles } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import TaskItem from '../TaskItem';
import style from './style';

function TaskList({ status, index, taskFillter, classes }) {
    return (
        <>
            <Grid item md={4} xs={12} key={index} >
                <div>
                    {taskFillter.map((task, index) => (
                        <TaskItem key={index} task={task} index={index} status={status} />
                    ))}
                </div>
            </Grid>
        </>
    );
}

export default withStyles(style)(TaskList);
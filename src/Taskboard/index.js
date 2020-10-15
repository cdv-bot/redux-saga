import { withStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import AddIcon from '@material-ui/icons/Add';
import React from 'react';
import Taskform from '../components/TaskForm';
import TaskList from '../components/TaskList';
import { STATUSES } from '../constants';
import style from './style';


function Taskboard({ classes }) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const showAdd = () => {
    return (
      <Taskform open={open} handleClose={handleClose} />
    );
  };

  const listTask = [
    {
      id: 1,
      title: "Read book",
      description: "Read material ui book",
      status: 0
    },
    {
      id: 2,
      title: "Play football",
      description: "Read material ui book",
      status: 2
    },
    {
      id: 3,
      title: "Play game",
      description: "",
      status: 1
    }
  ];
  const xhtml = () => {
    return (
      <Grid container spacing={2}>
        {
          STATUSES.map((status, index) => {
            const taskFillter = listTask.filter(task => task.status === status.value);
            return (
              <TaskList key={index} status={status} index={index} taskFillter={taskFillter} />
            );
          })
        }
      </Grid>);
  }

  return (
    <div className={classes.taskboard}>
      <Button variant="contained" color="primary" className={classes.shape} onClick={handleClickOpen}>
        <AddIcon /> Thêm mới công việc
      </Button>
      {xhtml()}
      {showAdd()}
    </div>
  );
}

export default withStyles(style)(Taskboard);
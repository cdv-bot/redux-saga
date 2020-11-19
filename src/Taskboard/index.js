import { Box, withStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import AddIcon from '@material-ui/icons/Add';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeModalContent, changeModalTitle, hideModal, showModal } from '../actions/modal';
import { fetchListTask, filterTask, setTaskEditing, DeleteTask } from '../actions/task';
import SeachBox from '../components/SeachBox';
import TaskForm from '../components/TaskForm';
import TaskList from '../components/TaskList';
import { STATUSES } from '../constants';
import style from './style';
import cl from 'classnames';


function Taskboard({ classes }) {
  const open = useSelector(state => state.ui.hideSidebar);
  const dispatch = useDispatch();
  const handClose = () => {
    dispatch(hideModal());
  };
  const handleClickOpen = () => {
    dispatch(setTaskEditing(null));
    dispatch(showModal());
    dispatch(changeModalTitle("thêm mới công việc"));
    dispatch(changeModalContent(<TaskForm handleClose={handClose} />));
  };


  useEffect(() => {
    dispatch(fetchListTask());
  }, [dispatch]);

  //edit
  const onClickEdits = (task) => {
    dispatch(setTaskEditing(task));
    dispatch(showModal());
    dispatch(changeModalTitle("Chỉnh sửa công việc"));
    dispatch(changeModalContent(<TaskForm handleClose={handClose} />));
  };

  const handleDelete = id => {
    dispatch(DeleteTask(id));
  };

  //delete
  const onHandlDelete = id => {
    dispatch(showModal());
    dispatch(changeModalTitle("Xóa công việc"));
    dispatch(changeModalContent(
      <div className={classes.shape}>
        <b>
          Bạn có muốn xóa không !!!
        </b>
        <Box display="flex" flexDirection="row-reverse" mt={2}>
          <Box ml={1}>
            <Button variant="contained" onClick={handClose}>
              Hủy bỏ
            </Button>
          </Box>
          <Box>
            <Button variant="contained" onClick={() => handleDelete(id)}>
              Đồng ý
            </Button>
          </Box>
        </Box>
      </div>
    ));
  };

  const listTask = useSelector(state => state.task.listTask);
  const xhtml = () => {
    return (
      <Grid container spacing={2}>
        {
          STATUSES.map((status, index) => {
            const taskFillter = listTask.filter(task => task.status === status.value);
            return (
              <TaskList className={classes.mg} key={index} status={status} index={index} taskFillter={taskFillter} onClickEdit={onClickEdits} onHandelDeletes={onHandlDelete} />
            );
          })
        }
      </Grid>);
  }

  const handChange = e => {
    const { value } = e.target;
    dispatch(filterTask(value));
  };

  const renderSeach = () => {
    let xml = (<SeachBox handChange={handChange} />
    );
    return xml;
  };

  return (
    <div className={cl(classes.taskboard, {
      [classes.tas]: open === false
    })}>
      <Button variant="contained" color="primary" className={classes.shape} onClick={handleClickOpen}>
        <AddIcon /> Thêm mới công việc
      </Button>
      {renderSeach()}
      {xhtml()}
    </div>
  );
}

export default withStyles(style)(Taskboard);

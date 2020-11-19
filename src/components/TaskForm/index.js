import { Button, withStyles } from '@material-ui/core';
import React from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { compose } from 'redux';
import { Field, reduxForm } from 'redux-form';
import renderSelectField from '../FormHelper/Select';
import renderTextField from '../FormHelper/TextField';
import * as typesAction from './../../actions/task';
import style from './style';
import validate from './validate';


function Taskform(props) {
  const dispatch = useDispatch();
  const taskEditing = useSelector(state => state.task.taskEditing);

  const { handleClose, classes, handleSubmit, invalid, submitting } = props;
  const handleSubmitForm = data => {
    const { title, description, status } = data;
    if (taskEditing && taskEditing.id) {
      dispatch(typesAction.UpdateTask(title, description, status));
      handleClose();
    } else {
      dispatch(typesAction.AddTask(title, description));
    }

  };

  const rederStatusSelection = () => {
    let xhtml = null;
    if (taskEditing && taskEditing.id) {
      xhtml = (
        <Field
          id="status"
          label="Trạng thái"
          className={classes.select}
          name='status'
          component={renderSelectField}
        >
          <option value={0}>Read</option>
          <option value={1}>In progress</option>
          <option value={2}>Completed</option>
        </Field>
      );
    }
    return xhtml;
  };

  return (
    <div>
      <form onSubmit={handleSubmit(handleSubmitForm)} className={classes.root}>
        <Field
          id="standard-basic"
          label="Tiêu đề"
          className={classes.TextField}
          // margin='normal'
          name='title'
          component={renderTextField}
        />
        <Field
          id="standard"
          label="Mô tả"
          className={classes.TextField}
          // margin='normal'
          name='description'
          component={renderTextField}
        />
        {rederStatusSelection()}
        <div>
          <Button
            variant="contained"
            color="secondary"
            type='submit'
            disabled={invalid || submitting}
          >
            Lưu lại
           </Button>
          <Button variant="contained" ml={1} onClick={handleClose}>Hủy bỏ</Button>
        </div>
      </form>
    </div>
  );
}

const withReduxForm = reduxForm({
  form: 'TASK_MANAGEMENT',
  validate,
});

const withReduxForma = connect(
  state => {
    return { initialValues: state.task.taskEditing };
  }
);

export default compose(
  withStyles(style),
  withReduxForma,
  withReduxForm,
)(Taskform);

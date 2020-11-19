import { Modal, withStyles } from '@material-ui/core';
import Clear from '@material-ui/icons/Clear';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { hideModal } from './../../actions/modal';
import style from './style';

function Modals({ classes }) {
  const stateModal = useSelector(state => state.modal);
  const dispatch = useDispatch();
  const { showModal, title, component } = stateModal;
  const handleClose = () => {
    dispatch(hideModal());
  };
  return (
    <Modal open={showModal} className={classes.modal} onClose={handleClose}>
      <classes.modal>
        <div className={classes.texts}>
          <div >
            {title}
          </div>
          <Clear className={classes.icon} onClick={handleClose} />
        </div>
        {component}
      </classes.modal>
    </Modal>
  );
}

export default withStyles(style)(Modals);

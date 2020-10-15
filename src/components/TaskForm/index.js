import { Button, DialogActions, DialogContent, TextField, withStyles } from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import React from 'react';
import style from '../TaskItem/style';


function Taskform({ open, handleClose, classes }) {
    return (
        <>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{"Thêm công việc !!!"}</DialogTitle>
                <DialogContent>
                    <TextField label="Standard" />
                    <TextField label="Standard" />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Disagree
                 </Button>
                    <Button onClick={handleClose} color="primary" autoFocus>
                        Agree
                 </Button>
                </DialogActions>
            </Dialog>
        </>
    );
}

export default withStyles(style)(Taskform);
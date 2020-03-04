import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button } from '@material-ui/core';

export default ({title, message, onConfirm, onCancel}) => {
  return (
    <Dialog maxWidth="lg" open={message ? true : false} onClose={onCancel} aria-labelledby="customized-dialog-title">
      <DialogTitle id="customized-dialog-title">{title}</DialogTitle>
      <DialogContent>
        <DialogContentText>{message}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button color="primary" variant="text" onClick={onConfirm}>{'Aceptar'}</Button>
        <Button color="secondary" variant="text" onClick={onCancel}>{'Cancelar'}</Button>
      </DialogActions>
    </Dialog>
  );
};
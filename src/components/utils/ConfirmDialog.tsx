import React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle'
import { TypeConfirmDialog } from '@/types/model';

type propConfirmDialog = {
    confirmDialog: TypeConfirmDialog
    setConfirmDialog: React.Dispatch<React.SetStateAction<TypeConfirmDialog>>
} 

const ConfirmationDialog: React.FC<propConfirmDialog> = ({confirmDialog, setConfirmDialog}) => {

  return (
      <Dialog open={confirmDialog.isOpen} onClose={()=>confirmDialog.isOpen}>
        <DialogTitle>{confirmDialog.title}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {confirmDialog.description}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button 
            onClick={() => setConfirmDialog({
            ...confirmDialog,
            isOpen: false
            })} 
            color="primary"
          >
            Cancel
          </Button>
          <Button onClick={confirmDialog.onConfirm} color="primary" autoFocus>
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
  );
}

export default ConfirmationDialog;

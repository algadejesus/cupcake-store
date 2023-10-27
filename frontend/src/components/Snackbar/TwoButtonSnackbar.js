import * as React from 'react';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import CloseIcon from '@mui/icons-material/Close';

import IconButton from '@mui/material/IconButton';
import EditIcon from "@mui/icons-material/ModeEditOutlineSharp";
import SendIcon from '@mui/icons-material/Send';
import AddIcon from "@mui/icons-material/Add";
import CancelIcon from '@mui/icons-material/Cancel';
import SnackbarPosition from './SnackbarPosition';

export default function TwoButtonSnackbar() {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const action = (
    <React.Fragment>
      <Button color="secondary" size="small" onClick={handleClose}>
        NÃO
      </Button>
      <Button color="secondary" size="small" onClick={handleClose}>
        SIM
      </Button>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  return (
    <div>
      <Button variant="contained" endIcon={<SendIcon /> } onClick={handleClick}>SALVAR</Button>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message="Deseja salvar?"
        action={action}
      />
    </div>
  );
}
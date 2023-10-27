import React, { useState, useEffect } from "react";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

import SendIcon from '@mui/icons-material/Send';
import EditIcon from '@mui/icons-material/ModeEditOutlineSharp';
import CancelIcon from '@mui/icons-material/Cancel';


export default function ButtonAddEditDelet() {

  
  return (
    <Stack direction="row" spacing={1}>
      <Button
      variant="contained" 
      startIcon={<CancelIcon />}>
        Cancelar
      </Button>
      <Button variant="contained" endIcon={<EditIcon />}>
        Editar
      </Button>
      <Button variant="contained" endIcon={<SendIcon />}>
        Salvar
      </Button>
    </Stack>
  );
}
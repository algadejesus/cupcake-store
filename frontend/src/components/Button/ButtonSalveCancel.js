import React, { useState, useEffect } from "react";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

import SendIcon from '@mui/icons-material/Send';
import CancelIcon from '@mui/icons-material/Cancel';


export default function ButtonSalveCancel() {

  
  return (
    <Stack direction="row" spacing={1}>
      <Button
      variant="contained" 
      startIcon={<CancelIcon />}>
        Cancelar
      </Button>
      <Button variant="contained" endIcon={<SendIcon />}>
        Salvar
      </Button>
    </Stack>
  );
}
import React, { useState, useEffect } from "react";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

import EditIcon from '@mui/icons-material/ModeEditOutlineSharp';
import AddIcon from '@mui/icons-material/Add';
import ModalCompany from 'components/Cards/ModalCompany';


export default function ButtonAddEdit() {

  const [isModalOpen, setIsModalOpen] = useState(false);
  
  return (
    <Stack direction="row" spacing={1}>
      <Button
        variant="contained"
        onClick={() => setIsModalOpen(true)}
      >
        <AddIcon/>
      </Button>
        {isModalOpen ? <ModalCompany/> : null}
      <Button 
        variant="contained"
        onClick={() => setIsModalOpen(true)}
        >
        <EditIcon/>
      </Button>
        {isModalOpen ? <ModalCompany/> : null}
    </Stack>
  );
}
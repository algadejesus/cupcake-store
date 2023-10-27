import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import EditIcon from '@mui/icons-material/ModeEditOutlineSharp';
import AddIcon from '@mui/icons-material/Add';
import ModalCompany from 'components/Cards/ModalCompany';


export default function ButtonMain(props) {

    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
    <Box className="btn-group-edit" >
        <ButtonGroup >
            <Button
                variant="contained" 
                size="large" 
                color="primary"
                onClick={() => setIsModalOpen(true)} 
            >
                <AddIcon/>
            </Button>
            {isModalOpen ? <ModalCompany/> : null}
        </ButtonGroup>
    </Box>
    );
}

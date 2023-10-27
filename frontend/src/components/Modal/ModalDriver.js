import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";

import Divider from "@mui/material/Divider";
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import EditIcon from '@mui/icons-material/ModeEditOutlineSharp';
import AddIcon from '@mui/icons-material/Add';
import SendIcon from '@mui/icons-material/Send';
import CancelIcon from '@mui/icons-material/Cancel';
import Stack from '@mui/material/Stack';

import ModalCategory from "./ModalCategory";

export default function ModalDriver(props) {

  const [category, setCategory] = React.useState("");

  const hcCategory = (event) => {
    setCategory(event.target.value);
  };

  const [isModalCategory, setiIsModalCategory] = React.useState(false);

  return (
    <>
      <Box className="modal-transp">
        <Container maxWidth="sm" >
          <Grid
            container
            className="card-entrada"
            sx={{ flexGrow: 1, p: 2, mt: 1 }}
          >
            <Grid item xs={12} className="text-title">
              <Box>MOTORISTA</Box>
            </Grid>
            <Grid item xs={12} className="divider-form">
              <Divider variant="middle" orientation="horizontal" />
            </Grid>
            <Grid item xs={12} md={2.3}>
                <Box>
                  <FormControl sx={{ width: "100%"}}>
                    <TextField
                      id=""
                      label="Código"
                      disabled
                      defaultValue="0000001"
                    />
                  </FormControl>
                </Box>
            </Grid>
            <Grid item xs={12} md={9.3}>
                <Box>
                  <FormControl sx={{ width: "100%"}}>
                    <TextField
                      id=""
                      label="Motorista"
                      // disabled
                      defaultValue="Nome Fictício de Souza Oliveira"
                    />
                  </FormControl>
                </Box>
            </Grid>
            <Grid item xs={12} md={4}>
                <Box>
                  <FormControl sx={{ width: "100%"}}>
                    <TextField
                      id=""
                      label="CPF"
                      // disabled
                      defaultValue="777.888.999-00"
                    />
                  </FormControl>
                </Box>
            </Grid>
            <Grid item xs={12} md={4}>
                <Box>
                  <FormControl sx={{ width: "100%"}}>
                    <TextField
                      id=""
                      label="CNH"
                      // disabled
                      defaultValue="05285864826"
                    />
                  </FormControl>
                </Box>
            </Grid>
          <Grid item xs={12} md={3.2}>
            <Box>
              <FormControl sx={{ width: "100%" }} className="gap-grid-edit">
                <InputLabel id="entradaCCD">Categoria</InputLabel>
                <Select
                  labelId="demo-simple-select-helper-label"
                  id="demo-simple-select-helper"
                  value={category}
                  label="Container"
                  onChange={hcCategory}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                    <MenuItem value={10}>A</MenuItem>
                    <MenuItem value={20}>B</MenuItem>
                    <MenuItem value={30}>C</MenuItem>
                    <MenuItem value={40}>D</MenuItem>
                    <MenuItem value={50}>E</MenuItem>
                    <MenuItem value={60}>AB</MenuItem>
                </Select>
                <Box className="btn-group-edit" >
                  <ButtonGroup variant="contained" size="large" color="primary">
                      <Button
                          onClick={() => setiIsModalCategory(true)} 
                      >
                          <AddIcon/>
                      </Button>
                      {isModalCategory ? <ModalCategory onClose={() => setiIsModalCategory(false)} /> : null}
                      <Button>
                          <EditIcon/>
                      </Button>
                  </ButtonGroup>
                </Box>
              </FormControl>
            </Box>
          </Grid>
            <Grid item xs={12} className="divider-form">
              <Divider variant="middle" orientation="horizontal" />
            </Grid>
            <Grid item xs={12}>
              <Stack direction="row" spacing={1}>
                <Button
                variant="contained" 
                onClick={props.onClose}
                startIcon={<CancelIcon />}>
                  Cancelar
                </Button>
                <Button variant="contained" endIcon={<SendIcon />}>
                  Salvar
                </Button>
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}

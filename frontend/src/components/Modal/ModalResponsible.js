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
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import EditIcon from "@mui/icons-material/ModeEditOutlineSharp";
import AddIcon from "@mui/icons-material/Add";
import SendIcon from "@mui/icons-material/Send";
import CancelIcon from "@mui/icons-material/Cancel";
import Stack from "@mui/material/Stack";

import ModalSector from "./ModalSector";

export default function ModalResponsible(props) {

  const [sector, setSector] = React.useState("");

  const hcSector = (event) => {
    setSector(event.target.value);
  };

  const [isModalSector, setIsModalSector] = React.useState(false);

  return (
    <>
      <Box className="modal-transp">
        <Container maxWidth="sm">
          <Grid
            container
            className="card-entrada"
            sx={{ flexGrow: 1, p: 2, mt: 1 }}
          >
            <Grid item xs={12} className="text-title">
              <Box>{props.title}</Box>
            </Grid>
            <Grid item xs={12} className="divider-form">
              <Divider variant="middle" orientation="horizontal" />
            </Grid>
            <Grid item xs={12} md={3}>
              <Box>
                <FormControl sx={{ width: "100%" }}>
                  <TextField
                    id=""
                    label="Código"
                    disabled
                    defaultValue="0001"
                  />
                </FormControl>
              </Box>
            </Grid>
            <Grid item xs={12} md={8.6}>
              <Box>
                <FormControl sx={{ width: "100%" }}>
                  <TextField
                    id=""
                    label="Nome"
                    // disabled
                    defaultValue="Leandro dos Santos Fictício"
                  />
                </FormControl>
              </Box>
            </Grid>
            <Grid item xs={12} md={5.8}>
              <Box>
                <FormControl sx={{ width: "100%" }}>
                  <TextField
                    id=""
                    label="Matricula"
                    // disabled
                    defaultValue="20082548"
                  />
                </FormControl>
              </Box>
            </Grid>
            <Grid item xs={12} md={5.8}>
              <Box>
                <FormControl sx={{ width: "100%" }} className="gap-grid-edit">
                  <InputLabel id="entradaCCD">Setor</InputLabel>
                  <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    value={sector}
                    label="Setor"
                    onChange={hcSector}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Portaria</MenuItem>
                    <MenuItem value={20}>Estoque</MenuItem>
                    <MenuItem value={30}>Compras</MenuItem>
                  </Select>
                  <Box className="btn-group-edit">
                    <ButtonGroup
                      variant="contained"
                      size="large"
                      color="primary"
                    >
                      <Button onClick={() => setIsModalSector(true)}>
                        <AddIcon />
                      </Button>
                      {isModalSector ? (
                        <ModalSector onClose={() => setIsModalSector(false)} />
                      ) : null}
                      <Button>
                        <EditIcon />
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
                  startIcon={<CancelIcon />}
                >
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

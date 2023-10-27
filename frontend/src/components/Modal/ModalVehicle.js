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

import ModalVehicleType from "./ModalVehicleType";

export default function ModalVehicle(props) {
  const [vehicleType, setVehicleType] = React.useState("");

  const hcVehicleType = (event) => {
    setVehicleType(event.target.value);
  };

  const [isVehicleType, setIsVehicleType] = React.useState(false);

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
            <Grid item xs={12} md={4.1}>
              <Box>
                <FormControl sx={{ width: "100%" }}>
                  <TextField
                    id=""
                    label="Placa"
                    // disabled
                    defaultValue="HKJX-25416"
                  />
                </FormControl>
              </Box>
            </Grid>
            <Grid item xs={12} md={4.1}>
              <Box>
                <FormControl sx={{ width: "100%" }} className="gap-grid-edit">
                  <InputLabel id="entradaCCD">Tipo</InputLabel>
                  <Select
                    defaultValue="HKJX-25416"
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    value={vehicleType}
                    label="Tipo"
                    onChange={hcVehicleType}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={1}>Automóvel</MenuItem>
                    <MenuItem value={3}>Caminhonete</MenuItem>
                    <MenuItem value={4}>Caminhão</MenuItem>
                    <MenuItem value={5}>Container</MenuItem>
                    <MenuItem value={2}>Semi-reboque</MenuItem>
                  </Select>
                  <Box className="btn-group-edit">
                    <ButtonGroup
                      variant="contained"
                      size="large"
                      color="primary"
                    >
                      <Button onClick={() => setIsVehicleType(true)}>
                        <AddIcon />
                      </Button>
                      {isVehicleType ? (
                        <ModalVehicleType
                          onClose={() => setIsVehicleType(false)}
                        />
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

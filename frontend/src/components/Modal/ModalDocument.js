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

import ModalDocType from "./ModalDocType";

export default function ModalDocument(props) {

  const [docType, setDocType] = React.useState("");

  const hcDocType = (event) => {
    setDocType(event.target.value);
  };

  const [isDocType, setIsDocType] = React.useState(false);

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
              <Box>DOCUMENTO</Box>
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
                    // defaultValue="0001"
                  />
                </FormControl>
              </Box>
            </Grid>
            <Grid item xs={12} md={4.1}>
              <Box>
                <FormControl sx={{ width: "100%" }}>
                  <TextField
                    id=""
                    label="Número"
                    // disabled
                    // defaultValue="000005698"
                  />
                </FormControl>
              </Box>
            </Grid>
            <Grid item xs={12} md={4.1}>
              <Box>
                <FormControl sx={{ width: "100%" }} className="gap-grid-edit">
                  <InputLabel id="entradaCCD">Tipo</InputLabel>
                  <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    value={docType}
                    label="Tipo"
                    onChange={hcDocType}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Nota Fiscal</MenuItem>
                    <MenuItem value={20}>CT-E</MenuItem>
                    <MenuItem value={30}>D.I</MenuItem>
                  </Select>
                  <Box className="btn-group-edit">
                    <ButtonGroup
                      variant="contained"
                      size="large"
                      color="primary"
                    >
                      <Button onClick={() => setIsDocType(true)}>
                        <AddIcon />
                      </Button>
                      {isDocType ? (
                        <ModalDocType
                          onClose={() => setIsDocType(false)}
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

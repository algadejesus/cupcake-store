import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";

import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";

import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import SendIcon from "@mui/icons-material/Send";
import CancelIcon from "@mui/icons-material/Cancel";
import Button from "@mui/material/Button";

export default function ModalDocType(props) {
  return (
    <>
      <Box className="modal-transp">
        <Container maxWidth="xs">
          <Grid
            container
            className="card-entrada"
            sx={{ flexGrow: 1, p: 2, mt: 1 }}
          >
            <Grid item xs={12} className="text-title">
              <Box>TIPO DE DOCUMENTO</Box>
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
            <Grid item xs={12} md={8.4}>
              <Box>
                <FormControl sx={{ width: "100%" }}>
                  <TextField
                    id=""
                    label="Tipo de Documento"
                    // disabled
                    // defaultValue="Nota Fiscal"
                  />
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

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
import ButtonSalveCancel from "components/Button/ButtonSalveCancel";

import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import EditIcon from '@mui/icons-material/ModeEditOutlineSharp';
import AddIcon from '@mui/icons-material/Add';


export default function ModaFleet(props) {
  const [company, setCompany] = useState([]);
  const [companyList, setCompanyList] = useState([]);

  const [isTipo, setiIsTipo] = React.useState(false);

  return (
    <>
      <Box className="modal-transp">
        <Container maxWidth="xs" >
          <Grid
            container
            className="card-entrada"
            sx={{ flexGrow: 1, p: 2, mt: 1 }}
          >
            <Grid item xs={12} className="text-title">
              <Box>FROTA</Box>
            </Grid>
            <Grid item xs={12} className="divider-form">
              <Divider variant="middle" orientation="horizontal" />
            </Grid>
            <Grid item xs={12} md={3}>
                <Box>
                  <FormControl sx={{ width: "100%"}}>
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
                  <FormControl sx={{ width: "100%"}}>
                    <TextField
                      id=""
                      label="Frota"
                      disabled
                      // defaultValue=" TFD-5248"
                    />
                  </FormControl>
                </Box>
            </Grid>
            <Grid item xs={12} className="divider-form">
              <Divider variant="middle" orientation="horizontal" />
            </Grid>
            <Grid item xs={12}>
              <ButtonSalveCancel/>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}

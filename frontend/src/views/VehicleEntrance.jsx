import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";

import InputLabel from "@mui/material/InputLabel";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Divider from "@mui/material/Divider";
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Stack from '@mui/material/Stack';

// Modules
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import EditIcon from "@mui/icons-material/ModeEditOutlineSharp";
import SendIcon from '@mui/icons-material/Send';
import AddIcon from "@mui/icons-material/Add";
import CancelIcon from '@mui/icons-material/Cancel';

import ModalCompany from "components/Modal/ModalCompany";
import ModalDriver from "components/Modal/ModalDriver";
import ModalVehicle from "components/Modal/ModalVehicle";
import ModalSituation from "components/Modal/ModalSituation";
import ModalDocument from "components/Modal/ModalDocument";
import ModalContainer from "components/Modal/ModalContainer";
import ModalResponsible from "components/Modal/ModalResponsible";
import axios from 'axios';


const baseurl = "http://localhost:3002/api/";
// const baseurl = window.location.origin.toString() + "/api/"

export default function VehicleEntrance(props) {
  const [ccd, setCCD] = React.useState("");

  const hcCDD = (event) => {
    setCCD(event.target.value);
  };

  const hcCliente = (event) => {
    setCliente(event.target.value);
  };

  const [driver, setDriver] = React.useState("");
  const [isModalDriver, setIsModalDriver] = React.useState(false);

  const hcDriver = (event) => {
    setDriver(event.target.value);
  };

  const [vehicle, setVehicle] = React.useState("");
  const [isModalVehicle, setIsModalVehicle] = React.useState(false);

  const hcVehicle = (event) => {
    setVehicle(event.target.value);
  };

  const [situation, setSituation] = React.useState("");
  const [isModalSituation, setIsModalSituation] = React.useState(false);

  const hcSituation = (event) => {
    setSituation(event.target.value);
  };

  const [board, setBoard] = React.useState("");
  const [isModalBoard, setIsModalBoard] = React.useState(false);

  const hcBoard = (event) => {
    setBoard(event.target.value);
  };

  const [container, setContainer] = React.useState("");
  const [isModalContainer, setIsModalContainer] = React.useState(false);

  const hcContainer = (event) => {
    setContainer(event.target.value);
  };

  const [document, setDocument] = React.useState("");
  const [isModalDocument, setIsModalDocument] = React.useState(false);

  const hcDocument = (event) => {
    setDocument(event.target.value);
  };

  const [autho, setAutho] = React.useState("");
  const [isModalAutho, setIsModalAutho] = React.useState(false);

  const hcAutho = (event) => {
    setAutho(event.target.value);
  };

  const [releasedBy, setReleasedBy] = React.useState("");
  const [isModalReleasedBy, setIsModalReleasedBy] = React.useState(false);

  const hcReleasedBy = (event) => {
    setReleasedBy(event.target.value);
  };

  const [entryDate, setEntryDate] = React.useState("");

  const hcEntryDate = (event) => {
    setEntryDate(event.target.value);
  };

  const [entryTime, setEntryTime] = React.useState("");

  const hcEntryTime = (event) => {
    setEntryTime(event.target.value);
  };

  const [entryNote, setEntryNote] = React.useState("");

  const hcEntryNote = (event) => {
    setEntryNote(event.target.value);
  };

  const [cliente, setCliente] = useState([]); // #company
  const [clienteList, setClienteList] = useState([]);
  const [isModalCliente, setIsModalCliente] = useState(false);

  // useEffect(() => {
  // // #company
  //   axios.get(baseurl+"company")
  //     .then(response => {
  //       const dadosCampany=response.data
  //       setCliente(dadosCampany)
  //       console.log(dadosCampany)
  //     });
  // },[]);

  useEffect(() => {
    // #company
    fetch(baseurl+"company")
      .then((res) => res.json())
      .then(
        (result)=> {
          setCliente(result)
          console.log(result)
        }
      )
  },[]);

  return (
    <>
      <Box>
        <div>
          {cliente.map(
            selectCliente=> <div key={selectCliente.idCliente}>Enpresa: {selectCliente.usuario_id} - CNPJ: {selectCliente.usuario_id}</div>
          )}
        </div>
        <Container maxWidth="lg">
          <Grid
            container
            className="card-entrada"
            sx={{ flexGrow: 1, p: 2, mt: 1 }}
          >
            <Grid item xs={12} className="text-title">
              <Box>ENTRADA</Box>
            </Grid>
            <Grid item xs={12} className="divider-form">
              <Divider variant="middle" orientation="horizontal" />
            </Grid>
            <Grid item xs={12} sm={2} md={3} lg={3}> {/* #CDD*/}
              <Box>
                <FormControl sx={{ width: "100%" }}>
                  <TextField
                    id=""
                    label="CCD"
                    disabled
                    defaultValue="CCD0001"
                  />
                </FormControl>
              </Box>
            </Grid>
            <Grid item xs={12} sm={9.6} md={8.75} lg={8.8}> {/* #company */}
              <Box>
                <FormControl sx={{ width: "100%" }} className="gap-grid-edit">
                  <InputLabel id="entradaCCD">Empresa</InputLabel>
                  <Select
                    value={clienteList}
                    label="Empresa"
                    onChange={hcCliente}
                    options={clienteList}
                    // getOptionLabel={(options) => options["comprany"]}
                    // getOptionValue={(options) => options["idcompany"]}
                  >
                  </Select>
                  <Box className="btn-group-edit">
                    <ButtonGroup
                      variant="contained"
                      size="large"
                      color="primary"
                    >
                      <Button onClick={() => setIsModalCliente(true)}>
                        <AddIcon />
                      </Button>
                      {isModalCliente ? (
                        <ModalCompany
                          onClose={() => setIsModalCliente(false)}
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
            <Grid item xs={12} sm={12} md={7.75} lg={7.8}> {/* #motorista*/}
              <Box>
                <FormControl sx={{ width: "100%" }} className="gap-grid-edit">
                  <InputLabel id="entradaCCD">Motorista</InputLabel>
                  <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    value={driver}
                    label="Motorista"
                    onChange={hcDriver}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Carlos dos Santos</MenuItem>
                    <MenuItem value={20}>Gustavo Martins</MenuItem>
                    <MenuItem value={30}>José Amaral</MenuItem>
                  </Select>
                  <Box className="btn-group-edit">
                    <ButtonGroup
                      variant="contained"
                      size="large"
                      color="primary"
                    >
                      <Button onClick={() => setIsModalDriver(true)}>
                        <AddIcon />
                      </Button>
                      {isModalDriver ? (
                        <ModalDriver onClose={() => setIsModalDriver(false)} />
                      ) : null}
                      <Button>
                        <EditIcon />
                      </Button>
                    </ButtonGroup>
                  </Box>
                </FormControl>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4} md={4} lg={4}> {/* #veículo*/}
              <Box>
                <FormControl sx={{ width: "100%" }} className="gap-grid-edit">
                  <InputLabel id="entradaCCD">Veículo</InputLabel>
                  <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    value={vehicle}
                    label="Veículo"
                    onChange={hcVehicle}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>TXR-F527</MenuItem>
                    <MenuItem value={20}>JXT-45D8</MenuItem>
                    <MenuItem value={30}>QT5-D5R2</MenuItem>
                    <MenuItem value={40}>Container</MenuItem>
                  </Select>
                  <Box >
                    <Grid container direction="row">
                      <Grid item xs={6} >
                        <FormGroup>
                          <FormControlLabel control={<Checkbox defaultChecked />} label="Reboque" />
                        </FormGroup>
                      </Grid>
                      <Grid item xs={6} className="btn-vehicle">
                        <ButtonGroup
                          variant="contained"
                          size="large"
                          color="primary"
                        >
                          <Button onClick={() => setIsModalVehicle(true)}>
                            <AddIcon />
                          </Button>
                          {isModalVehicle ? (
                            <ModalVehicle
                              onClose={() => setIsModalVehicle(false)}
                              title="VEÍCULO"
                            />
                          ) : null}
                          <Button>
                            <EditIcon />
                          </Button>
                        </ButtonGroup>
                      </Grid>
                    </Grid>
                  </Box>
                </FormControl>
              </Box>
            </Grid>
            <Grid item xs={12} sm={3.2} md={2.3} lg={2}> {/* #situação*/}
              <Box>
                <FormControl sx={{ width: "100%" }} className="gap-grid-edit">
                  <InputLabel id="entradaCCD">Situação</InputLabel>
                  <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    value={situation}
                    label="Situação"
                    onChange={hcSituation}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Cheio</MenuItem>
                    <MenuItem value={20}>Vazio</MenuItem>
                  </Select>
                  <Box className="btn-group-edit">
                    <ButtonGroup
                      variant="contained"
                      size="large"
                      color="primary"
                    >
                      <Button onClick={() => setIsModalSituation(true)}>
                        <AddIcon />
                      </Button>
                      {isModalSituation ? (
                        <ModalSituation
                          onClose={() => setIsModalSituation(false)}
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
            {/* {(vehicle === 40)? x :null} */}
            <Grid item xs={12} sm={4} md={2.3} lg={2.5}> {/* #prancha*/}
              <Box>
                <FormControl sx={{ width: "100%" }} className="gap-grid-edit">
                  <InputLabel id="entradaCCD">Prancha</InputLabel>
                  <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    value={board}
                    label="Prancha"
                    onChange={hcBoard}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>TXR-F8R3</MenuItem>
                    <MenuItem value={20}>F5E-45D8</MenuItem>
                    <MenuItem value={30}>XT5-D5R2</MenuItem>
                  </Select>
                  <Box className="btn-group-edit">
                    <ButtonGroup
                      variant="contained"
                      size="large"
                      color="primary"
                    >
                      <Button onClick={() => setIsModalBoard(true)}>
                        <AddIcon />
                      </Button>
                      {isModalBoard ? (
                        <ModalVehicle
                          onClose={() => setIsModalBoard(false)}
                          title="PRANCHA"
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
            <Grid item xs={12} sm={3.6} md={2} lg={2}> {/* #frota*/}
              <Box>
                <FormControl sx={{ width: "100%" }}>
                  <TextField
                    id=""
                    label="Frota"
                    // disabled
                    defaultValue="TGP-9621"
                  />
                </FormControl>
              </Box>
            </Grid>
            {/* {(vehicle === 40)? x :null} */}
            <Grid item xs={12} sm={4} md={2.4} lg={2.8}> {/* #container*/}
              <Box>
                <FormControl sx={{ width: "100%" }} className="gap-grid-edit">
                  <InputLabel id="entradaCCD">Container</InputLabel>
                  <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    value={container}
                    label="Container"
                    onChange={hcContainer}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>MUSK425488</MenuItem>
                    <MenuItem value={20}>CAUI451736</MenuItem>
                    <MenuItem value={30}>MUIT5478F9</MenuItem>
                  </Select>
                  <Box className="btn-group-edit">
                    <ButtonGroup
                      variant="contained"
                      size="large"
                      color="primary"
                    >
                      <Button onClick={() => setIsModalContainer(true)}>
                        <AddIcon />
                      </Button>
                      {isModalContainer ? (
                        <ModalContainer
                          onClose={() => setIsModalContainer(false)}
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
            <Grid item xs={12} sm={3.6} md={2} lg={2}> {/* #lacre*/}
              <Box>
                <FormControl sx={{ width: "100%" }}>
                  <TextField
                    id=""
                    label="Lacre"
                    // disabled
                    defaultValue="PSLS8541"
                  />
                </FormControl>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4} md={4} lg={4}> {/* #document*/}
              <Box>
                <FormControl sx={{ width: "100%" }} className="gap-grid-edit">
                  <InputLabel id="entradaCCD">Documento</InputLabel>
                  <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    value={document}
                    label="Documento"
                    onChange={hcDocument}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>CPF: 856.745.951-54</MenuItem>
                    <MenuItem value={20}>CPF: 754.635.985-42</MenuItem>
                    <MenuItem value={30}>CPF: 785.964.125-36</MenuItem>
                  </Select>
                  <Box className="btn-group-edit">
                    <ButtonGroup
                      variant="contained"
                      size="large"
                      color="primary"
                    >
                      <Button onClick={() => setIsModalDocument(true)}>
                        <AddIcon />
                      </Button>
                      {isModalDocument ? (
                        <ModalDocument
                          onClose={() => setIsModalDocument(false)}
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
            <Grid item xs={12} sm={7.6} md={7.75} lg={7.8}> {/* #atualizador por*/}
              <Box>
                <FormControl sx={{ width: "100%" }} className="gap-grid-edit">
                  <InputLabel id="entradaCCD">Autorizador por</InputLabel>
                  <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    value={autho}
                    label="Autorizador por"
                    onChange={hcAutho}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Antônio dos Santos</MenuItem>
                    <MenuItem value={20}>Gustavo Martins</MenuItem>
                    <MenuItem value={30}>José Amaral</MenuItem>
                  </Select>
                  <Box className="btn-group-edit">
                    <ButtonGroup
                      variant="contained"
                      size="large"
                      color="primary"
                    >
                      <Button onClick={() => setIsModalAutho(true)}>
                        <AddIcon />
                      </Button>
                      {isModalAutho ? (
                        <ModalResponsible 
                          onClose={() => setIsModalAutho(false)}
                          title="AUTORIZADOR POR" />
                      ) : null}
                      <Button>
                        <EditIcon />
                      </Button>
                    </ButtonGroup>
                  </Box>
                </FormControl>
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={7.5} lg={7.5}> {/* #lançado por*/}
              <Box>
                <FormControl sx={{ width: "100%" }} className="gap-grid-edit">
                  <InputLabel id="entradaCCD">Lançado por</InputLabel>
                  <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    value={releasedBy}
                    label="Lançado por"
                    onChange={hcReleasedBy}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Carlos dos Santos</MenuItem>
                    <MenuItem value={20}>Gustavo Martins</MenuItem>
                    <MenuItem value={30}>José Amaral</MenuItem>
                  </Select>
                  <Box className="btn-group-edit">
                    <ButtonGroup
                      variant="contained"
                      size="large"
                      color="primary"
                    >
                      <Button onClick={() => setIsModalReleasedBy(true)}>
                        <AddIcon />
                      </Button>
                      {isModalReleasedBy ? (
                        <ModalResponsible 
                          onClose={() => setIsModalReleasedBy(false)}
                          title="LANÇADO POR" />
                      ) : null}
                      <Button>
                        <EditIcon />
                      </Button>
                    </ButtonGroup>
                  </Box>
                </FormControl>
              </Box>
            </Grid>
            <Grid item xs={6} md={2} lg={2}> {/* #data*/}
              <Box>
                <TextField
                  id="date"
                  label="Data"
                  type="date"
                  defaultValue=" "
                  sx={{ width: "100%" }}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Box>
            </Grid>
            <Grid item xs={5.4} md={2} lg={2}> {/* #hora*/}
              <Box>
                <TextField
                  id="time"
                  label="Hora"
                  type="time"
                  defaultValue=" "
                  InputLabelProps={{
                    shrink: true,
                  }}
                  inputProps={{
                    step: 300, // 5 min
                  }}
                  sx={{ width: "100%" }}
                />
              </Box>
            </Grid>
            <Grid item xs={12} md={12}> {/* #Observações*/}
              <Box>
                <TextField
                  sx={{ width: "100%" }}
                  id="outlined-multiline-flexible"
                  label="Observação"
                  multiline
                  rows={4}
                  value={entryNote}
                  onChange={hcEntryNote}
                />
              </Box>
            </Grid>
            <Grid item xs={12} className="divider-form">
              <Divider variant="middle" orientation="horizontal" />
            </Grid>
            <Grid item xs={12} className="button-footer">
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
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}

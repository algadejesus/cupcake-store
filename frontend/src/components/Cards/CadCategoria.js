import * as React from "react";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import {
  Badge,
  Button,
  Card,
  Navbar,
  Nav,
  Container,
  Row,
  Col,
  Form,
} from "react-bootstrap";

export default function CadCategoria() {
  return (
    <Container className="col-3">
      <Card>
        <Card.Header>
          <Card.Title as="h4">Cadastro de Categorias</Card.Title>
        </Card.Header>
        <Card.Body>
          <Form>
            <Row>
              <Col className="col-5" controlId="">
                <TextField label="ID" variant="outlined" defaultValue="0001" disabled/>
              </Col>
                <Col className="col-7" controlId="">
                  <FormControl fullWidth>
                    <InputLabel>Categoria</InputLabel>
                    <Select
                      //value={Categoria}
                      label="Categoria"
                      //onChange={}
                    >
                      <MenuItem value={1}>A</MenuItem>
                      <MenuItem value={2}>B</MenuItem>
                      <MenuItem value={3}>C</MenuItem>
                      <MenuItem value={4}>D</MenuItem>
                      <MenuItem value={5}>E</MenuItem>
                      <MenuItem value={6}>AB</MenuItem>
                      <MenuItem value={7}>AD</MenuItem>
                      <MenuItem value={8}>AE</MenuItem>
                    </Select>
                  </FormControl>
                  <div>
                  <Button
                    className="btn-fill pull-right px-2 py-1"
                    type="submit"
                    variant="info"
                  >
                    <i className="fas fa-plus"></i>
                  </Button>
                  <Button
                    className="btn-fill pull-right px-2 py-1 m-1"
                    type="submit"
                    variant="info"
                  >
                    <i className="fas fa-pencil-alt" />
                  </Button>
                </div>
                </Col>
            </Row>
            <div>
              <Button
                controlId=""
                className="btn-fill pull-right m-1"
                type="submit"
                variant="info"
              >
                Salvar
              </Button>
              <Button
                controlId=""
                className="btn-fill pull-right m-1"
                type="submit"
                variant="info"
              >
                Cancelar
              </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
}
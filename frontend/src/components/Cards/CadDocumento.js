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

export default function CadDocumento() {
  return (
    <Container className="col-3">
      <Card>
        <Card.Header>
          <Card.Title as="h4">Registro de Documento</Card.Title>
        </Card.Header>
        <Card.Body>
          <Form>
            <Row>
              <Col className="col-3" controlId="">
                <TextField
                  label="ID"
                  variant="outlined"
                  defaultValue="0001"
                  disabled
                />
              </Col>
              <Col className="col-5" controlId="">
                <FormControl fullWidth>
                  <InputLabel>Documento</InputLabel>
                  <Select
                    //value={Documento}
                    label="Documento"
                    //onChange={}
                  >
                    <MenuItem value={1}>000000254</MenuItem>
                    <MenuItem value={2}>2022/52487-6</MenuItem>
                    <MenuItem value={3}>000002365</MenuItem>
                  </Select>
                </FormControl>
              </Col>
              <Col className="col-4" controlId="">
                <FormControl fullWidth>
                  <InputLabel>Tipo</InputLabel>
                  <Select
                    //value={Tipo}
                    label="Tipo"
                    //onChange={}
                  >
                    <MenuItem value={1}>Nota Fiscal</MenuItem>
                    <MenuItem value={3}>CT-e</MenuItem>
                    <MenuItem value={3}>D.I</MenuItem>
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

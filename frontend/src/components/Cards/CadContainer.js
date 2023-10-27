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

export default function CadContainer() {
  return (
    <Container className="col-3">
      <Card>
        <Card.Header>
          <Card.Title as="h4">Cadastro de Container</Card.Title>
        </Card.Header>
        <Card.Body>
          <Form>
            <Row>
              <Col className="col-5" controlId="">
                <TextField label="ID" variant="outlined" defaultValue="0001" disabled/>
              </Col>
                <Col className="col-7" controlId="">
                  <FormControl fullWidth>
                    <InputLabel>Container</InputLabel>
                    <Select
                      //value={Container}
                      label="Container"
                      //onChange={}
                    >
                      <MenuItem value={10}>CAIU524T3</MenuItem>
                      <MenuItem value={20}>MAESK23S6</MenuItem>
                      <MenuItem value={30}>MUSK52T57</MenuItem>
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
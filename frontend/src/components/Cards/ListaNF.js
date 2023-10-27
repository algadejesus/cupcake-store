import React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import DirectionsIcon from "@mui/icons-material/Directions";

// react-bootstrap components
import {
  Badge,
  Button,
  Card,
  Navbar,
  Nav,
  Container,
  Table,
  Row,
  Col,
  Form,
} from "react-bootstrap";

function ListaNF() {
  return (
    <Container className="col-8">
      <Card>
        <Card.Header>
          <Card.Title as="h4">Lista de Notas Fiscais</Card.Title>
        </Card.Header>
        <Card.Body>
          <Row className="py-2">
            <Col className="d-flex justify-content-end">
              <Paper
                component="form"
                sx={{
                  p: "2px 4px",
                  display: "flex",
                  alignItems: "center",
                  width: 400,
                }}
              >
                <IconButton sx={{ p: "10px" }} aria-label="menu">
                  <MenuIcon />
                </IconButton>
                <InputBase
                  sx={{ ml: 1, flex: 1 }}
                  placeholder="Pesquise aqui sua Nota Fiscal"
                  inputProps={{ "aria-label": "Pesquise aqui sua Nota Fiscal" }}
                />
                <IconButton
                  type="submit"
                  sx={{ p: "10px" }}
                  aria-label="search"
                >
                  <SearchIcon />
                </IconButton>
                <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
              </Paper>
            </Col>
          </Row>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Chave de acesso</th>
                <th>Nota Fiscal</th>
                <th>Data Lançamento</th>
                <th>Situação</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>3</td>
                <td>13211105241689000160550180000485491768532688</td>
                <td>000048549</td>
                <td>04/04/2022</td>
                <td>Aprovada</td>
              </tr>
              <tr>
                <td>2</td>
                <td>13211104176689000160550180000122781578124375</td>
                <td>000012278</td>
                <td>04/04/2022</td>
                <td>Reprovado</td>
              </tr>
              <tr>
                <td>1</td>
                <td>13211104176689000160550180000524812578124256</td>
                <td>000052481</td>
                <td>04/04/2022</td>
                <td>Aprovada</td>
              </tr>
              <tr>
                <td>1</td>
                <td>13211104176689000160550180000524812578124256</td>
                <td>000052481</td>
                <td>04/04/2022</td>
                <td>Aprovada</td>
              </tr>
              <tr>
                <td>1</td>
                <td>13211104176689000160550180000524812578124256</td>
                <td>000052481</td>
                <td>04/04/2022</td>
                <td>Aprovada</td>
              </tr>
              <tr>
                <td>1</td>
                <td>13211104176689000160550180000524812578124256</td>
                <td>000052481</td>
                <td>04/04/2022</td>
                <td>Aprovada</td>
              </tr>
              <tr>
                <td>1</td>
                <td>13211104176689000160550180000524812578124256</td>
                <td>000052481</td>
                <td>04/04/2022</td>
                <td>Aprovada</td>
              </tr>
              <tr>
                <td>1</td>
                <td>13211104176689000160550180000524812578124256</td>
                <td>000052481</td>
                <td>04/04/2022</td>
                <td>Aprovada</td>
              </tr>
              <tr>
                <td>1</td>
                <td>13211104176689000160550180000524812578124256</td>
                <td>000052481</td>
                <td>04/04/2022</td>
                <td>Aprovada</td>
              </tr>
            </tbody>
          </Table>
        </Card.Body>
        <nav aria-label="Navegação de página exemplo">
        <ul class="pagination justify-content-center">
          <li class="page-item disabled">
            <a class="page-link" href="#" tabindex="-1">
              Anterior
            </a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">
              1
            </a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">
              2
            </a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">
              3
            </a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">
              Próximo
            </a>
          </li>
        </ul>
      </nav>
      </Card>
    </Container>
  );
}

export default ListaNF;

import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

// react-bootstrap components
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


export default function EntradaOld() {
  return (
    <Container className="col-8">
      <Card>
        <Card.Header>
          <Card.Title as="h4">Entrada</Card.Title>
        </Card.Header>
        <Card.Body>
          <Form>
            <Row>
              <Col className="col-3" controlId="">
                <Form.Group>
                  <Form.Label>CCD - Controle de carga e descarga</Form.Label>
                  <Form.Control
                    placeholder="Digite o CCD"
                    type="text"
                    autoFocus
                    defaultValue="CCD-180"
                  ></Form.Control>
                </Form.Group>
              </Col>
              <Col className="col-9" controlId="">
                <Form.Group>
                  <Form.Label>Empresa</Form.Label>
                  <Form.Control
                    placeholder="CNPJ | Empresa"
                    type="text"
                    defaultValue="74526412000185 - Empresa Fictícia de Logística Ltda"
                  ></Form.Control>
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
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col className="col-6" controlId="">
                <Form.Group>
                  <Form.Label>Motorista</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="CPF | Motorista | CNH | Categoria"
                    defaultValue="85465285436/AE - Fábio Albuquerque Tavares dos Santos"
                  />
                  <div className="">
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
                </Form.Group>
              </Col>
              <Col className="col-4" controlId="">
                <Form.Group>
                  <Form.Label>Veículo</Form.Label>
                  <Form.Control
                    placeholder="Placa | Tipo"
                    type="text"
                    defaultValue="HFG8G521 - Cavalo"
                  ></Form.Control>
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
                </Form.Group>
              </Col>
              <Col className="col-2" controlId="">
                <Form.Group>
                  <Form.Label>Situação</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Vazia ou Cheia"
                    defaultValue="Cheio"
                  />
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
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col className="col-4" controlId="">
                <Form.Group>
                  <Form.Label>Prancha ou Carreta</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Placa | Tipo | Lacre | Frota"
                  />
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
                </Form.Group>
              </Col>
              <Col className="col-4" controlId="">
                <Form.Group>
                  <Form.Label>Container</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Serial | Lacre | Frota"
                  />
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
                </Form.Group>
              </Col>
              <Col className="col-4" controlId="">
                <Form.Group>
                  <Form.Label>Documetação</Form.Label>
                  <Form.Control type="text" placeholder="Tipo | Número" />
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
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col className="col-4" controlId="">
                <Form.Group>
                  <Form.Label>Autorizado por</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Matrícula | Funcionário"
                  />
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
                </Form.Group>
              </Col>
              <Col className="col-4" controlId="">
                <Form.Group>
                  <Form.Label>Lançado por</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Matrícula | Funcionário"
                  />
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
                </Form.Group>
              </Col>
              <Col className="col-2" controlId="">
                <Form.Group>
                  <Form.Label>Data</Form.Label>
                  <Form.Control type="date" />
                </Form.Group>
              </Col>
              <Col className="col-2" controlId="">
                <Form.Group>
                  <Form.Label>Hora</Form.Label>
                  <Form.Control type="time" />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group>
                  <Form.Label>Observação</Form.Label>
                  <Form.Control
                    as="textarea"
                    placeholder="Escreva aqui uma observação"
                    style={{ height: "100px" }}
                  />
                </Form.Group>
              </Col>
            </Row>
            <div>
              <Button
                controlId=""
                className="btn-fill pull-right m-1"
                type="submit"
                variant="info"
              >
                Cancelar
              </Button>
              <Button
                controlId=""
                className="btn-fill pull-right m-1"
                type="submit"
                variant="info"
              >
                Salvar
              </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
}
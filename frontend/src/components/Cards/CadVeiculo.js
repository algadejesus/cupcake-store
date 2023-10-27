import React from "react";

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

function CadVeiculo() {
  return (
    <Container className="col-3">
      <Card>
        <Card.Header>
          <Card.Title as="h4">Cadastro de Veículo</Card.Title>
        </Card.Header>
        <Card.Body>
          <Form>
            <Row>
              <Col className="col-3" controlId="">
                <Form.Group>
                  <Form.Label>ID</Form.Label>
                  <Form.Control
                    placeholder="0001"
                    disabled
                    type="text"
                  ></Form.Control>
                </Form.Group>
              </Col>
              <Col className="col-4" controlId="">
                <Form.Group>
                  <Form.Label>Placa</Form.Label>
                  <Form.Control
                    defaultValue="HFG8G521"
                    type="text"
                    placeholder=""
                    autoFocus
                  />
                </Form.Group>
              </Col>
              <Col className="col-5" controlId="">
                <Form.Group>
                  <Form.Label>Tipo</Form.Label>
                  <Form.Control
                    defaultValue="Cavalo"
                    type="text"
                    placeholder=""
                  />
                </Form.Group>
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

export default CadVeiculo;

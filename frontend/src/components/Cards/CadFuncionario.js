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

function CadFuncionario() {
  return (
    <Container className="col-4">
      <Card>
        <Card.Header>
          <Card.Title as="h4">Cadastro de Funcionário</Card.Title>
        </Card.Header>
        <Card.Body>
          <Form>
            <Row>
              <Col className="col-2" controlId="">
                <Form.Group>
                  <Form.Label>ID</Form.Label>
                  <Form.Control
                    placeholder="0001"
                    disabled
                    type="text"
                  ></Form.Control>
                </Form.Group>
              </Col>
              <Col className="col-5" controlId="">
                <Form.Group>
                  <Form.Label>Matrícula</Form.Label>
                  <Form.Control
                    defaultValue="2004590"
                    type="text"
                    placeholder=""
                    autoFocus
                  />
                </Form.Group>
              </Col>
              <Col className="col-5" controlId="">
                <Form.Group>
                  <Form.Label>Setor</Form.Label>
                  <Form.Control
                    defaultValue="Expedição"
                    type="text"
                    placeholder=""
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
              <Col className="col-12" controlId="">
                <Form.Group>
                  <Form.Label>Nome do funcionário</Form.Label>
                  <Form.Control
                    defaultValue="Gustavo Costa"
                    placeholder="Ex: Nome e Sobrenome"
                    type="text"
                  ></Form.Control>
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

export default CadFuncionario;

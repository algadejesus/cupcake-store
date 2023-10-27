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

function CadMotorista() {
  return (
    <Container className="col-4">
      <Card>
        <Card.Header>
          <Card.Title as="h4">Cadastro do Motorista</Card.Title>
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
              <Col className="col-4" controlId="">
                <Form.Group>
                  <Form.Label>CPF</Form.Label>
                  <Form.Control
                    defaultValue="85465285436"
                    type="text"
                    placeholder="Sem ponto"
                    autoFocus
                  />
                </Form.Group>
              </Col>
              <Col className="col-4" controlId="">
                <Form.Group>
                  <Form.Label>CNH</Form.Label>
                  <Form.Control
                    defaultValue="14548736542"
                    type="text"
                    placeholder="Sem ponto"
                  />
                </Form.Group>
              </Col>
              <Col className="col-2" controlId="">
                <Form.Group>
                  <Form.Label>Categoria</Form.Label>
                  <Form.Control
                    defaultValue="AE"
                    type="text"
                    placeholder="Sem ponto"
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col className="col-12" controlId="">
                <Form.Group>
                  <Form.Label>Nome do Motorista</Form.Label>
                  <Form.Control
                    defaultValue="Fábio Albuquerque Tavares dos Santos"
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

export default CadMotorista;

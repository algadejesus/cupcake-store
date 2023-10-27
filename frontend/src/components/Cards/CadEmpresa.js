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

function CadEmpresa() {
  return (
      <Container className="col-4">
        <Card>
          <Card.Header>
            <Card.Title as="h4">Cadastro da Empresa</Card.Title>
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
                <Col className="col-10" controlId="">
                  <Form.Group>
                    <Form.Label>CNPJ</Form.Label>
                    <Form.Control
                      defaultValue="15558263000198"
                      type="text"
                      placeholder=""
                      autoFocus
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col className="col-12" controlId="">
                  <Form.Group>
                    <Form.Label>Nome da Empresa</Form.Label>
                    <Form.Control
                      defaultValue="Aliança Navegação Logistica da América do Sul Ltda"
                      placeholder=""
                      type="text"
                    ></Form.Control>
                  </Form.Group>
                </Col>
              </Row>
              <div>
                <Button
                  controlId=""
                  className="btn-fill pull-right m-1"
                  type="button"
                  variant="info"
                  onClick={() => {
                    closeModal(true);
                  }}
                >
                  Salvar
                </Button>
                <Button
                  controlId=""
                  className="btn-fill pull-right m-1"
                  type="button"
                  variant="info"
                  onClick={() => {
                    closeModal(false);
                  }}
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

export default CadEmpresa;

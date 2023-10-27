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

function CadFrota() {
  return (
    <Container className="col-3">
      <Card>
        <Card.Header>
          <Card.Title as="h4">Cadastro de Frota</Card.Title>
        </Card.Header>
        <Card.Body>
          <Form>
            <Row>
              <Col className="col-4" controlId="">
                <Form.Group>
                  <Form.Label>ID</Form.Label>
                  <Form.Control
                    placeholder="0001"
                    disabled
                    type="text"
                  ></Form.Control>
                </Form.Group>
              </Col>
              <Col className="col-8" controlId="">
                <Form.Group>
                  <Form.Label>Frota</Form.Label>
                  <Form.Control
                    defaultValue="LD-754"
                    type="text"
                    placeholder="Vazia ou Cheia"
                    autoFocus
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

export default CadFrota;

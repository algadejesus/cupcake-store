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

function CadTpDoc() {
  return (
    <Container className="col-3">
      <Card>
        <Card.Header>
          <Card.Title as="h4">Tipo de Documento</Card.Title>
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
                  <Form.Label>Tipo</Form.Label>
                  <Form.Control
                    defaultValue="Nota Fiscal"
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

export default CadTpDoc;

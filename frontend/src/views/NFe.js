import React from "react";

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

function NFe() {
  return (
    <Container className="col-8">
      <Card>
        <Card.Header>
          <Card.Title as="h4">Controle de Saída de Notas Fiscais</Card.Title>
        </Card.Header>
        <Card.Body>
          <Form>
            <Row>
              <Col className="col-6" controlId="">
                <Form.Group>
                  <Form.Label>Chave de acesso</Form.Label>
                  <Form.Control
                    placeholder="Scanear aqui a Chave de Acesso"
                    defaultValue="13211105241689000160550180000485491768532688"
                    type="text"
                    autoFocus
                  ></Form.Control>
                </Form.Group>
              </Col>
              <Col className="col-2" controlId="">
                <Form.Group>
                  <Form.Label>Nota Fiscal</Form.Label>
                  <Form.Control type="text" disabled defaultValue="000048549" />
                </Form.Group>
              </Col>
              <Col className="col-1" controlId="">
                <Form.Group>
                  <Form.Label>Série</Form.Label>
                  <Form.Control type="text" disabled defaultValue="018" />
                </Form.Group>
              </Col>
              <Col className="col-2" controlId="">
                <Form.Group>
                  <Form.Label>Data da Emissão NF</Form.Label>
                  <Form.Control type="date" placeholder="Data" />
                </Form.Group>
              </Col>
              <Col className="col-1" controlId="">
                <Form.Group>
                  <Form.Label>Dias Venc</Form.Label>
                  <Form.Control type="text" defaultValue="30" />
                </Form.Group>
              </Col>
            </Row>
            <Row>
            <Col className="col-3" controlId="">
                <Form.Group>
                  <Form.Label>Scaneador por</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Resp. pelo Scaneamento"
                    defaultValue="Alessandro Oliveira"
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
              <Col className="col-3" controlId="">
                <Form.Group>
                  <Form.Label>Setor</Form.Label>
                  <Form.Control
                    placeholder="Scaneador no Setor"
                    type="text"
                    defaultValue="Faturamento"
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
                  <Form.Control type="text" disabled placeholder="" />
                </Form.Group>
              </Col>
              <Col className="col-2" controlId="">
                <Form.Group>
                  <Form.Label>Data da Leitura</Form.Label>
                  <Form.Control type="date" placeholder="Data" />
                </Form.Group>
              </Col>
              <Col className="col-2" controlId="">
                <Form.Group>
                  <Form.Label>Hora</Form.Label>
                  <Form.Control type="time" placeholder="Hora" />
                </Form.Group>
              </Col>
            </Row>
            <div>
              <Button
                controlId=""
                className="btn-fill pull-right m-1 col-2"
                type="submit"
                variant="info"
              >
                Salvar
              </Button>
              <Button
                controlId=""
                className="btn-fill pull-right m-1 col-2"
                type="submit"
                variant="info"
              >
                Alterar
              </Button>
              <Button
                controlId=""
                className="btn-fill pull-right m-1 col-2"
                type="submit"
                variant="info"
              >
                Cancelar
              </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
      <Card>
        <Card.Body>
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
            </tbody>
          </Table>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default NFe;

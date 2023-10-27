import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import Select from "react-select";
import { Link } from "react-router-dom";
import axios from "axios";

import CreatableSelect from 'react-select/creatable';
// import TextField from "@mui/material/TextField";
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
// import MultipleDropzone from "components/Upload/MultipleDropzone";
// import MultipleDropzonePDF from "components/Upload/MultipleDropzonePDF";
// import { useAlert } from "react-alert";
// components

// const baseurl = window.location.origin.toString() + "/api/";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

export default function PortariaContent(props) {
  //START DATA DECLARATION

  const [company, setCompany] = useState([]);
  const [companyList, setCompanyList] = useState([]);

  useEffect(() => {
    if (companyList.length === 0) {
      // axios.get(baseurl + "company").then(
      axios.get("http://localhost:3002/api/company").then(
        (response) => {
          console.log(response.data);
          setCompanyList(response.data);
          if (company.idcompany) {
            setCompany(null);
          }
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }, []);
  // useEffect(() => {
  //   const fetchData = async () => {
  //     if (company.idcompany) {
  //       axios
  //         .get("http://localhost:8080/api/driver", {
  //           params: {
  //             company_idcompany: company.idcompany,
  //           },
  //         })
  //         .then(
  //           (response) => {
  //             console.log(response.data);
  //             setDriverList(response.data);
  //           },
  //           (error) => {
  //             console.log(error);
  //           }
  //         );
  //     } else {
  //       setDriverList([]);
  //       setDriver(null);
  //     }
  //   };
  //   fetchData();
  // }, [company]);

  // START DEFAULT MODAL
  const [itemName, setItemName] = React.useState("");
  const [itemValue, setItemValue] = React.useState("");
  const [tmpState, setTmpState] = React.useState("");
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal(vartext, varval, tState) {
    setIsOpen(true);
    setItemName(vartext);
    setItemValue(varval);
    setTmpState(tState);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    // subtitle.style.color = '#f00';
  }

  function closeModal(persist) {
    // console.log(tmpState)
    if (persist === true && tmpState === "company") {
      axios
        .post(baseurl + tmpState, {
          name: itemValue,
        })
        .then(
          (response) => {
            console.log(response);
            axios.get(baseurl + "company").then(
              (response) => {
                console.log(response.data);
                setCompanyList(response.data);
                if (company.idcompany) {
                  setCompany(null);
                }
              },
              (error) => {
                console.log(error);
              }
            );
          },
          (error) => {
            console.log(error);
          }
        );
    }
    setIsOpen(false);
  }
  //END DEFAULT MODAL

  return (
    <>
      {/* MODAL DEFAULT */}
      <Modal
        isOpen={modalIsOpen}
        ariaHideApp={false}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div>
          <form>
            <div className="flex flex-wrap">
              <div className="w-full lg:w-12/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    {itemName}
                  </label>
                  <input
                    onChange={(v) => {
                      setItemValue(v.target.value);
                    }}
                    // disabled={props.showOnly}
                    type="text"
                    autoFocus
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    // value={itemValue}
                  />
                </div>
                <div className="relative w-full mb-3">
                  <button
                    className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => {
                      closeModal(false);
                    }}
                  >
                    Cancelar
                  </button>
                  <button
                    className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => {
                      closeModal(true);
                    }}
                  >
                    Salvar
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </Modal>
      <Container className="col-12">
        <Card>
          <Card.Header>
            <Card.Title>Entrada</Card.Title>
          </Card.Header>
          <Card.Body>
            <Form>
              <Row>
                <Col>
                <CreatableSelect/>
                </Col>
                <Col className="col-3">
                  <Form.Group>
                    <Form.Label>CCD - Controle de carga e descarga</Form.Label>
                    <Form.Control />
                  </Form.Group>
                </Col>
                <Col className="col-5">
                  <Form.Group>
                    <Form.Label>Empresa</Form.Label>
                    <Select
                      // isDisabled={props.showOnly}
                      searchable={true}
                      placeholder={"Select an option"}
                      options={companyList}
                      defaultValue={company}
                      onChange={setCompany}
                      getOptionLabel={(options) => options["name"]}
                      getOptionValue={(options) => options["idcompany"]}
                    />
                    <>
                      <Button
                        className="btn-fill pull-right px-2 py-1"
                        type="button"
                        variant="info"
                        onClick={() => {
                          openModal("Company", "", "company");
                        }}
                      >
                        <i className="fas fa-plus"></i>
                      </Button>
                      <Button
                        className="btn-fill pull-right px-2 py-1 m-1"
                        type="button"
                        variant="info"
                        disabled
                        onClick={() => {
                          openModal("Company", "Coco", "company");
                        }}
                      >
                        <i className="fas fa-pencil-alt" />
                      </Button>
                    </>
                  </Form.Group>
                </Col>
              </Row>
            </Form>
          </Card.Body>
              {/* Botões do furmulário geral */}
              <div className="text-center flex justify-end m-3">
                <Link to={"/admin/m/" + props.returnto}>
                  <Button
                    className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                    type="button"
                  >
                    Cancelar
                  </Button>
                </Link>
                <Button
                  className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                  type="button"
                  onClick={(e) => {
                    saveMicro(e);
                  }}
                >
                  Salvar
                </Button>
              </div>
        </Card>
      </Container>
    </>
  );
}

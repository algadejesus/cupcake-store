import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import axios from "axios";

const baseurl = "http://localhost:3000/admin/"

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

export default function Modal3(props) {

  const [pesqColeta, setPesqColeta] = useState([]);
  const [pesquisadorList, setPesquisadorList] = useState([]); //0pesquisador

  useEffect(() => {
    const fetchData = async () => {
      if (pesquisadorList.length === 0) {
        let response = await axios.get(baseurl + props.module);
        setPesquisadorList(response.data);
        if (pesqColeta.idpesquisador) {
          setPesqColeta(null);
        }
      }
    };
    fetchData();
  }, []);

  const [itemPersonName, setItemPersonName] = React.useState(["", "", ""]);
  const [itemPersonValueA, setItemPersonValueA] = React.useState("");
  const [itemPersonValueB, setItemPersonValueB] = React.useState("");
  const [itemPersonValueC, setItemPersonValueC] = React.useState("");
  const [modalPersonIsOpen, setPersonIsOpen] = useState(false);
  const [tmpStatePeson, setTmpStatePerson] = React.useState("");
  const [itemPesonId, setItemPesonId] = useState(null);

  function openPersonModal(vartext, varval, tmpState, id) {
    setPersonIsOpen(true);
    setItemPersonName(vartext);
    setItemPersonValueA(varval[0]);
    setItemPersonValueB(varval[1]);
    setItemPersonValueC(varval[2]);
    setTmpStatePerson(tmpState);
    if (id) {
      setItemPesonId(id);
    } else {
      setItemPesonId(null);
    }
  }

  function afterOpenPersonModal() {
    // references are now sync'd and can be accessed.
    // subtitle.style.color = '#f00';
  }

  function closePersonModal(persist) {
    //0pesquisador
    if (persist === true && tmpStatePeson === "pesquisadorColeta") {
      if (itemPesonId != null) {
        axios
          .put(baseurl + props.module, {
            nome: itemPersonValueA,
            email: itemPersonValueB,
            instituicao: itemPersonValueC,
          })
          .then(
            (response) => {
              // console.log(response);
              axios.get(baseurl + props.module).then(
                (response) => {
                  // console.log(response.data);
                  setPesquisadorList(response.data);
                  setPesqColeta({
                    idpesquisador: itemPesonId,
                    nome: itemPersonValueA,
                    email: itemPersonValueB,
                    instituicao: itemPersonValueC,
                  });
                },
                (error) => {
                  // console.log(error);
                }
              );
            },
            (error) => {
              // console.log(error);
            }
          );
      } else {
        axios
          .post("http://localhost:3000/admin/" + "CadCompany", {
            nome: itemPersonValueA,
            email: itemPersonValueB,
            instituicao: itemPersonValueC,
          })
          .then(
            (response) => {
              // console.log(response);
              axios.get("http://localhost:3000/admin/" + "CadCompany").then(
                (response) => {
                  // console.log(response.data);
                  setPesquisadorList(response.data);
                  if (pesqColeta.idpesquisador) {
                    setPesqColeta(null);
                  }
                },
                (error) => {
                  // console.log(error);
                }
              );
            },
            (error) => {
              // console.log(error);
            }
          );
      }
    }
    setPersonIsOpen(false);
  }

  //END AUTOR MODAL
  return (
    <>
      {/* MODAL PERSON */}
      <Modal
        isOpen={modalPersonIsOpen}
        onAfterOpen={afterOpenPersonModal}
        onRequestClose={closePersonModal}
        ariaHideApp={false}
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
                    {itemPersonName[0]}
                  </label>
                  <input
                    disabled={props.showOnly}
                    type="text"
                    autoFocus
                    onChange={(v) => {
                      setItemPersonValueA(v.target.value);
                    }}
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    value={itemPersonValueA}
                  />
                </div>
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    {itemPersonName[1]}
                  </label>
                  <input
                    disabled={props.showOnly}
                    type="text"
                    onChange={(v) => {
                      setItemPersonValueB(v.target.value);
                    }}
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    value={itemPersonValueB}
                  />
                </div>
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    {itemPersonName[2]}
                  </label>
                  <input
                    disabled={props.showOnly}
                    type="text"
                    onChange={(v) => {
                      setItemPersonValueC(v.target.value);
                    }}
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    value={itemPersonValueC}
                  />
                </div>
                <div className="relative w-full mb-3">
                  <button
                    className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => {
                      closePersonModal(false);
                    }}
                  >
                    Cancelar
                  </button>
                  <button
                    className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => {
                      closePersonModal(true);
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
    </>
  );
}

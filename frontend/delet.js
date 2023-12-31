import React, { useState, useEffect } from "react";

import Modal from "react-modal";
import Select from "react-select";
import { Link } from "react-router-dom";
import axios from "axios";
// components
const baseurl = "http://localhost:8080"
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

const habitatList = [
  {
    idHabitat: 0,
    habitat: "Fitopatogênico",
  },
  {
    idHabitat: 1,
    habitat: "Endofítico",
  },
  {
    idHabitat: 2,
    habitat: "Epifítico",
  },
  {
    idHabitat: 3,
    habitat: "Clínico",
  },
  {
    idHabitat: 4,
    habitat: "Solo",
  },
  {
    idHabitat: 5,
    habitat: "Degradador de madeira",
  },
  {
    idHabitat: 6,
    habitat: "Hipógeo",
  },
  {
    idHabitat: 7,
    habitat: "Anemófilo",
  },
  {
    idHabitat: 8,
    habitat: "Outros",
  },
];

const statusList = [
  {
    idStatus: 0,
    status: "Ativo",
  },
  {
    idStatus: 1,
    status: "Inativo",
  },
  {
    idStatus: 2,
    status: "Pendente",
  },
];

const doacaoList = [
  {
    idDoacao: 0,
    doacao: "Sim",
  },
  {
    idDoacao: 1,
    doacao: "Não",
  },
  {
    idDoacao: 2,
    doacao: "Sob Consulta",
  },
];

const unidadeList = [
  {
    idUnidade: 0,
    unidade: "TB",
  },
  {
    idUnidade: 1,
    unidade: "EP",
  },
  {
    idUnidade: 2,
    unidade: "FP",
  },
  {
    idUnidade: 3,
    unidade: "OT",
  },
];

export default function MicroContent(props) {
  var initialTab = 1;
  if (props.isRepique === true) {
    initialTab = 6;
  }
  const [openTab, setOpenTab] = useState(initialTab);

  //START DATA DECLARATION

  const [dominio, setDominio] = useState([]);
  const [reino, setReino] = useState([]);
  const [filo, setFilo] = useState([]);
  const [classe, setClasse] = useState([]);
  const [ordem, setOrdem] = useState([]);
  const [familia, setFamilia] = useState([]);
  const [genero, setGenero] = useState([]);
  const [especie, setEspecie] = useState([]);
  const [sub_especie, setSub_especie] = useState([]);
  const [variedade, setVariedade] = useState([]);
  const [referencia, setReferencia] = useState([]);
  const [coletor, setColetor] = useState([]);
  const [pesqIsola, setPesqIsola] = useState([]);
  const [pesqId, setPesqId] = useState([]);
  const [pesqPres, setPesqPres] = useState([]);
  const [status, setStatus] = useState([]);
  const [unidade, setUnidade] = useState([]);
  const [doacao, setDoacao] = useState([]);

  const [dominioList, setDominioList] = useState([]);
  const [reinoList, setReinoList] = useState([]);
  const [filoList, setFiloList] = useState([]);
  const [classeList, setClasseList] = useState([]);
  const [ordemList, setOrdemList] = useState([]);
  const [familiaList, setFamiliaList] = useState([]);
  const [generoList, setGeneroList] = useState([]);
  const [especieList, setEspecieList] = useState([]);
  const [sub_especieList, setSub_especieList] = useState([]);
  const [variedadeList, setVariedadeList] = useState([]);
  const [referenciaList, setReferenciaList] = useState([]);


  const [pesquisadorList, setPesquisadorList] = useState([]);
  const [hospAnList, setHospAnList] = useState([]);
  const [hospVegList, setHospVegList] = useState([]);
  const [substratoList, setSubstratoList] = useState([]);
  const [sitioAnatList, setSitioAnatList] = useState([]);
  const [corList, setCorList] = useState([]);
  const [texturaList, setTexturaList] = useState([]);
  const [bordaList, setBordaList] = useState([]);
  const [relevoList, setRelevoList] = useState([]);
  const [exudatoList, setExudatoList] = useState([]);
  const [pigmentoList, setpigmentoList] = useState([]);
  const [caracMicroList, setCaracMicroList] = useState([]);
  const [armarioList, setArmarioList] = useState([]);
  const [prateleiraList, setprateleiraList] = useState([]);
  const [loteList, setLoteList] = useState([]);
  const [posicaoList, setPosicaoList] = useState([]);

  const [corColonia, setCorColonia] = useState([]);
  const [textura, setTextura] = useState([]);
  const [borda, setBorda] = useState([]);
  const [relevo, setRelevo] = useState([]);
  const [exudato, setExudato] = useState([]);
  const [corExu, setCorExu] = useState([]);
  const [pigmento, setPigmento] = useState([]);
  const [corPig, setCorPig] = useState([]);
  const [refTemp, setRefTemp] = useState([]);
  const [caracMicro, setCaracMicro] = useState([]);
  const [armario, setArmario] = useState([]);
  const [prateleira, setprateleira] = useState([]);
  const [lote, setLote] = useState([]);
  const [posicao, setPosicao] = useState([]);
  const [refAdd, setRefAdd] = useState([]);
  const [habitat, setHabitat] = useState([]);
  const [hospAn, setHospAn] = useState([]);
  const [hospVeg, setHospVeg] = useState([]);
  const [substrato, setSubstrato] = useState([]);
  const [sitioAnat, setSitioAnat] = useState([]);

  const [labList, setLabList] = useState([]);
  const [laboratorio, setLaboratorio] = useState([]);

  useEffect(() => {
    // console.log(dominioList.length);
    if (dominioList.length === 0) {
      axios.get(baseurl+"/api/dominio")
        .then(response => {
          console.log(response.data);
          setDominioList(response.data);
          if (dominio.iddominio) {
            setDominio(null);
          }
        }, error => {
          console.log(error);
        });
    }
    // console.log(referenciaList.length);
    if (referenciaList.length === 0) {
      axios.get(baseurl+"/api/referencia")
        .then(response => {
          console.log(response.data);
          setReferenciaList(response.data);
          if (referencia.idreferencia) {
            setReferencia(null);
          }
        }, error => {
          console.log(error);
        });
    }
    // console.log(pesquisadorList.length);
    if (pesquisadorList.length === 0) {
      axios.get(baseurl+"/api/pesquisador")
        .then(response => {
          console.log(response.data);
          setPesquisadorList(response.data);
        }, error => {
          console.log(error);
        });
    }
  }, [])

  useEffect(() => {
    // console.log("CUEN 1");
    const fetchData = async () => {
      if (dominio.iddominio) {
        axios.get(baseurl+"/api/reino/search", {
          params: {
            "dominio_iddominio": dominio.iddominio
          }
        })
          .then(response => {
            console.log(response.data);
            setReinoList(response.data);
          }, error => {
            console.log(error);
          });
      }
      else {
        setReinoList([])
        setReino(null)
      }
    };
    fetchData();
  }, [dominio]);

  useEffect(() => {
    // console.log("CUEN 1");
    const fetchData = async () => {
      if (reino?.idreino) {
        axios.get(baseurl+"/api/filo/search", {
          params: {
            "reino_idreino": reino.idreino
          }
        })
          .then(response => {
            console.log(response.data);
            setFiloList(response.data);
          }, error => {
            console.log(error);
          });
      }
      else {
        setFiloList([])
        setFilo(null)
      }
    };
    fetchData();
  }, [reino]);

  useEffect(() => {
    // console.log("CUEN 1");
    const fetchData = async () => {
      if (filo?.idfilo) {
        axios.get(baseurl+"/api/classe/search", {
          params: {
            "filo_idfilo": filo.idfilo
          }
        })
          .then(response => {
            console.log(response.data);
            setClasseList(response.data);
          }, error => {
            console.log(error);
          });
      }
      else {
        setClasseList([])
        setClasse(null)
      }
    };
    fetchData();
  }, [filo]);

  useEffect(() => {
    // console.log("CUEN 1");
    const fetchData = async () => {
      if (classe?.idclasse) {
        axios.get(baseurl+"/api/ordem/search", {
          params: {
            "classe_idclasse": classe.idclasse
          }
        })
          .then(response => {
            console.log(response.data);
            setOrdemList(response.data);
          }, error => {
            console.log(error);
          });
      }
      else {
        setOrdemList([])
        setOrdem(null)
      }
    };
    fetchData();
  }, [classe]);

  useEffect(() => {
    // console.log("CUEN 1");
    const fetchData = async () => {
      if (ordem?.idordem) {
        axios.get(baseurl+"/api/familia/search", {
          params: {
            "ordem_idordem": ordem.idordem
          }
        })
          .then(response => {
            console.log(response.data);
            setFamiliaList(response.data);
          }, error => {
            console.log(error);
          });
      }
      else {
        setFamiliaList([])
        setFamilia(null)
      }
    };
    fetchData();
  }, [ordem]);

  useEffect(() => {
    // console.log("CUEN 1");
    const fetchData = async () => {
      if (familia?.idfamilia) {
        axios.get(baseurl+"/api/genero/search", {
          params: {
            "familia_idfamilia": familia.idfamilia
          }
        })
          .then(response => {
            console.log(response.data);
            setGeneroList(response.data);
          }, error => {
            console.log(error);
          });
      }
      else {
        setGeneroList([])
        setGenero(null)
      }
    };
    fetchData();
  }, [familia]);

  useEffect(() => {
    // console.log("CUEN 1");
    const fetchData = async () => {
      if (genero?.idgenero) {
        axios.get(baseurl+"/api/especie/search", {
          params: {
            "genero_idgenero": genero.idgenero
          }
        })
          .then(response => {
            console.log(response.data);
            setEspecieList(response.data);
          }, error => {
            console.log(error);
          });
      }
      else {
        setEspecieList([])
        setEspecie(null)
      }
    };
    fetchData();
  }, [genero]);

  useEffect(() => {
    // console.log("CUEN 1");
    const fetchData = async () => {
      if (especie?.idespecie) {
        axios.get(baseurl+"/api/sub_especie/search", {
          params: {
            "especie_idespecie": especie.idespecie
          }
        })
          .then(response => {
            console.log(response.data);
            setSub_especieList(response.data);
          }, error => {
            console.log(error);
          });
      }
      else {
        setSub_especieList([])
        setSub_especie(null)
      }
    };
    fetchData();
  }, [especie]);

  useEffect(() => {
    // console.log("CUEN 1");
    const fetchData = async () => {
      if (sub_especie?.idsub_especie) {
        axios.get(baseurl+"/api/variedade/search", {
          params: {
            "sub_especie_idsub_especie": sub_especie.idsub_especie
          }
        })
          .then(response => {
            console.log(response.data);
            setVariedadeList(response.data);
          }, error => {
            console.log(error);
          });
      }
      else {
        setVariedadeList([])
        setVariedade(null)
      }
    };
    fetchData();
  }, [sub_especie]);

  useEffect(() => {
    console.log(habitat);
    if (habitat?.idHabitat <= 2) {
      console.log("Vegetal")
      // console.log("CUEN 1");
      const fetchData = async () => {
        axios.get(baseurl+"/api/habitat_veg/search", {
          params: {
            "isAnimal": "0"
          }
        })
          .then(response => {
            console.log(response.data);
            setHospVeg(response.data);
          }, error => {
            console.log(error);
          });
          axios.get(baseurl+"/api/substrato/search")
            .then(response => {
              console.log(response.data);
              setSubstratoList(response.data);
            }, error => {
              console.log(error);
            });
      };
      fetchData();
    } else if (habitat?.idHabitat > 3) {
      console.log("outros")
    } else if (habitat?.idHabitat === 3){
      console.log("animal")
      // console.log("CUEN 1");
      const fetchData = async () => {
        axios.get(baseurl+"/api/habitat_ani/search", {
          params: {
            "isAnimal": "1"
          }
        })
          .then(response => {
            console.log(response.data);
            setHospAnList(response.data);
          }, error => {
            console.log(error);
          });
          axios.get(baseurl+"/api/sitio/")
            .then(response => {
              console.log(response.data);
              setSitioAnatList(response.data);
            }, error => {
              console.log(error);
            });
      };
      fetchData();
    }
  }, [habitat]);

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
    console.log(tmpState)
    if (persist === true && tmpState === "dominio") {
      axios.post(baseurl+ '/api/' + tmpState, {
        dominio: itemValue,
      })
        .then((response) => {
          console.log(response);
          axios.get(baseurl+"/api/dominio")
            .then(response => {
              console.log(response.data);
              setDominioList(response.data);
              if (dominio.iddominio) {
                setDominio(null);
              }
            }, error => {
              console.log(error);
            });
        }, (error) => {
          console.log(error);
        });
    }
    if (persist === true && tmpState === "reino" && dominio.iddominio > 0) {
      axios.post(baseurl+ '/api/' + tmpState, {
        reino: itemValue,
        dominio_iddominio: dominio.iddominio
      })
        .then((response) => {
          console.log(response);
          if (dominio.iddominio) {
            axios.get(baseurl+"/api/reino/search", {
              params: {
                "dominio_iddominio": dominio.iddominio
              }
            })
              .then(response => {
                console.log(response.data);
                setReinoList(response.data);
              }, error => {
                console.log(error);
              });
          }
        }, (error) => {
          console.log(error);
        });
    }
    if (persist === true && tmpState === "filo" && reino.idreino > 0) {
      axios.post(baseurl+ '/api/' + tmpState, {
        filo: itemValue,
        reino_idreino: reino.idreino
      })
        .then((response) => {
          console.log(response);
          if (reino?.idreino) {
            axios.get(baseurl+"/api/filo/search", {
              params: {
                "reino_idreino": reino.idreino
              }
            })
              .then(response => {
                console.log(response.data);
                setFiloList(response.data);
              }, error => {
                console.log(error);
              });
          }
        }, (error) => {
          console.log(error);
        });
    }
    if (persist === true && tmpState === "classe" && filo.idfilo > 0) {
      axios.post(baseurl+ '/api/' + tmpState, {
        classe: itemValue,
        filo_idfilo: filo.idfilo
      })
        .then((response) => {
          console.log(response);
          if (filo?.idfilo) {
            axios.get(baseurl+"/api/classe/search", {
              params: {
                "filo_idfilo": filo.idfilo
              }
            })
              .then(response => {
                console.log(response.data);
                setClasseList(response.data);
              }, error => {
                console.log(error);
              });
          }
        }, (error) => {
          console.log(error);
        });
    }
    if (persist === true && tmpState === "ordem" && classe.idclasse > 0) {
      axios.post(baseurl+ '/api/' + tmpState, {
        ordem: itemValue,
        classe_idclasse: classe.idclasse
      })
        .then((response) => {
          console.log(response);
          if (classe?.idclasse) {
            axios.get(baseurl+"/api/ordem/search", {
              params: {
                "classe_idclasse": classe.idclasse
              }
            })
              .then(response => {
                console.log(response.data);
                setOrdemList(response.data);
              }, error => {
                console.log(error);
              });
          }
        }, (error) => {
          console.log(error);
        });
    }
    if (persist === true && tmpState === "familia" && ordem.idordem > 0) {
      axios.post(baseurl+ '/api/' + tmpState, {
        familia: itemValue,
        ordem_idordem: ordem.idordem
      })
        .then((response) => {
          console.log(response);
          if (ordem?.idordem) {
            axios.get(baseurl+"/api/familia/search", {
              params: {
                "ordem_idordem": ordem.idordem
              }
            })
              .then(response => {
                console.log(response.data);
                setFamiliaList(response.data);
              }, error => {
                console.log(error);
              });
          }
        }, (error) => {
          console.log(error);
        });
    }
    if (persist === true && tmpState === "genero" && familia.idfamilia > 0) {
      axios.post(baseurl+ '/api/' + tmpState, {
        genero: itemValue,
        familia_idfamilia: familia.idfamilia
      })
        .then((response) => {
          console.log(response);
          if (familia?.idfamilia) {
            axios.get(baseurl+"/api/genero/search", {
              params: {
                "familia_idfamilia": familia.idfamilia
              }
            })
              .then(response => {
                console.log(response.data);
                setGeneroList(response.data);
              }, error => {
                console.log(error);
              });
          }
        }, (error) => {
          console.log(error);
        });
      console.log(itemValue);
    }
    if (persist === true && tmpState === "especie" && genero.idgenero > 0) {
      axios.post(baseurl+ '/api/' + tmpState, {
        especie: itemValue,
        genero_idgenero: genero.idgenero
      })
        .then((response) => {
          console.log(response);
          if (genero?.idgenero) {
            axios.get(baseurl+"/api/especie/search", {
              params: {
                "genero_idgenero": genero.idgenero
              }
            })
              .then(response => {
                console.log(response.data);
                setEspecieList(response.data);
              }, error => {
                console.log(error);
              });
          }
        }, (error) => {
          console.log(error);
        });
    }
    if (persist === true && tmpState === "sub_especie" && especie.idespecie > 0) {
      axios.post(baseurl+ '/api/' + tmpState, {
        sub_especie: itemValue,
        especie_idespecie: especie.idespecie
      })
        .then((response) => {
          console.log(response);
          if (especie?.idespecie) {
            axios.get(baseurl+"/api/sub_especie/search", {
              params: {
                "especie_idespecie": especie.idespecie
              }
            })
              .then(response => {
                console.log(response.data);
                setSub_especieList(response.data);
              }, error => {
                console.log(error);
              });
          }
        }, (error) => {
          console.log(error);
        });
    }
    if (persist === true && tmpState === "variedade" && sub_especie.idsub_especie > 0) {
      axios.post(baseurl+ '/api/' + tmpState, {
        variedade: itemValue,
        sub_especie_idsub_especie: sub_especie.idsub_especie
      })
        .then((response) => {
          console.log(response);
          if (sub_especie?.idsub_especie) {
            axios.get(baseurl+"/api/variedade/search", {
              params: {
                "sub_especie_idsub_especie": sub_especie.idsub_especie
              }
            })
              .then(response => {
                console.log(response.data);
                setVariedadeList(response.data);
              }, error => {
                console.log(error);
              });
          }
        }, (error) => {
          console.log(error);
        });
    }
    if (persist === true && tmpState === "referencia") {
      axios.post(baseurl+ '/api/' + tmpState, {
        referencia: itemValue,
      })
        .then((response) => {
          console.log(response);
        }, (error) => {
          console.log(error);
        });
    }
    setIsOpen(false);
  }
  //END DEFAULT MODAL

  //START PERSON MODAL
  const [itemPersonName, setItemPersonName] = React.useState(["", "", ""]);
  const [itemPersonValue, setItemPersonValue] = React.useState(["", "", ""]);
  const [modalPersonIsOpen, setPersonIsOpen] = useState(false);

  function openPersonModal(vartext, varval) {
    setPersonIsOpen(true);
    setItemPersonName(["Pesquisador", "Email", "Instituição"]);
    setItemPersonValue(varval);
  }

  function afterOpenPersonModal() {
    // references are now sync'd and can be accessed.
    // subtitle.style.color = '#f00';
  }

  function closePersonModal(persist) {
    setPersonIsOpen(false);
  }

  //END PERSON MODAL

  //START AUTOR MODAL - ESPECIE/SUB_ESPECIE/VARIEDADE - TAXA
  const [itemAutorName, setItemAutorName] = React.useState(["", ""]);
  const [itemAutorValue, setItemAutorValue] = React.useState(["", ""]);
  const [modalAutorIsOpen, setAutorIsOpen] = useState(false);

  function openAutorModal(vartext, varval) {
    setAutorIsOpen(true);
    setItemAutorName(["Espécie", "Autor"]);
    setItemAutorValue(varval);
  }

  function afterOpenAutorModal() {
    // references are now sync'd and can be accessed.
    // subtitle.style.color = '#f00';
  }

  function closeAutorModal(persist) {
    setAutorIsOpen(false);
  }

  //END AUTOR MODAL
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
              {/* Foto, Comentários. referências adicionais */}
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
                    disabled={props.showOnly}
                    type="text"
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
      {/* MODAL PERSON */}
      <Modal
        isOpen={modalPersonIsOpen}
        onAfterOpen={afterOpenPersonModal}
        onRequestClose={closePersonModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div>
          <form>
            <div className="flex flex-wrap">
              {/* Foto, Comentários. referências adicionais */}
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
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    value={itemPersonValue[0]}
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
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    value={itemPersonValue[1]}
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
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    value={itemPersonValue[2]}
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
      {/* MODAL AUTOR */}
      <Modal
        isOpen={modalAutorIsOpen}
        onAfterOpen={afterOpenAutorModal}
        onRequestClose={closeAutorModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div>
          <form>
            <div className="flex flex-wrap">
              {/* Foto, Comentários. referências adicionais */}
              <div className="w-full lg:w-12/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    {itemAutorName[0]}
                  </label>
                  <input
                    disabled={props.showOnly}
                    type="text"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    value={itemAutorValue[0]}
                  />
                </div>
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    {itemAutorName[1]}
                  </label>
                  <input
                    disabled={props.showOnly}
                    type="text"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    value={itemAutorValue[1]}
                  />
                </div>
                <div className="relative w-full mb-3">
                  <button
                    className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => {
                      closeAutorModal(false);
                    }}
                  >
                    Cancelar
                  </button>
                  <button
                    className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => {
                      closeAutorModal(true);
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
      <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
        <div className="w-full py-6">
          <ul
            className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
            role="tablist"
          >
            <li
              className="-mb-px mr-2 last:mr-0 flex-auto text-center"
              style={{ display: props.isRepique ? "none" : "block" }}
            >
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 1
                    ? "text-white bg-lightBlue-600"
                    : "text-lightBlue-600 bg-white")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(1);
                }}
                data-toggle="tab"
                href="#link1"
                role="tablist"
              >
                Taxa
              </a>
            </li>
            <li
              className="-mb-px mr-2 last:mr-0 flex-auto text-center"
              style={{ display: props.isRepique ? "none" : "block" }}
            >
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 2
                    ? "text-white bg-lightBlue-600"
                    : "text-lightBlue-600 bg-white")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(2);
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist"
              >
                Origem
              </a>
            </li>
            <li
              className="-mb-px mr-2 last:mr-0 flex-auto text-center"
              style={{ display: props.isRepique ? "none" : "block" }}
            >
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 3
                    ? "text-white bg-lightBlue-600"
                    : "text-lightBlue-600 bg-white")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(3);
                }}
                data-toggle="tab"
                href="#link3"
                role="tablist"
              >
                Isolamento
              </a>
            </li>
            <li
              className="-mb-px mr-2 last:mr-0 flex-auto text-center"
              style={{ display: props.isRepique ? "none" : "block" }}
            >
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 4
                    ? "text-white bg-lightBlue-600"
                    : "text-lightBlue-600 bg-white")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(4);
                }}
                data-toggle="tab"
                href="#link3"
                role="tablist"
              >
                Caracteristicas
              </a>
            </li>
            <li
              className="-mb-px mr-2 last:mr-0 flex-auto text-center"
              style={{ display: props.isRepique ? "none" : "block" }}
            >
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 5
                    ? "text-white bg-lightBlue-600"
                    : "text-lightBlue-600 bg-white")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(5);
                }}
                data-toggle="tab"
                href="#link3"
                role="tablist"
              >
                Molecular
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 6
                    ? "text-white bg-lightBlue-600"
                    : "text-lightBlue-600 bg-white")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(6);
                }}
                data-toggle="tab"
                href="#link3"
                role="tablist"
              >
                Localização
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 7
                    ? "text-white bg-lightBlue-600"
                    : "text-lightBlue-600 bg-white")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(7);
                }}
                data-toggle="tab"
                href="#link3"
                role="tablist"
              >
                Outros
              </a>
            </li>
          </ul>
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
            <div className="px-4 py-5 flex-auto">
              <div className="tab-content tab-space">
                <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                  <form>
                    <div className="flex flex-wrap">
                      <div className="w-full lg:w-6/12 px-4">
                        <div className="relative w-full mb-3">
                          <label
                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                            htmlFor="grid-password"
                          >
                            Domínio
                          </label>
                          <Select
                            className="w-8/12"
                            isDisabled={props.showOnly}
                            searchable={true}
                            placeholder={"Select an option"}
                            options={dominioList}
                            defaultValue={dominio}
                            onChange={setDominio}
                            getOptionLabel={(options) => options["dominio"]}
                            getOptionValue={(options) => options["iddominio"]}
                          />
                          {props.showOnly === false ? (
                            <>
                              <button
                                className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                                type="button"
                                onClick={() => {
                                  openModal("Domínio", "", "dominio");
                                }}
                              >
                                <i className="fas fa-plus"></i>
                              </button>
                              <button
                                className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                                type="button"
                                onClick={() => {
                                  openModal("Domínio", "Coco", "dominio");
                                }}
                              >
                                <i className="fas fa-pencil-alt" />
                              </button>
                            </>
                          ) : null}
                        </div>
                      </div>
                      <div className="w-full lg:w-6/12 px-4">
                        <div className="relative w-full mb-3">
                          <label
                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                            htmlFor="grid-password"
                          >
                            Reino
                          </label>

                          <Select
                            className="w-8/12"
                            isDisabled={props.showOnly}
                            searchable={true}
                            placeholder={"Select an option"}
                            options={reinoList}
                            defaultValue={reino}
                            onChange={setReino}
                            getOptionLabel={(options) => options["reino"]}
                            getOptionValue={(options) => options["idreino"]}
                          />
                          {props.showOnly === false ? (
                            <>
                              <button
                                className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                                type="button"
                                onClick={() => {
                                  openModal("Reino", "", "reino");
                                }}
                              >
                                <i className="fas fa-plus"></i>
                              </button>
                              <button
                                className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                                type="button"
                                onClick={() => {
                                  openModal("Reino", "Coco", "reino");
                                }}
                              >
                                <i className="fas fa-pencil-alt" />
                              </button>
                            </>
                          ) : null}
                        </div>
                      </div>
                      <div className="w-full lg:w-6/12 px-4">
                        <div className="relative w-full mb-3">
                          <label
                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                            htmlFor="grid-password"
                          >
                            Filo
                          </label>

                          <Select
                            className="w-8/12"
                            isDisabled={props.showOnly}
                            searchable={true}
                            placeholder={"Select an option"}
                            options={filoList}
                            defaultValue={filo}
                            onChange={setFilo}
                            getOptionLabel={(options) => options["filo"]}
                            getOptionValue={(options) => options["idFilo"]}
                          />
                          {props.showOnly === false ? (
                            <>
                              <button
                                className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                                type="button"
                                onClick={() => {
                                  openModal("Filo", "", "filo");
                                }}
                              >
                                <i className="fas fa-plus"></i>
                              </button>
                              <button
                                className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                                type="button"
                                onClick={() => {
                                  openModal("Filo", "Coco", "filo");
                                }}
                              >
                                <i className="fas fa-pencil-alt" />
                              </button>
                            </>
                          ) : null}
                        </div>
                      </div>
                      <div className="w-full lg:w-6/12 px-4">
                        <div className="relative w-full mb-3">
                          <label
                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                            htmlFor="grid-password"
                          >
                            Classe
                          </label>

                          <Select
                            className="w-8/12"
                            isDisabled={props.showOnly}
                            searchable={true}
                            placeholder={"Select an option"}
                            options={classeList}
                            defaultValue={classe}
                            onChange={setClasse}
                            getOptionLabel={(options) => options["classe"]}
                            getOptionValue={(options) => options["idClasse"]}
                          />
                          {props.showOnly === false ? (
                            <>
                              <button
                                className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                                type="button"
                                onClick={() => {
                                  openModal("Classe", "", "classe");
                                }}
                              >
                                <i className="fas fa-plus"></i>
                              </button>
                              <button
                                className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                                type="button"
                                onClick={() => {
                                  openModal("Classe", "Coco", "classe");
                                }}
                              >
                                <i className="fas fa-pencil-alt" />
                              </button>
                            </>
                          ) : null}
                        </div>
                      </div>
                      <div className="w-full lg:w-6/12 px-4">
                        <div className="relative w-full mb-3">
                          <label
                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                            htmlFor="grid-password"
                          >
                            Ordem
                          </label>

                          <Select
                            className="w-8/12"
                            isDisabled={props.showOnly}
                            searchable={true}
                            placeholder={"Select an option"}
                            options={ordemList}
                            defaultValue={ordem}
                            onChange={setOrdem}
                            getOptionLabel={(options) => options["ordem"]}
                            getOptionValue={(options) => options["idOrdem"]}
                          />
                          {props.showOnly === false ? (
                            <>
                              <button
                                className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                                type="button"
                                onClick={() => {
                                  openModal("Ordem", "", "ordem");
                                }}
                              >
                                <i className="fas fa-plus"></i>
                              </button>
                              <button
                                className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                                type="button"
                                onClick={() => {
                                  openModal("Ordem", "Coco", "ordem");
                                }}
                              >
                                <i className="fas fa-pencil-alt" />
                              </button>
                            </>
                          ) : null}
                        </div>
                      </div>
                      <div className="w-full lg:w-6/12 px-4">
                        <div className="relative w-full mb-3">
                          <label
                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                            htmlFor="grid-password"
                          >
                            Família
                          </label>

                          <Select
                            className="w-8/12"
                            isDisabled={props.showOnly}
                            searchable={true}
                            placeholder={"Select an option"}
                            options={familiaList}
                            defaultValue={familia}
                            onChange={setFamilia}
                            getOptionLabel={(options) => options["familia"]}
                            getOptionValue={(options) => options["idfamilia"]}
                          />
                          {props.showOnly === false ? (
                            <>
                              <button
                                className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                                type="button"
                                onClick={() => {
                                  openModal("Família", "", "familia");
                                }}
                              >
                                <i className="fas fa-plus"></i>
                              </button>
                              <button
                                className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                                type="button"
                                onClick={() => {
                                  openModal("Família", "Coco", "familia");
                                }}
                              >
                                <i className="fas fa-pencil-alt" />
                              </button>
                            </>
                          ) : null}
                        </div>
                      </div>
                      <div className="w-full lg:w-6/12 px-4">
                        <div className="relative w-full mb-3">
                          <label
                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                            htmlFor="grid-password"
                          >
                            Gênero
                          </label>
                          <Select
                            className="w-8/12"
                            isDisabled={props.showOnly}
                            searchable={true}
                            placeholder={"Select an option"}
                            options={generoList}
                            defaultValue={genero}
                            onChange={setGenero}
                            getOptionLabel={(options) => options["genero"]}
                            getOptionValue={(options) => options["idgenero"]}
                          />
                          {props.showOnly === false ? (
                            <>
                              <button
                                className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                                type="button"
                                onClick={() => {
                                  openModal("Gênero", "", "genero");
                                }}
                              >
                                <i className="fas fa-plus"></i>
                              </button>
                              <button
                                className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                                type="button"
                                onClick={() => {
                                  openModal("Gênero", "Coco");
                                }}
                              >
                                <i className="fas fa-pencil-alt" />
                              </button>
                            </>
                          ) : null}
                        </div>
                      </div>
                      <div className="w-full lg:w-6/12 px-4">
                        <div className="relative w-full mb-3">
                          <label
                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                            htmlFor="grid-password"
                          >
                            Espécie
                          </label>
                          <Select
                            className="w-8/12"
                            isDisabled={props.showOnly}
                            searchable={true}
                            placeholder={"Select an option"}
                            options={especieList}
                            defaultValue={especie}
                            onChange={setEspecie}
                            getOptionLabel={(options) => options["especie"]}
                            getOptionValue={(options) => options["idespecie"]}
                          />
                          {props.showOnly === false ? (
                            <>
                              <button
                                className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                                type="button"
                                onClick={() => {
                                  openAutorModal(
                                    ["Espécie", "Autor"],
                                    ["", ""]
                                  );
                                }}
                              >
                                <i className="fas fa-plus"></i>
                              </button>
                              <button
                                className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                                type="button"
                                onClick={() => {
                                  openAutorModal(
                                    ["Espécie", "Autor"],
                                    [
                                      "", ""]
                                  );
                                }}
                              >
                                <i className="fas fa-pencil-alt" />
                              </button>
                            </>
                          ) : null}
                        </div>
                      </div>
                      <div className="w-full lg:w-6/12 px-4">
                        <div className="relative w-full mb-3">
                          <label
                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                            htmlFor="grid-password"
                          >
                            Sub-espécie
                          </label>
                          <Select
                            className="w-8/12"
                            isDisabled={props.showOnly}
                            searchable={true}
                            placeholder={"Select an option"}
                            options={sub_especieList}
                            defaultValue={sub_especie}
                            onChange={setSub_especie}
                            getOptionLabel={(options) => options["sub_especie"]}
                            getOptionValue={(options) => options["idsub_especie"]
                            }
                          />
                          {/* <select
                            className="text-blueGray-600 text-xs font-bold mb-2 w-full"
                            disabled={props.showOnly}
                          >
                            <option value="laranja">Laranja</option>
                            <option value="limao">Limão</option>
                            <option selected value="coco">
                             Pleurotus purpureo-olivaceus - (Jacq.) P. Kumm. 1871
                            </option>
                            <option value="manga">Manga</option>
                          </select> */}
                          {props.showOnly === false ? (
                            <>
                              <button
                                className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                                type="button"
                                onClick={() => {
                                  openAutorModal(
                                    ["Sub-Espécie", "Autor"],
                                    ["", ""]
                                  );
                                }}
                              >
                                <i className="fas fa-plus"></i>
                              </button>
                              <button
                                className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                                type="button"
                                onClick={() => {
                                  openAutorModal(
                                    ["Sub-Espécie", "Autor"],
                                    [
                                      " Pleurotus purpureo-olivaceus",
                                      "(Jacq.) P. Kumm. 1871",
                                    ]
                                  );
                                }}
                              >
                                <i className="fas fa-pencil-alt" />
                              </button>
                            </>
                          ) : null}
                        </div>
                      </div>
                      <div className="w-full lg:w-6/12 px-4">
                        <div className="relative w-full mb-3">
                          <label
                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                            htmlFor="grid-password"
                          >
                            Variedade
                          </label>

                          <Select
                            className="w-8/12"
                            isDisabled={props.showOnly}
                            searchable={true}
                            placeholder={"Select an option"}
                            options={variedadeList}
                            defaultValue={variedade}
                            onChange={setVariedade}
                            getOptionLabel={(options) => options["variedade"]}
                            getOptionValue={(options) => options["idvariedade"]}
                          />
                          {props.showOnly === false ? (
                            <>
                              <button
                                className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                                type="button"
                                onClick={() => {
                                  openAutorModal(
                                    ["Variedade", "Autor"],
                                    ["", ""]
                                  );
                                }}
                              >
                                <i className="fas fa-plus"></i>
                              </button>
                              <button
                                className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                                type="button"
                                onClick={() => {
                                  openAutorModal(
                                    ["Variedade", "Autor"],
                                    [
                                      "Pleurotus purpureo-olivaceus",
                                      "(Jacq.) P. Kumm. 1871",
                                    ]
                                  );
                                }}
                              >
                                <i className="fas fa-pencil-alt" />
                              </button>
                            </>
                          ) : null}
                        </div>
                      </div>
                      <div className="w-full lg:w-8/12 px-4">
                        <div className="relative w-full mb-3">
                          <label
                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                            htmlFor="grid-password"
                          >
                            Referências taxonômicas
                            {/* ARTIGO -  */}
                          </label>

                          <Select
                            className="w-8/12"
                            isDisabled={props.showOnly}
                            searchable={true}
                            placeholder={"Select an option"}
                            options={referenciaList}
                            defaultValue={referencia}
                            isMulti
                            onChange={setReferencia}
                            getOptionLabel={(options) => options["referencia"]}
                            getOptionValue={(options) => options["idreferencia"]
                            }
                          />
                          {props.showOnly === false ? (
                            <>
                              <button
                                className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                                type="button"
                                onClick={() => {
                                  openModal("Artigo", "");
                                }}
                              >
                                <i className="fas fa-plus"></i>
                              </button>
                              <button
                                className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                                type="button"
                                onClick={() => {
                                  openModal("Artigo", "Coco");
                                }}
                              >
                                <i className="fas fa-pencil-alt" />
                              </button>
                            </>
                          ) : null}
                        </div>
                      </div>
                      <div className="w-full lg:w-4/12 px-4">
                        <div className="relative w-full mb-3">
                          <label
                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                            htmlFor="grid-password"
                          >
                            Status
                            {/* Disponivel, Indisponível ou Pendente */}
                          </label>

                          <Select
                            className="w-8/12"
                            isDisabled={props.showOnly}
                            searchable={true}
                            placeholder={"Select an option"}
                            options={statusList}
                            defaultValue={status}
                            onChange={setStatus}
                            getOptionLabel={(options) => options["status"]}
                            getOptionValue={(options) => options["idstatus"]}
                          />
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
                <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                  <form>
                    <div className="flex flex-wrap">
                      <div className="w-full lg:w-4/12 px-4">
                        <div className="relative w-full mb-3">
                          <label
                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                            htmlFor="grid-password"
                          >
                            Data do registro na coleção de origem
                          </label>
                          <input
                            disabled={props.showOnly}
                            type="date"
                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                          />
                        </div>
                      </div>
                      <div className="w-full lg:w-8/12 px-4">
                        <div className="relative w-full lg:w-4/12 mb-3">
                          <label
                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                            htmlFor="grid-password"
                          >
                            Registro em outras coleções (Código Original)
                          </label>
                          <input
                            disabled={props.showOnly}
                            type="email"
                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                            defaultValue=""
                          />
                        </div>
                        <div className="relative w-full mb-3">
                          <label
                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                            htmlFor="grid-password"
                          >
                            Registro em outras coleções (Histórico)
                          </label>
                          <input
                            disabled={props.showOnly}
                            type="email"
                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                            defaultValue=""
                          />
                        </div>
                      </div>
                      <div className="w-full lg:w-4/12 px-4">
                        <div className="relative w-full mb-3">
                          <label
                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                            htmlFor="grid-password"
                          >
                            Data da coleta
                          </label>
                          <input
                            disabled={props.showOnly}
                            type="date"
                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                          />
                        </div>
                      </div>
                      <div className="w-full lg:w-8/12 px-4">
                        <div className="relative w-full mb-3">
                          <label
                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                            htmlFor="grid-password"
                          >
                            Responsável pela coleta
                          </label>
                          <Select
                            className="w-8/12"
                            isDisabled={props.showOnly}
                            searchable={true}
                            placeholder={"Select an option"}
                            options={pesquisadorList}
                            defaultValue={coletor}
                            onChange={setColetor}
                            getOptionLabel={(options) => options["nome"]+" - "+options["email"]+" - "+options["instituicao"]}
                            getOptionValue={(options) => options["idpesquisador"]}
                          />
                          {props.showOnly === false ? (
                            <>
                              <button
                                className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                                type="button"
                                onClick={() => {
                                  openPersonModal("Domínio", ["", "", ""]);
                                }}
                              >
                                <i className="fas fa-plus"></i>
                              </button>
                              <button
                                className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                                type="button"
                                onClick={() => {
                                  openPersonModal("Domínio", [
                                    "Pesquisador 1",
                                    "pesq1@uea.edu.br",
                                    "UEA",
                                  ]);
                                }}
                              >
                                <i className="fas fa-pencil-alt" />
                              </button>
                            </>
                          ) : null}
                        </div>
                      </div>
                      <div className="w-full lg:w-4/12 px-4 block">
                        <div className="relative w-full mb-3">
                          <label
                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                            htmlFor="grid-password"
                          >
                            Habitat
                          </label>

                          <Select
                            className="w-4/12"
                            isDisabled={props.showOnly}
                            searchable={true}
                            placeholder={"Select an option"}
                            options={habitatList}
                            defaultValue={habitat}
                            onChange={setHabitat}
                            getOptionLabel={(options) => options["habitat"]}
                            getOptionValue={(options) => options["idHabitat"]}
                          />
                        </div>
                      </div>

                      <div className="w-full lg:w-12/12 px-4">
                        <div className="relative w-full mb-3">
                        </div>
                      </div>
                      {habitat.idHabitat <= 2 ? (

                        <>
                          <div className="w-full lg:w-6/12 px-4">
                            <div className="relative w-full mb-3">
                              <label
                                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                htmlFor="grid-password"
                              >
                                Hospedeiro vegetal (Espécie)
                                {/* ARTIGO -  */}
                              </label>

                              <Select
                                className="w-8/12"
                                isDisabled={props.showOnly}
                                searchable={true}
                                placeholder={"Select an option"}
                                options={hospVegList}
                                defaultValue={hospVeg}
                                isMulti
                                onChange={setHospVeg}
                                getOptionLabel={(options) => options["hospedeiro"]}
                                getOptionValue={(options) =>
                                  options["idHospedeiro"]
                                }
                              />
                              {props.showOnly === false ? (
                                <>
                                  <button
                                    className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                                    type="button"
                                    onClick={() => {
                                      openModal("Hospedeiro vegetal", "");
                                    }}
                                  >
                                    <i className="fas fa-plus"></i>
                                  </button>
                                  <button
                                    className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                                    type="button"
                                    onClick={() => {
                                      openModal("Hospedeiro vegetal", "");
                                    }}
                                  >
                                    <i className="fas fa-pencil-alt" />
                                  </button>
                                </>
                              ) : null}
                            </div>
                          </div>

                          <div className="w-full lg:w-6/12 px-4">
                            <div className="relative w-full mb-3">
                              <label
                                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                htmlFor="grid-password"
                              >
                                Substrato
                                {/* ARTIGO -  */}
                              </label>

                              <Select
                                className="w-8/12"
                                isDisabled={props.showOnly}
                                searchable={true}
                                placeholder={"Select an option"}
                                options={substratoList}
                                defaultValue={substrato}
                                isMulti
                                onChange={setSubstrato}
                                getOptionLabel={(options) => options["substrato"]}
                                getOptionValue={(options) =>
                                  options["idSubstrato"]
                                }
                              />
                              {props.showOnly === false ? (
                                <>
                                  <button
                                    className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                                    type="button"
                                    onClick={() => {
                                      openModal("Substrato", "");
                                    }}
                                  >
                                    <i className="fas fa-plus"></i>
                                  </button>
                                  <button
                                    className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                                    type="button"
                                    onClick={() => {
                                      openModal("Substrato", "Coco");
                                    }}
                                  >
                                    <i className="fas fa-pencil-alt" />
                                  </button>
                                </>
                              ) : null}
                            </div>
                          </div>

                          <div className="w-full lg:w-4/12 px-4">
                            <div className="relative w-full mb-3">
                              <label
                                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                htmlFor="grid-password"
                              >
                                Registro da Exsicata do Hospedeiro
                              </label>
                              <input
                                disabled={props.showOnly}
                                type="email"
                                className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                defaultValue=""
                              />
                            </div>
                          </div>

                          <div className="w-full lg:w-4/12 px-4">
                            <div className="relative w-full mb-3">
                              <label
                                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                htmlFor="grid-password"
                              >
                                Herbário do depósito do hospedeiro
                              </label>
                              <input
                                disabled={props.showOnly}
                                type="email"
                                className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                defaultValue=""
                              />
                            </div>
                          </div>

                          <div className="w-full lg:w-4/12 px-4">
                            <div className="relative w-full mb-3">
                              <label
                                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                htmlFor="grid-password"
                              >
                                Código original do herbário
                              </label>
                              <input
                                disabled={props.showOnly}
                                type="email"
                                className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                defaultValue=""
                              />
                            </div>
                          </div>
                        </>
                      ) : null}
                      {habitat.idHabitat === 3 ? (
                        <>
                          <div className="w-full lg:w-6/12 px-4">
                            <div className="relative w-full mb-3">
                              <label
                                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                htmlFor="grid-password"
                              >
                                Hospedeiro animal (Espécie)
                                {/* ARTIGO -  */}
                              </label>

                              <Select
                                className="w-8/12"
                                isDisabled={props.showOnly}
                                searchable={true}
                                placeholder={"Select an option"}
                                options={hospAnList}
                                defaultValue={hospAn}
                                isMulti
                                onChange={setHospAn}
                                getOptionLabel={(options) => options["hospedeiro"]}
                                getOptionValue={(options) =>
                                  options["idHospedeiro"]
                                }
                              />
                              {props.showOnly === false ? (
                                <>
                                  <button
                                    className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                                    type="button"
                                    onClick={() => {
                                      openModal("Hospedeiro animal", "");
                                    }}
                                  >
                                    <i className="fas fa-plus"></i>
                                  </button>
                                  <button
                                    className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                                    type="button"
                                    onClick={() => {
                                      openModal("Hospedeiro animal", "");
                                    }}
                                  >
                                    <i className="fas fa-pencil-alt" />
                                  </button>
                                </>
                              ) : null}
                            </div>
                          </div>

                          <div className="w-full lg:w-6/12 px-4">
                            <div className="relative w-full mb-3">
                              <label
                                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                htmlFor="grid-password"
                              >
                                Sítio anatômico
                                {/* ARTIGO -  */}
                              </label>

                              <Select
                                className="w-8/12"
                                isDisabled={props.showOnly}
                                searchable={true}
                                placeholder={"Select an option"}
                                options={sitioAnatList}
                                defaultValue={sitioAnat}
                                isMulti
                                onChange={setSitioAnat}
                                getOptionLabel={(options) => options["sitio"]}
                                getOptionValue={(options) =>
                                  options["idSitio"]
                                }
                              />
                              {props.showOnly === false ? (
                                <>
                                  <button
                                    className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                                    type="button"
                                    onClick={() => {
                                      openModal("Sítio anatômico", "");
                                    }}
                                  >
                                    <i className="fas fa-plus"></i>
                                  </button>
                                  <button
                                    className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                                    type="button"
                                    onClick={() => {
                                      openModal("Sítio anatômico", "Coco");
                                    }}
                                  >
                                    <i className="fas fa-pencil-alt" />
                                  </button>
                                </>
                              ) : null}
                            </div>
                          </div>
                        </>
                      ) : null}
                      <div className="w-full lg:w-12/12 px-4">
                        <div className="relative w-full mb-3">
                          <label
                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                            htmlFor="grid-password"
                          >
                            Mais Informações (Habitat)
                          </label>
                          <input
                            disabled={props.showOnly}
                            type="email"
                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                            defaultValue=""
                          />
                        </div>
                      </div>
                      <div className="w-full lg:w-6/12 px-4">
                        <div className="relative w-full mb-3">
                          <label
                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                            htmlFor="grid-password"
                          >
                            Origem Geográfica
                          </label>
                          <input
                            disabled={props.showOnly}
                            type="email"
                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                            defaultValue=""
                          />
                        </div>
                      </div>
                      <div className="w-full lg:w-3/12 px-4">
                        <div className="relative w-full mb-3">
                          <label
                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                            htmlFor="grid-password"
                          >
                            Latitude
                          </label>
                          <input
                            disabled={props.showOnly}
                            type="email"
                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                            defaultValue=""
                          />
                        </div>
                      </div>
                      <div className="w-full lg:w-3/12 px-4">
                        <div className="relative w-full mb-3">
                          <label
                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                            htmlFor="grid-password"
                          >
                            Longitude
                          </label>
                          <input
                            disabled={props.showOnly}
                            type="email"
                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                            defaultValue=""
                          />
                        </div>
                      </div>
                      <div className="w-full lg:w-3/12 px-4">
                        <div className="relative w-full mb-3">
                          <label
                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                            htmlFor="grid-password"
                          >
                            DATUM
                          </label>
                          <input
                            disabled={props.showOnly}
                            type="email"
                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                            defaultValue=""
                          />
                        </div>
                      </div>
                      <div className="w-full lg:w-3/12 px-4">
                        <div className="relative w-full mb-3">
                          <label
                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                            htmlFor="grid-password"
                          >
                            Precisão
                          </label>
                          <input
                            disabled={props.showOnly}
                            type="email"
                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                            defaultValue=""
                          />
                        </div>
                      </div>
                      <div className="w-full lg:w-12/12 px-4">
                        <div className="relative w-full mb-3">
                          <label
                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                            htmlFor="grid-password"
                          >
                            Comentários sobre origem
                          </label>
                          <input
                            disabled={props.showOnly}
                            type="email"
                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                            defaultValue=""
                          />
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
                <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                  <form>
                    <div className="flex flex-wrap">
                      <div className="w-full lg:w-3/12 px-4">
                        <div className="relative w-full mb-3">
                          <label
                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                            htmlFor="grid-password"
                          >
                            Data do Isolamento
                          </label>
                          <input
                            disabled={props.showOnly}
                            type="date"
                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                          />
                        </div>
                      </div>
                      <div className="w-full lg:w-9/12 px-4">
                        <div className="relative w-full mb-3">
                          <label
                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                            htmlFor="grid-password"
                          >
                            Responsável pelo isolamento
                          </label>
                          <Select
                            className="w-8/12"
                            isDisabled={props.showOnly}
                            searchable={true}
                            placeholder={"Select an option"}
                            options={pesquisadorList}
                            defaultValue={pesqIsola}
                            onChange={setPesqIsola}
                            getOptionLabel={(options) => options["pesquisador"]}
                            getOptionValue={(options) =>
                              options["idPesquisador"]
                            }
                          />
                          {props.showOnly === false ? (
                            <>
                              <button
                                className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                                type="button"
                                onClick={() => {
                                  openPersonModal("Domínio", ["", "", ""]);
                                }}
                              >
                                <i className="fas fa-plus"></i>
                              </button>
                              <button
                                className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                                type="button"
                                onClick={() => {
                                  openPersonModal("Domínio", [
                                    "Pesquisador 1",
                                    "pesq1@uea.edu.br",
                                    "UEA",
                                  ]);
                                }}
                              >
                                <i className="fas fa-pencil-alt" />
                              </button>
                            </>
                          ) : null}
                        </div>
                      </div>
                      <div className="w-full lg:w-12/12 px-4">
                        <div className="relative w-full mb-3">
                          <label
                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                            htmlFor="grid-password"
                          >
                            Informações sobre o método de isolamento
                          </label>
                          <input
                            disabled={props.showOnly}
                            type="email"
                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                            defaultValue=""
                          />
                        </div>
                      </div>
                      <div className="w-full lg:w-3/12 px-4">
                        <div className="relative w-full mb-3">
                          <label
                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                            htmlFor="grid-password"
                          >
                            Data da identificação
                          </label>
                          <input
                            disabled={props.showOnly}
                            type="date"
                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                          />
                        </div>
                      </div>
                      <div className="w-full lg:w-9/12 px-4">
                        <div className="relative w-full mb-3">
                          <label
                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                            htmlFor="grid-password"
                          >
                            Identificador
                          </label>
                          <Select
                            className="w-8/12"
                            isDisabled={props.showOnly}
                            searchable={true}
                            placeholder={"Select an option"}
                            options={pesquisadorList}
                            defaultValue={pesqId}
                            onChange={setPesqId}
                            getOptionLabel={(options) => options["pesquisador"]}
                            getOptionValue={(options) =>
                              options["idPesquisador"]
                            }
                          />
                          {props.showOnly === false ? (
                            <>
                              <button
                                className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                                type="button"
                                onClick={() => {
                                  openPersonModal("Domínio", ["", "", ""]);
                                }}
                              >
                                <i className="fas fa-plus"></i>
                              </button>
                              <button
                                className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                                type="button"
                                onClick={() => {
                                  openPersonModal("Domínio", [
                                    "Pesquisador 1",
                                    "pesq1@uea.edu.br",
                                    "UEA",
                                  ]);
                                }}
                              >
                                <i className="fas fa-pencil-alt" />
                              </button>
                            </>
                          ) : null}
                        </div>
                      </div>
                      <div className="w-full lg:w-12/12 px-4">
                        <div className="relative w-full mb-3">
                          <label
                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                            htmlFor="grid-password"
                          >
                            Comentário
                          </label>
                          <input
                            disabled={props.showOnly}
                            type="text"
                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                          />
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
                <div className={openTab === 4 ? "block" : "hidden"} id="link4">
                  <form>
                    <div className="flex flex-wrap">
                      <div className="w-full lg:w-4/12 px-4">
                        <div className="relative w-full mb-3">
                          <label
                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                            htmlFor="grid-password"
                          >
                            Cor da colônia
                          </label>

                          <Select
                            className="w-8/12"
                            isDisabled={props.showOnly}
                            searchable={true}
                            placeholder={"Select an option"}
                            options={corList}
                            defaultValue={corColonia}
                            onChange={setCorColonia}
                            getOptionLabel={(options) => options["cor"]}
                            getOptionValue={(options) => options["idCor"]}
                          />
                          {props.showOnly === false ? (
                            <>
                              <button
                                className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                                type="button"
                                onClick={() => {
                                  openModal("Cor", "");
                                }}
                              >
                                <i className="fas fa-plus"></i>
                              </button>
                              <button
                                className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                                type="button"
                                onClick={() => {
                                  openModal("Cor", "Coco");
                                }}
                              >
                                <i className="fas fa-pencil-alt" />
                              </button>
                            </>
                          ) : null}
                        </div>
                      </div>
                      <div className="w-full lg:w-4/12 px-4">
                        <div className="relative w-full mb-3">
                          <label
                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                            htmlFor="grid-password"
                          >
                            Textura
                          </label>

                          <Select
                            className="w-8/12"
                            isDisabled={props.showOnly}
                            searchable={true}
                            placeholder={"Select an option"}
                            options={texturaList}
                            defaultValue={textura}
                            onChange={setTextura}
                            getOptionLabel={(options) => options["textura"]}
                            getOptionValue={(options) => options["idTextura"]}
                          />
                          {props.showOnly === false ? (
                            <>
                              <button
                                className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                                type="button"
                                onClick={() => {
                                  openModal("Textura", "");
                                }}
                              >
                                <i className="fas fa-plus"></i>
                              </button>
                              <button
                                className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                                type="button"
                                onClick={() => {
                                  openModal("Textura", "Coco");
                                }}
                              >
                                <i className="fas fa-pencil-alt" />
                              </button>
                            </>
                          ) : null}
                        </div>
                      </div>
                      <div className="w-full lg:w-4/12 px-4">
                        <div className="relative w-full mb-3">
                          <label
                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                            htmlFor="grid-password"
                          >
                            Borda
                          </label>

                          <Select
                            className="w-8/12"
                            isDisabled={props.showOnly}
                            searchable={true}
                            placeholder={"Select an option"}
                            options={bordaList}
                            defaultValue={borda}
                            onChange={setBorda}
                            getOptionLabel={(options) => options["borda"]}
                            getOptionValue={(options) => options["idBorda"]}
                          />
                          {props.showOnly === false ? (
                            <>
                              <button
                                className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                                type="button"
                                onClick={() => {
                                  openModal("Borda", "");
                                }}
                              >
                                <i className="fas fa-plus"></i>
                              </button>
                              <button
                                className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                                type="button"
                                onClick={() => {
                                  openModal("Borda", "Coco");
                                }}
                              >
                                <i className="fas fa-pencil-alt" />
                              </button>
                            </>
                          ) : null}
                        </div>
                      </div>
                      <div className="w-full lg:w-4/12 px-4">
                        <div className="relative w-full mb-3">
                          <label
                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                            htmlFor="grid-password"
                          >
                            Relevo
                          </label>

                          <Select
                            className="w-8/12"
                            isDisabled={props.showOnly}
                            searchable={true}
                            placeholder={"Select an option"}
                            options={relevoList}
                            defaultValue={relevo}
                            onChange={setRelevo}
                            getOptionLabel={(options) => options["relevo"]}
                            getOptionValue={(options) => options["idRelevo"]}
                          />
                          {props.showOnly === false ? (
                            <>
                              <button
                                className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                                type="button"
                                onClick={() => {
                                  openModal("Relevo", "");
                                }}
                              >
                                <i className="fas fa-plus"></i>
                              </button>
                              <button
                                className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                                type="button"
                                onClick={() => {
                                  openModal("Relevo", "Coco");
                                }}
                              >
                                <i className="fas fa-pencil-alt" />
                              </button>
                            </>
                          ) : null}
                        </div>
                      </div>
                      <div className="w-full lg:w-4/12 px-4">
                        <div className="relative w-full mb-3">
                          <label
                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                            htmlFor="grid-password"
                          >
                            Exudato
                          </label>

                          <Select
                            className="w-8/12"
                            isDisabled={props.showOnly}
                            searchable={true}
                            placeholder={"Select an option"}
                            options={exudatoList}
                            defaultValue={exudato}
                            onChange={setExudato}
                            getOptionLabel={(options) => options["exudato"]}
                            getOptionValue={(options) => options["idExudato"]}
                          />
                          {props.showOnly === false ? (
                            <>
                              <button
                                className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                                type="button"
                                onClick={() => {
                                  openModal("Exudato", "");
                                }}
                              >
                                <i className="fas fa-plus"></i>
                              </button>
                              <button
                                className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                                type="button"
                                onClick={() => {
                                  openModal("Exudato", "Coco");
                                }}
                              >
                                <i className="fas fa-pencil-alt" />
                              </button>
                            </>
                          ) : null}
                        </div>
                      </div>
                      <div className="w-full lg:w-4/12 px-4">
                        <div className="relative w-full mb-3">
                          <label
                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                            htmlFor="grid-password"
                          >
                            Cor do Exudato
                          </label>

                          <Select
                            className="w-8/12"
                            isDisabled={props.showOnly}
                            searchable={true}
                            placeholder={"Select an option"}
                            options={corList}
                            defaultValue={corExu}
                            onChange={setCorExu}
                            getOptionLabel={(options) => options["cor"]}
                            getOptionValue={(options) => options["idCor"]}
                          />
                          {props.showOnly === false ? (
                            <>
                              <button
                                className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                                type="button"
                                onClick={() => {
                                  openModal("Cor", "");
                                }}
                              >
                                <i className="fas fa-plus"></i>
                              </button>
                              <button
                                className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                                type="button"
                                onClick={() => {
                                  openModal("Cor", "Coco");
                                }}
                              >
                                <i className="fas fa-pencil-alt" />
                              </button>
                            </>
                          ) : null}
                        </div>
                      </div>
                      <div className="w-full lg:w-4/12 px-4">
                        <div className="relative w-full mb-3">
                          <label
                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                            htmlFor="grid-password"
                          >
                            Pigmento
                          </label>

                          <Select
                            className="w-8/12"
                            isDisabled={props.showOnly}
                            searchable={true}
                            placeholder={"Select an option"}
                            options={pigmentoList}
                            defaultValue={pigmento}
                            onChange={setPigmento}
                            getOptionLabel={(options) => options["pigmento"]}
                            getOptionValue={(options) => options["idPigmento"]}
                          />
                          {props.showOnly === false ? (
                            <>
                              <button
                                className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                                type="button"
                                onClick={() => {
                                  openModal("Pigmento", "");
                                }}
                              >
                                <i className="fas fa-plus"></i>
                              </button>
                              <button
                                className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                                type="button"
                                onClick={() => {
                                  openModal("Pigmento", "Coco");
                                }}
                              >
                                <i className="fas fa-pencil-alt" />
                              </button>
                            </>
                          ) : null}
                        </div>
                      </div>
                      <div className="w-full lg:w-4/12 px-4">
                        <div className="relative w-full mb-3">
                          <label
                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                            htmlFor="grid-password"
                          >
                            Cor do pigmento no meio de cultura
                          </label>

                          <Select
                            className="w-8/12"
                            isDisabled={props.showOnly}
                            searchable={true}
                            placeholder={"Select an option"}
                            options={corList}
                            defaultValue={corPig}
                            onChange={setCorPig}
                            getOptionLabel={(options) => options["cor"]}
                            getOptionValue={(options) => options["idCor"]}
                          />
                          {props.showOnly === false ? (
                            <>
                              <button
                                className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                                type="button"
                                onClick={() => {
                                  openModal("Cor", "");
                                }}
                              >
                                <i className="fas fa-plus"></i>
                              </button>
                              <button
                                className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                                type="button"
                                onClick={() => {
                                  openModal("Cor", "Coco");
                                }}
                              >
                                <i className="fas fa-pencil-alt" />
                              </button>
                            </>
                          ) : null}
                        </div>
                      </div>
                      <div className="w-full lg:w-4/12 px-4">
                        <div className="relative w-full mb-3">
                          <label
                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                            htmlFor="grid-password"
                          >
                            Temperatura ótima de crescimento
                          </label>
                          <input
                            disabled={props.showOnly}
                            type="number"
                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                          />
                        </div>
                      </div>
                      <div className="w-full lg:w-12/12 px-4">
                        <div className="relative w-full mb-3">
                          <label
                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                            htmlFor="grid-password"
                          >
                            Referência para temperatura
                          </label>

                          <Select
                            className="w-8/12"
                            isDisabled={props.showOnly}
                            searchable={true}
                            placeholder={"Select an option"}
                            options={referenciaList}
                            isMulti
                            defaultValue={refTemp}
                            onChange={setRefTemp}
                            getOptionLabel={(options) => options["referencia"]}
                            getOptionValue={(options) =>
                              options["idReferencia"]
                            }
                          />
                          {props.showOnly === false ? (
                            <>
                              <button
                                className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                                type="button"
                                onClick={() => {
                                  openModal("Referência para temperatura", "");
                                }}
                              >
                                <i className="fas fa-plus"></i>
                              </button>
                              <button
                                className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                                type="button"
                                onClick={() => {
                                  openModal(
                                    "Referência para temperatura",
                                    "Coco"
                                  );
                                }}
                              >
                                <i className="fas fa-pencil-alt" />
                              </button>
                            </>
                          ) : null}
                        </div>
                      </div>
                      <div className="w-full lg:w-4/12 px-4">
                        <div className="relative w-full mb-3">
                          <label
                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                            htmlFor="grid-password"
                          >
                            Caracteristicas micromorfológicas
                          </label>

                          <Select
                            className="w-8/12"
                            isDisabled={props.showOnly}
                            searchable={true}
                            placeholder={"Select an option"}
                            options={caracMicroList}
                            isMulti
                            defaultValue={caracMicro}
                            onChange={setCaracMicro}
                            getOptionLabel={(options) =>
                              options["caracterisrica"]
                            }
                            getOptionValue={(options) =>
                              options["idCaracteristica"]
                            }
                          />
                          {props.showOnly === false ? (
                            <>
                              <button
                                className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                                type="button"
                                onClick={() => {
                                  openModal(
                                    "Caracteristicas micromorfológicas",
                                    ""
                                  );
                                }}
                              >
                                <i className="fas fa-plus"></i>
                              </button>
                              <button
                                className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                                type="button"
                                onClick={() => {
                                  openModal(
                                    "Caracteristicas micromorfológicas",
                                    "Coco"
                                  );
                                }}
                              >
                                <i className="fas fa-pencil-alt" />
                              </button>
                            </>
                          ) : null}
                        </div>
                      </div>
                      <div className="w-full lg:w-12/12 px-4">
                        <div className="relative w-full mb-3">
                          <label
                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                            htmlFor="grid-password"
                          >
                            Imagens macromorfológicas
                          </label>
                          <input
                            disabled={props.showOnly}
                            type="file"
                            multiple
                            accept="image/png, image/gif, image/jpeg"
                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                          />
                        </div>
                      </div>
                      <div className="w-full lg:w-12/12 px-4">
                        <div className="relative w-full mb-3">
                          <label
                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                            htmlFor="grid-password"
                          >
                            Imagens micromorfológicas
                          </label>
                          <input
                            disabled={props.showOnly}
                            type="file"
                            multiple
                            accept="image/png, image/gif, image/jpeg"
                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                          />
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
                <div className={openTab === 5 ? "block" : "hidden"} id="link6">
                  <form>
                    <div className="flex flex-wrap">
                      <div className="w-full lg:w-6/12 px-4">
                        <div className="relative w-full mb-3">
                          <label
                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                            htmlFor="grid-password"
                          >
                            Laboratório
                          </label>

                          <Select
                            className="w-8/12"
                            isDisabled={props.showOnly}
                            searchable={true}
                            placeholder={"Select an option"}
                            options={labList}
                            defaultValue={laboratorio}
                            onChange={setLaboratorio}
                            getOptionLabel={(options) => options["laboratorio"]}
                            getOptionValue={(options) =>
                              options["idLaboratorio"]
                            }
                          />
                          {props.showOnly === false ? (
                            <>
                              <button
                                className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                                type="button"
                                onClick={() => {
                                  openModal("Laboratório", "");
                                }}
                              >
                                <i className="fas fa-plus"></i>
                              </button>
                              <button
                                className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                                type="button"
                                onClick={() => {
                                  openModal("Laboratório", "Coco");
                                }}
                              >
                                <i className="fas fa-pencil-alt" />
                              </button>
                            </>
                          ) : null}
                        </div>
                      </div>
                      <div className="w-full lg:w-3/12 px-4">
                        <div className="relative w-full mb-3">
                          <label
                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                            htmlFor="grid-password"
                          >
                            Data
                          </label>
                          <input
                            disabled={props.showOnly}
                            type="date"
                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                          />
                        </div>
                      </div>
                      <div className="w-full lg:w-3/12 px-4">
                        <div className="relative w-full mb-3">
                          <label
                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                            htmlFor="grid-password"
                          >
                            Código
                          </label>
                          <input
                            disabled={props.showOnly}
                            type="text"
                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                          />
                        </div>
                      </div>
                      <div className="w-full lg:w-12/12 px-4">
                        <div className="relative w-full mb-3">
                          <label
                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                            htmlFor="grid-password"
                          >
                            Sequência
                          </label>
                          <input
                            disabled={props.showOnly}
                            type="text"
                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                          />
                        </div>
                      </div>
                      <div className="w-full lg:w-12/12 px-4">
                        <div className="relative w-full mb-3">
                          <label
                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                            htmlFor="grid-password"
                          >
                            Metadados
                          </label>
                          <input
                            disabled={props.showOnly}
                            type="text"
                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                          />
                        </div>
                      </div>
                      <div className="w-full lg:w-6/12 px-4">
                        <div className="relative w-full mb-3">
                          <label
                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                            htmlFor="grid-password"
                          >
                            Anexos
                          </label>
                          <input
                            disabled={props.showOnly}
                            type="file"
                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                          />
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
                <div className={openTab === 6 ? "block" : "hidden"} id="link7">
                  <form>
                    <div className="flex flex-wrap">
                      <div className="w-full lg:w-6/12 px-4">
                        <div className="relative w-full mb-3">
                          <label
                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                            htmlFor="grid-password"
                          >
                            Sub-Coleção
                          </label>

                          <Select
                            className="w-8/12"
                            isDisabled={props.showOnly}
                            searchable={true}
                            placeholder={"Select an option"}
                            options={dominioList}
                            defaultValue={dominio}
                            onChange={setDominio}
                            getOptionLabel={(options) => options["dominio"]}
                            getOptionValue={(options) => options["idDominio"]}
                          />
                          {props.showOnly === false ? (
                            <>
                              <button
                                className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                                type="button"
                                onClick={() => {
                                  openModal("Sub-Coleção", "");
                                }}
                              >
                                <i className="fas fa-plus"></i>
                              </button>
                              <button
                                className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                                type="button"
                                onClick={() => {
                                  openModal("Sub-Coleção", "Coco");
                                }}
                              >
                                <i className="fas fa-pencil-alt" />
                              </button>
                            </>
                          ) : null}
                        </div>
                      </div>
                      <div className="w-full lg:w-6/12 px-4">
                        <div className="relative w-full mb-3">
                          <label
                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                            htmlFor="grid-password"
                          >
                            Grupo de pesquisa
                          </label>

                          <Select
                            className="w-8/12"
                            isDisabled={props.showOnly}
                            searchable={true}
                            placeholder={"Select an option"}
                            options={dominioList}
                            defaultValue={dominio}
                            onChange={setDominio}
                            getOptionLabel={(options) => options["dominio"]}
                            getOptionValue={(options) => options["idDominio"]}
                          />
                          {props.showOnly === false ? (
                            <>
                              <button
                                className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                                type="button"
                                onClick={() => {
                                  openModal("Grupo de pesquisa", "");
                                }}
                              >
                                <i className="fas fa-plus"></i>
                              </button>
                              <button
                                className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                                type="button"
                                onClick={() => {
                                  openModal("Grupo de pesquisa", "Coco");
                                }}
                              >
                                <i className="fas fa-pencil-alt" />
                              </button>
                            </>
                          ) : null}
                        </div>
                      </div>
                      <div className="w-full lg:w-6/12 px-4">
                        <div className="relative w-full mb-3">
                          <label
                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                            htmlFor="grid-password"
                          >
                            Tipo de Frasco
                          </label>
                          <Select
                            className="w-8/12"
                            isDisabled={props.showOnly}
                            searchable={true}
                            placeholder={"Select an option"}
                            options={unidadeList}
                            defaultValue={unidade}
                            onChange={setUnidade}
                            getOptionLabel={(options) => options["unidade"]}
                            getOptionValue={(options) => options["idUnidade"]}
                          />
                          {props.showOnly === false ? (
                            <>
                              <button
                                className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                                type="button"
                                onClick={() => {
                                  openModal("Unidade", "");
                                }}
                              >
                                <i className="fas fa-plus"></i>
                              </button>
                              <button
                                className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                                type="button"
                                onClick={() => {
                                  openModal("Unidade", "FP");
                                }}
                              >
                                <i className="fas fa-pencil-alt" />
                              </button>
                            </>
                          ) : null}
                        </div>
                      </div>
                      <div className="w-full lg:w-6/12 px-4">
                        <div className="relative w-full mb-3">
                          <label
                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                            htmlFor="grid-password"
                          >
                            Armário
                          </label>
                          <Select
                            className="w-8/12"
                            isDisabled={props.showOnly}
                            searchable={true}
                            placeholder={"Select an option"}
                            options={armarioList}
                            defaultValue={armario}
                            onChange={setArmario}
                            getOptionLabel={(options) => options["armario"]}
                            getOptionValue={(options) => options["idArmario"]}
                          />
                          {props.showOnly === false ? (
                            <>
                              <button
                                className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                                type="button"
                                onClick={() => {
                                  openModal("Armário", "");
                                }}
                              >
                                <i className="fas fa-plus"></i>
                              </button>
                              <button
                                className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                                type="button"
                                onClick={() => {
                                  openModal("Armário", "Coco");
                                }}
                              >
                                <i className="fas fa-pencil-alt" />
                              </button>
                            </>
                          ) : null}
                        </div>
                      </div>
                      <div className="w-full lg:w-4/12 px-4">
                        <div className="relative w-full mb-3">
                          <label
                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                            htmlFor="grid-password"
                          >
                            Prateleira
                          </label>
                          <Select
                            className="w-8/12"
                            isDisabled={props.showOnly}
                            searchable={true}
                            placeholder={"Select an option"}
                            options={prateleiraList}
                            defaultValue={prateleira}
                            onChange={setprateleira}
                            getOptionLabel={(options) => options["prateleira"]}
                            getOptionValue={(options) =>
                              options["idPrateleira"]
                            }
                          />
                          {props.showOnly === false ? (
                            <>
                              <button
                                className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                                type="button"
                                onClick={() => {
                                  openModal("Prateleira", "");
                                }}
                              >
                                <i className="fas fa-plus"></i>
                              </button>
                              <button
                                className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                                type="button"
                                onClick={() => {
                                  openModal("Prateleira", "Coco");
                                }}
                              >
                                <i className="fas fa-pencil-alt" />
                              </button>
                            </>
                          ) : null}
                        </div>
                      </div>
                      <div className="w-full lg:w-4/12 px-4">
                        <div className="relative w-full mb-3">
                          <label
                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                            htmlFor="grid-password"
                          >
                            Lote
                          </label>
                          <Select
                            className="w-8/12"
                            isDisabled={props.showOnly}
                            searchable={true}
                            placeholder={"Select an option"}
                            options={loteList}
                            defaultValue={lote}
                            onChange={setLote}
                            getOptionLabel={(options) => options["lote"]}
                            getOptionValue={(options) => options["idLote"]}
                          />
                          {props.showOnly === false ? (
                            <>
                              <button
                                className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                                type="button"
                                onClick={() => {
                                  openModal("Lote", "");
                                }}
                              >
                                <i className="fas fa-plus"></i>
                              </button>
                              <button
                                className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                                type="button"
                                onClick={() => {
                                  openModal("Lote", "Coco");
                                }}
                              >
                                <i className="fas fa-pencil-alt" />
                              </button>
                            </>
                          ) : null}
                        </div>
                      </div>
                      <div className="w-full lg:w-4/12 px-4">
                        <div className="relative w-full mb-3">
                          <label
                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                            htmlFor="grid-password"
                          >
                            Posição
                          </label>
                          <Select
                            className="w-8/12"
                            isDisabled={props.showOnly}
                            searchable={true}
                            placeholder={"Select an option"}
                            options={posicaoList}
                            defaultValue={posicao}
                            onChange={setPosicao}
                            getOptionLabel={(options) => options["posicao"]}
                            getOptionValue={(options) => options["idPosicao"]}
                          />
                          {props.showOnly === false ? (
                            <>
                              <button
                                className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                                type="button"
                                onClick={() => {
                                  openModal("Posição", "");
                                }}
                              >
                                <i className="fas fa-plus"></i>
                              </button>
                              <button
                                className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                                type="button"
                                onClick={() => {
                                  openModal("Posição", "Coco");
                                }}
                              >
                                <i className="fas fa-pencil-alt" />
                              </button>
                            </>
                          ) : null}
                        </div>
                      </div>
                      <div className="w-full lg:w-3/12 px-4">
                        <div className="relative w-full mb-3">
                          <label
                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                            htmlFor="grid-password"
                          >
                            Data da preservação
                          </label>
                          <input
                            disabled={props.showOnly}
                            type="date"
                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                          />
                        </div>
                      </div>
                      <div className="w-full lg:w-9/12 px-4">
                        <div className="relative w-full mb-3">
                          <label
                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                            htmlFor="grid-password"
                          >
                            Responsável pela preservação
                          </label>
                          <Select
                            className="w-8/12"
                            isDisabled={props.showOnly}
                            searchable={true}
                            placeholder={"Select an option"}
                            options={pesquisadorList}
                            defaultValue={pesqPres}
                            onChange={setPesqPres}
                            getOptionLabel={(options) => options["pesquisador"]}
                            getOptionValue={(options) =>
                              options["idPesquisador"]
                            }
                          />
                          {props.showOnly === false ? (
                            <>
                              <button
                                className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                                type="button"
                                onClick={() => {
                                  openPersonModal("Domínio", ["", "", ""]);
                                }}
                              >
                                <i className="fas fa-plus"></i>
                              </button>
                              <button
                                className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                                type="button"
                                onClick={() => {
                                  openPersonModal("Domínio", [
                                    "Pesquisador 1",
                                    "pesq1@uea.edu.br",
                                    "UEA",
                                  ]);
                                }}
                              >
                                <i className="fas fa-pencil-alt" />
                              </button>
                            </>
                          ) : null}
                        </div>
                      </div>

                      <div className="w-full lg:w-6/12 px-4">
                        <div className="relative w-full mb-3">
                          <label
                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                            htmlFor="grid-password"
                          >
                            Método de Preservação
                          </label>

                          <Select
                            className="w-8/12"
                            isDisabled={props.showOnly}
                            searchable={true}
                            isMulti
                            placeholder={"Select an option"}
                            options={dominioList}
                            defaultValue={dominio}
                            onChange={setDominio}
                            getOptionLabel={(options) => options["dominio"]}
                            getOptionValue={(options) => options["idDominio"]}
                          />
                          {props.showOnly === false ? (
                            <>
                              <button
                                className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                                type="button"
                                onClick={() => {
                                  openModal("Método de Preservação", "");
                                }}
                              >
                                <i className="fas fa-plus"></i>
                              </button>
                              <button
                                className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                                type="button"
                                onClick={() => {
                                  openModal("Método de Preservação", "Coco");
                                }}
                              >
                                <i className="fas fa-pencil-alt" />
                              </button>
                            </>
                          ) : null}
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
                <div className={openTab === 7 ? "block" : "hidden"} id="link5">
                  <form>
                    <div className="flex flex-wrap">
                      {/* Foto, Comentários. referências adicionais */}
                      <div className="w-full lg:w-12/12 px-4">
                        <div className="relative w-full mb-3">
                          <label
                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                            htmlFor="grid-password"
                          >
                            Comentários
                          </label>
                          <input
                            disabled={props.showOnly}
                            type="text"
                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                          />
                        </div>
                      </div>
                      <div className="w-full lg:w-3/12 px-4">
                        <div className="relative w-full mb-3">
                          <label
                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                            htmlFor="grid-password"
                          >
                            Disponível para doação
                          </label>
                          <Select
                            className="w-8/12"
                            isDisabled={props.showOnly}
                            searchable={true}
                            placeholder={"Select an option"}
                            options={doacaoList}
                            defaultValue={doacao}
                            onChange={setDoacao}
                            getOptionLabel={(options) => options["doacao"]}
                            getOptionValue={(options) => options["idDoacao"]}
                          />
                        </div>
                      </div>
                      <div className="w-full lg:w-6/12 px-4">
                        <div className="relative w-full mb-3">
                          <label
                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                            htmlFor="grid-password"
                          >
                            Imagens adicionais
                          </label>
                          <input
                            disabled={props.showOnly}
                            type="file"
                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                          />
                        </div>
                      </div>
                      <div className="w-full lg:w-12/12 px-4">
                        <div className="relative w-full mb-3">
                          <label
                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                            htmlFor="grid-password"
                          >
                            Referências adicionais
                          </label>

                          <Select
                            className="w-8/12"
                            isDisabled={props.showOnly}
                            searchable={true}
                            placeholder={"Select an option"}
                            options={referenciaList}
                            defaultValue={refAdd}
                            onChange={setRefAdd}
                            getOptionLabel={(options) => options["referencia"]}
                            getOptionValue={(options) =>
                              options["idReferencia"]
                            }
                          />
                          {props.showOnly === false ? (
                            <>
                              <button
                                className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                                type="button"
                                onClick={() => {
                                  openModal("Referências adicionais", "");
                                }}
                              >
                                <i className="fas fa-plus"></i>
                              </button>
                              <button
                                className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                                type="button"
                                onClick={() => {
                                  openModal("Referências adicionais", "Coco");
                                }}
                              >
                                <i className="fas fa-pencil-alt" />
                              </button>
                            </>
                          ) : null}
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          {props.showOnly === false && props?.isRepique === false ? (
            <div className="text-center flex justify-end">
              <Link to={"/admin/m/" + props.returnto}>
                <button
                  className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                  type="button"
                >
                  Cancelar
                </button>
              </Link>
              <Link to={"/admin/m/" + props.returnto}>
                <button
                  className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                  type="button"
                >
                  Salvar
                </button>
              </Link>
            </div>
          ) : null}
          {props.showOnly === false && props.isRepique === true ? (
            <div className="text-center flex justify-end">
              <Link to="/admin/m/details">
                <button
                  className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                  type="button"
                >
                  Cancelar
                </button>
              </Link>
              <button
                className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                type="button"
              >
                Próximo
              </button>
              <Link to="/admin/m/details">
                <button
                  className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                  type="button"
                >
                  Salvar
                </button>
              </Link>
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
}
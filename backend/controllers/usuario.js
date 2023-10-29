const db = require("../models");
const Cliente = db.models.Cliente;
const Usuario = db.models.Usuario;
const Telefone = db.models.Telefone;
const Endereco = db.models.Endereco;
const Usuario_has_Endereco = db.models.Usuario_has_Endereco;
const Op = db.Sequelize.Op;

// Create and Save a new Usuario
exports.create = (req, res) => {
  const requiredFields = [
    'nome',
    'senha',
    'sexo',
    'cpf',
    'nomeUsuario'
  ];

  for (const field of requiredFields) {
    if (!req.body[field]) {
      res.status(400).send({
        message: `Content missing mandatory data: ${field}!`,
      });
      return;
    }
  }

  // Verifique se já existe um usuário com o mesmo email
  Usuario.findOne({
    where: {
      email: req.body.email,
      cpf: req.body.cpf,
      nomeUsuario: req.body.nomeUsuario,
    },
    })
    .then((existingUserByEmail) => {
      if (existingUserByEmail) {
        // Se o email já existe, retorne uma resposta de erro
        return res.status(400).send({
          message: "Email already exists!",
        });
      }

      // Verifique se já existe um usuário com o mesmo CPF
      Usuario.findOne({
        where: {
          cpf: req.body.cpf,
        },
      })
        .then((existingUserByCPF) => {
          if (existingUserByCPF) {
            // Se o CPF já existe, retorne uma resposta de erro
            return res.status(400).send({
              message: "CPF already exists!",
            });
          }

          // Verifique se já existe um usuário com o mesmo Nome de Usuário
          Usuario.findOne({
            where: {
              nomeUsuario: req.body.nomeUsuario,
            },
          })
            .then((existingUserByNomeUsuario) => {
              if (existingUserByNomeUsuario) {
                // Se o nome do usuário já existe, retorne uma resposta de erro
                return res.status(400).send({
                  message: "Nome do usuário already exists!",
                });
              }

              // Se o email e o CPF não existirem, crie o usuário
              Usuario.create(req.body)
                .then(usuario => {
                  // Agora que o usuário está criado, crie o cliente associado a ele
                  Cliente.create({ usuario_id: usuario.idUsuario })
                    .then(cliente => {
                      // Crie o endereço associado ao cliente
                      Endereco.create({
                        rua: req.body.rua,
                        numero: req.body.numero,
                        complemento: req.body.complemento,
                        cidade: req.body.cidade,
                        estado: req.body.estado,
                        codigoPostal: req.body.codigoPostal
                      })
                        .then(endereco => {
                          // Crie o registro na tabela Usuario_has_Endereco
                          Usuario_has_Endereco.create({
                            Usuario_idUsuario: usuario.idUsuario,
                            Endereco_idEndereco: endereco.idEndereco
                          })
                            .then(() => {
                              // Crie o telefone associado ao usuário
                              Telefone.create({
                                fone: req.body.fone,
                                Usuario_idUsuario: usuario.idUsuario
                              })
                                .then(telefone => {
                                  res.send(cliente);
                                })
                                .catch(err => {
                                  res.status(500).send({
                                    message: err.message || "Ocorreu um erro ao criar o telefone."
                                  });
                                });
                            })
                            .catch(err => {
                              res.status(500).send({
                                message: err.message || "Ocorreu um erro ao criar a associação entre Usuario e Endereco."
                              });
                            });
                        })
                        .catch(err => {
                          res.status(500).send({
                            message: err.message || "Ocorreu um erro ao criar o endereço."
                          });
                        });
                    })
                    .catch(err => {
                      res.status(500).send({
                        message: err.message || "Ocorreu um erro ao criar o cliente."
                      });
                    });
                })
                .catch(err => {
                  res.status(500).send({
                    message: err.message || "Ocorreu um erro ao criar o usuário."
                  });
                });
            })
            .catch((err) => {
              res.status(500).send({
                message:
                  err.message ||
                  "Some error occurred while creating the Usuario.",
              });
            });
        })
        .catch((err) => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while creating the Usuario.",
          });
        });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Usuario.",
      });
    });
};

// Retrieve all Usuarios from the database.
exports.findAll = (req, res) => {
  const title = req.query.title;
  var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;

  Usuario.findAll({ where: condition })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Usuarios.",
      });
    });
};

// Find a single Usuario with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Usuario.findByPk(id)
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Usuario with id=${id}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving Usuario with id=" + id,
      });
    });
};

// Update a Usuario by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Usuario.update(req.body, {
    where: { idusuario: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Usuario was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update Usuario with id=${id}. Maybe Usuario was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Usuario with id=" + id,
      });
    });
};

// Delete a Usuario with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Usuario.destroy({
    where: { idusuario: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Usuario was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete Usuario with id=${id}. Maybe Usuario was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Usuario with id=" + id,
      });
    });
};

// Delete all Usuarios from the database.
exports.deleteAll = (req, res) => {
  Usuario.destroy({
    where: {},
    truncate: false,
  })
    .then((nums) => {
      res.send({ message: `${nums} Usuarios were deleted successfully!` });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Usuarios.",
      });
    });
};

// Find all published Usuarios
exports.findAllParam = (req, res) => {
  var p = req.query;
  Usuario.findAll({ where: p })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Usuarios.",
      });
    });
};

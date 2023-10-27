const db = require("../models");
const Element = db.models.Usuario;
const Op = db.Sequelize.Op;
// Create and Save a new Element
exports.create = (req, res) => {

  const requiredFields = [
    'nome',
    'senha',
    'endereco_id',
    'telefone_id',
    'sexo',
    'cpf',
    'nomeUsuario'
  ];

  for (const field of requiredFields) {
    if (!req.body[field]) {
      res.status(400).send({
        message: `Content missing mandatory data: ${field}!`
      });
      return;
    }
  }

  // Verifique se já existe um usuário com o mesmo email
Element.findOne({
  where: {
    email: req.body.email
  }
})
  .then(existingUserByEmail => {
    if (existingUserByEmail) {
      // Se o email já existe, retorne uma resposta de erro
      return res.status(400).send({
        message: "Email already exists!"
      });
    }

    // Verifique se já existe um usuário com o mesmo CPF
    Element.findOne({
      where: {
        cpf: req.body.cpf
      }
    })
      .then(existingUserByCPF => {
        if (existingUserByCPF) {
          // Se o CPF já existe, retorne uma resposta de erro
          return res.status(400).send({
            message: "CPF already exists!"
          });
        }

         // Verifique se já existe um usuário com o mesmo Nome de Usuário
          Element.findOne({
            where: {
              nomeUsuario: req.body.nomeUsuario
            }
          })
            .then(existingUserByNomeUsuario => {
              if (existingUserByNomeUsuario) {
                // Se o nome do usuário já existe, retorne uma resposta de erro
                return res.status(400).send({
                  message: "Nome do usuário already exists!"
                });
              }

              // Se o email e o CPF não existirem, crie o usuário
              const element = req.body;
              Element.create(element)
                .then(data => {
                  res.send(data);
                })
                .catch(err => {
                  res.status(500).send({
                    message: err.message || "Some error occurred while creating the Element."
                  });
                });
            })
            .catch(err => {
              res.status(500).send({
                message: err.message || "Some error occurred while creating the Element."
              });
            });
      })
      .catch(err => {
        res.status(500).send({
          message: err.message || "Some error occurred while creating the Element."
        });
      });
  })
  .catch(err => {
    res.status(500).send({
      message: err.message || "Some error occurred while creating the Element."
    });
  });

};

// Retrieve all Elements from the database.
exports.findAll = (req, res) => {
    const title = req.query.title;
    var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;
  
    Element.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Elements."
        });
      });
};

// Find a single Element with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Element.findByPk(id)
      .then(data => {
        if (data) {
          res.send(data);
        } else {
          res.status(404).send({
            message: `Cannot find Element with id=${id}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Element with id=" + id
        });
      });
};

// Update a Element by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Element.update(req.body, {
      where: {idusuario: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Element was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Element with id=${id}. Maybe Element was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Element with id=" + id
        });
      });
};

// Delete a Element with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Element.destroy({
      where: {idusuario: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Element was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Element with id=${id}. Maybe Element was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Element with id=" + id
        });
      });
};

// Delete all Elements from the database.
exports.deleteAll = (req, res) => {
    Element.destroy({
        where: {},
        truncate: false
      })
        .then(nums => {
          res.send({ message: `${nums} Elements were deleted successfully!` });
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while removing all Elements."
          });
        });
};

// Find all published Elements
exports.findAllParam = (req, res) => {
    var p = req.query;
    Element.findAll({ where: p })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Elements."
      });
    });
};
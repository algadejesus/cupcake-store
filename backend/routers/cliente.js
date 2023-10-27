const models = require("../models/Cliente").models;

var router = require("express").Router();
module.exports = app => {
    var _cliente = require("../controllers/cliente");
    
///////// cliente

  // Create a new cliente
  router.post("/", _cliente.create);

  // Retrieve all cliente
  router.get("/", _cliente.findAll);

  // Retrieve all published cliente
  router.get("/search", _cliente.findAllParam);

  // Retrieve a single cliente with id
  router.get("/:id", _cliente.findOne);

  // Update a cliente with id
  router.put("/:id", _cliente.update);

  // Delete a cliente with id
  router.delete("/:id", _cliente.delete);

  // Delete all cliente
  router.delete("/", _cliente.deleteAll);


  app.use('/api/cliente', router);

}
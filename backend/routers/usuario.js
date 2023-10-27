const models = require("../models/Usuario").models;

var router = require("express").Router();
module.exports = app => {
    var _usuario = require("../controllers/usuario");
    
///////// usuario

  // Create a new usuario
  router.post("/", _usuario.create);

  // Retrieve all usuario
  router.get("/", _usuario.findAll);

  // Retrieve all published usuario
  router.get("/search", _usuario.findAllParam);

  // Retrieve a single usuario with id
  router.get("/:id", _usuario.findOne);

  // Update a usuario with id
  router.put("/:id", _usuario.update);

  // Delete a usuario with id
  router.delete("/:id", _usuario.delete);

  // Delete all usuario
  router.delete("/", _usuario.deleteAll);


  app.use('/api/usuario', router);

}
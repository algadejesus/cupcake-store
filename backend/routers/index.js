module.exports = app => {
  require("./cliente")(app);
  require("./usuario")(app);

}
var DataTypes = require("sequelize").DataTypes;
var _Cliente = require("./Cliente");
var _Endereco = require("./Endereco");
var _Funcionario = require("./Funcionario");
var _Gerente = require("./Gerente");
var _Itens_de_Produto = require("./Itens_de_Produto");
var _Pedido = require("./Pedido");
var _Produto = require("./Produto");
var _Situacao = require("./Situacao");
var _Telefone = require("./Telefone");
var _Usuario = require("./Usuario");

function initModels(sequelize) {
  var Cliente = _Cliente(sequelize, DataTypes);
  var Endereco = _Endereco(sequelize, DataTypes);
  var Funcionario = _Funcionario(sequelize, DataTypes);
  var Gerente = _Gerente(sequelize, DataTypes);
  var Itens_de_Produto = _Itens_de_Produto(sequelize, DataTypes);
  var Pedido = _Pedido(sequelize, DataTypes);
  var Produto = _Produto(sequelize, DataTypes);
  var Situacao = _Situacao(sequelize, DataTypes);
  var Telefone = _Telefone(sequelize, DataTypes);
  var Usuario = _Usuario(sequelize, DataTypes);

  Usuario.belongsTo(Endereco, { as: "endereco", foreignKey: "endereco_id"});
  Endereco.hasMany(Usuario, { as: "Usuarios", foreignKey: "endereco_id"});
  Itens_de_Produto.belongsTo(Pedido, { as: "pedido", foreignKey: "pedido_id"});
  Pedido.hasMany(Itens_de_Produto, { as: "Itens_de_Produtos", foreignKey: "pedido_id"});
  Itens_de_Produto.belongsTo(Produto, { as: "produto", foreignKey: "produto_id"});
  Produto.hasMany(Itens_de_Produto, { as: "Itens_de_Produtos", foreignKey: "produto_id"});
  Pedido.belongsTo(Situacao, { as: "situacao", foreignKey: "situacao_id"});
  Situacao.hasMany(Pedido, { as: "Pedidos", foreignKey: "situacao_id"});
  Usuario.belongsTo(Telefone, { as: "telefone", foreignKey: "telefone_id"});
  Telefone.hasMany(Usuario, { as: "Usuarios", foreignKey: "telefone_id"});
  Cliente.belongsTo(Usuario, { as: "usuario", foreignKey: "usuario_id"});
  Usuario.hasOne(Cliente, { as: "Cliente", foreignKey: "usuario_id"});
  Funcionario.belongsTo(Usuario, { as: "usuario", foreignKey: "usuario_id"});
  Usuario.hasOne(Funcionario, { as: "Funcionario", foreignKey: "usuario_id"});
  Gerente.belongsTo(Usuario, { as: "usuario", foreignKey: "usuario_id"});
  Usuario.hasOne(Gerente, { as: "Gerente", foreignKey: "usuario_id"});
  Pedido.belongsTo(Usuario, { as: "usuario", foreignKey: "usuario_id"});
  Usuario.hasMany(Pedido, { as: "Pedidos", foreignKey: "usuario_id"});

  return {
    Cliente,
    Endereco,
    Funcionario,
    Gerente,
    Itens_de_Produto,
    Pedido,
    Produto,
    Situacao,
    Telefone,
    Usuario,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;

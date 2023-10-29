var DataTypes = require("sequelize").DataTypes;
var _Cliente = require("./Cliente");
var _Endereco = require("./Endereco");
var _Funcionario = require("./Funcionario");
var _Gerente = require("./Gerente");
var _Pedido = require("./Pedido");
var _Pedido_has_Produto = require("./Pedido_has_Produto");
var _Produto = require("./Produto");
var _Situacao = require("./Situacao");
var _Telefone = require("./Telefone");
var _Usuario = require("./Usuario");
var _Usuario_has_Endereco = require("./Usuario_has_Endereco");

function initModels(sequelize) {
  var Cliente = _Cliente(sequelize, DataTypes);
  var Endereco = _Endereco(sequelize, DataTypes);
  var Funcionario = _Funcionario(sequelize, DataTypes);
  var Gerente = _Gerente(sequelize, DataTypes);
  var Pedido = _Pedido(sequelize, DataTypes);
  var Pedido_has_Produto = _Pedido_has_Produto(sequelize, DataTypes);
  var Produto = _Produto(sequelize, DataTypes);
  var Situacao = _Situacao(sequelize, DataTypes);
  var Telefone = _Telefone(sequelize, DataTypes);
  var Usuario = _Usuario(sequelize, DataTypes);
  var Usuario_has_Endereco = _Usuario_has_Endereco(sequelize, DataTypes);

  Endereco.belongsToMany(Usuario, { as: 'Usuario_idUsuario_Usuarios', through: Usuario_has_Endereco, foreignKey: "Endereco_idEndereco", otherKey: "Usuario_idUsuario" });
  Pedido.belongsToMany(Produto, { as: 'Produto_idProduto_Produtos', through: Pedido_has_Produto, foreignKey: "Pedido_idPedido", otherKey: "Produto_idProduto" });
  Produto.belongsToMany(Pedido, { as: 'Pedido_idPedido_Pedidos', through: Pedido_has_Produto, foreignKey: "Produto_idProduto", otherKey: "Pedido_idPedido" });
  Usuario.belongsToMany(Endereco, { as: 'Endereco_idEndereco_Enderecos', through: Usuario_has_Endereco, foreignKey: "Usuario_idUsuario", otherKey: "Endereco_idEndereco" });
  Usuario_has_Endereco.belongsTo(Endereco, { as: "Endereco_idEndereco_Endereco", foreignKey: "Endereco_idEndereco"});
  Endereco.hasMany(Usuario_has_Endereco, { as: "Usuario_has_Enderecos", foreignKey: "Endereco_idEndereco"});
  Pedido_has_Produto.belongsTo(Pedido, { as: "Pedido_idPedido_Pedido", foreignKey: "Pedido_idPedido"});
  Pedido.hasMany(Pedido_has_Produto, { as: "Pedido_has_Produtos", foreignKey: "Pedido_idPedido"});
  Pedido_has_Produto.belongsTo(Produto, { as: "Produto_idProduto_Produto", foreignKey: "Produto_idProduto"});
  Produto.hasMany(Pedido_has_Produto, { as: "Pedido_has_Produtos", foreignKey: "Produto_idProduto"});
  Pedido.belongsTo(Situacao, { as: "situacao", foreignKey: "situacao_id"});
  Situacao.hasMany(Pedido, { as: "Pedidos", foreignKey: "situacao_id"});
  Cliente.belongsTo(Usuario, { as: "usuario", foreignKey: "usuario_id"});
  Usuario.hasOne(Cliente, { as: "Cliente", foreignKey: "usuario_id"});
  Funcionario.belongsTo(Usuario, { as: "usuario", foreignKey: "usuario_id"});
  Usuario.hasOne(Funcionario, { as: "Funcionario", foreignKey: "usuario_id"});
  Gerente.belongsTo(Usuario, { as: "usuario", foreignKey: "usuario_id"});
  Usuario.hasOne(Gerente, { as: "Gerente", foreignKey: "usuario_id"});
  Pedido.belongsTo(Usuario, { as: "usuario", foreignKey: "usuario_id"});
  Usuario.hasMany(Pedido, { as: "Pedidos", foreignKey: "usuario_id"});
  Telefone.belongsTo(Usuario, { as: "Usuario_idUsuario_Usuario", foreignKey: "Usuario_idUsuario"});
  Usuario.hasMany(Telefone, { as: "Telefones", foreignKey: "Usuario_idUsuario"});
  Usuario_has_Endereco.belongsTo(Usuario, { as: "Usuario_idUsuario_Usuario", foreignKey: "Usuario_idUsuario"});
  Usuario.hasMany(Usuario_has_Endereco, { as: "Usuario_has_Enderecos", foreignKey: "Usuario_idUsuario"});

  return {
    Cliente,
    Endereco,
    Funcionario,
    Gerente,
    Pedido,
    Pedido_has_Produto,
    Produto,
    Situacao,
    Telefone,
    Usuario,
    Usuario_has_Endereco,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;

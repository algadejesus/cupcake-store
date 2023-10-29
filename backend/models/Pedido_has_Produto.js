const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Pedido_has_Produto', {
    idItensProduto: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Produto_idProduto: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'Produto',
        key: 'idProduto'
      }
    },
    Pedido_idPedido: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'Pedido',
        key: 'idPedido'
      }
    },
    quantidade: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    precoTotal: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'Pedido_has_Produto',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idItensProduto" },
          { name: "Produto_idProduto" },
          { name: "Pedido_idPedido" },
        ]
      },
      {
        name: "fk_Pedido_has_Produto_Produto1_idx",
        using: "BTREE",
        fields: [
          { name: "Produto_idProduto" },
        ]
      },
      {
        name: "fk_Pedido_has_Produto_Pedido1_idx",
        using: "BTREE",
        fields: [
          { name: "Pedido_idPedido" },
        ]
      },
    ]
  });
};

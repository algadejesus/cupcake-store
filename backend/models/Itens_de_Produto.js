const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Itens_de_Produto', {
    idItensProduto: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    pedido_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Pedido',
        key: 'idPedido'
      }
    },
    produto_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Produto',
        key: 'idProduto'
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
    tableName: 'Itens_de_Produto',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idItensProduto" },
        ]
      },
      {
        name: "fk_Itens_de_Produto_Pedido1_idx",
        using: "BTREE",
        fields: [
          { name: "pedido_id" },
        ]
      },
      {
        name: "fk_Itens_de_Produto_Produto1_idx",
        using: "BTREE",
        fields: [
          { name: "produto_id" },
        ]
      },
    ]
  });
};

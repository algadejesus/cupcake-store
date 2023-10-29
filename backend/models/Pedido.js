const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Pedido', {
    idPedido: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    usuario_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Usuario',
        key: 'idUsuario'
      }
    },
    dataPedido: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    situacao_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Situacao',
        key: 'idSituacao'
      }
    }
  }, {
    sequelize,
    tableName: 'Pedido',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idPedido" },
        ]
      },
      {
        name: "usuario_id",
        using: "BTREE",
        fields: [
          { name: "usuario_id" },
        ]
      },
      {
        name: "situacao_id",
        using: "BTREE",
        fields: [
          { name: "situacao_id" },
        ]
      },
    ]
  });
};

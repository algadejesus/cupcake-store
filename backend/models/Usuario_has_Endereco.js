const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Usuario_has_Endereco', {
    Usuario_idUsuario: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'Usuario',
        key: 'idUsuario'
      }
    },
    Endereco_idEndereco: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'Endereco',
        key: 'idEndereco'
      }
    }
  }, {
    sequelize,
    tableName: 'Usuario_has_Endereco',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "Usuario_idUsuario" },
          { name: "Endereco_idEndereco" },
        ]
      },
      {
        name: "fk_Usuario_has_Endereco_Endereco1_idx",
        using: "BTREE",
        fields: [
          { name: "Endereco_idEndereco" },
        ]
      },
      {
        name: "fk_Usuario_has_Endereco_Usuario1_idx",
        using: "BTREE",
        fields: [
          { name: "Usuario_idUsuario" },
        ]
      },
    ]
  });
};

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Usuario', {
    idUsuario: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nome: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: "email"
    },
    senha: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    endereco_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Endereco',
        key: 'idEndereco'
      }
    },
    telefone_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Telefone',
        key: 'idTelefone'
      }
    },
    sexo: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    cpf: {
      type: DataTypes.STRING(15),
      allowNull: false,
      unique: "cpf"
    },
    nomeUsuario: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'Usuario',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idUsuario" },
        ]
      },
      {
        name: "email",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "email" },
        ]
      },
      {
        name: "cpf",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "cpf" },
        ]
      },
      {
        name: "fk_Usuario_Endereco1_idx",
        using: "BTREE",
        fields: [
          { name: "endereco_id" },
        ]
      },
      {
        name: "fk_Usuario_Telefone1_idx",
        using: "BTREE",
        fields: [
          { name: "telefone_id" },
        ]
      },
    ]
  });
};

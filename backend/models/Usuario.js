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
    ]
  });
};

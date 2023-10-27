const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Produto', {
    idProduto: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nome: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    descricao: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    preco: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    tamanho: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    recheio: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    cobertura: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    massa: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    peso: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    foto: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    isStatus: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Produto',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idProduto" },
        ]
      },
    ]
  });
};

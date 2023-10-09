module.exports = {
  dialect: "postgres",
  host: "localhost",
  username: "cupcakes",
  password: "secret",
  database: "cupcakes",
  define: {
    timestamp: true, // cria duas colunas: createdAt e updatedAt
    underscored: true,
    underscoredAll: true,
  },
};

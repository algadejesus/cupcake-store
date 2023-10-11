const express = require('express');

const server = express();

server.use(express.json());

server.listen(3000);

server.get('/first', (req, res) => {
    return res.send({first: 'Hello Word!'})
});

server.get('/query-params', (req, res) => {
    const {name, idade} = req.query;

    return res.json({ressult: `Nome: ${name} e Idade: ${idade}`})
});

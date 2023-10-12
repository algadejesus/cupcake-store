const express = require('express');

const server = express();

server.use(express.json());

server.listen(3000);

server.get('/first', (req, res) => {
    return res.send({first: 'Hello Word!'})
});

server.get('/query-params', (req, res) => {
    const {name, sobrenome, idade, email} = req.query;

    return res.json({ressult: `Meu nome é : ${name} ${sobrenome} e tenho : ${idade} de idade, o meu email é ${email}`})
});

let produtos = [];

server.post('/produtos', (req, res) => {
    const { id, name, price } = req.body;

    produtos.push({id: id, name: name, price: price});

    res.send({message: 'Success!'});
})

server.get('/produtos', (req, res) => {
    res.send({Produto: produtos})
});

server.put('/produtos', (req, res) => {
    const {name, price} = req.body;
    const {oldName} = req.query;

    const index = produtos.findIndex(item => item.name === oldName);

    produtos[index].name = name;
    produtos[index].price = price;

    res.send({message: 'Success!'});
});

server.delete('/produtos/:id', (req, res) => {
    const { id } = req.params;

    const newProdutos = produtos.filter(item => item.id != id);

    produtos = newProdutos;

    res.send({Produtos: produtos});
})
const api = require('./api');
const localStorage = require('localStorage')
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
});

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
});

server.get('/pokemon', async (req, res) => {

    try {
        const {data} = await api.get('pokemon2/1')
        return res.send({name: data.name});

    } catch (error) {
        res.send({error: error.message})
    }
});

function verifyUserAlready(req, res, next) {
    const { email } = req.body;

    if (!allUsers.find(user => user.email === email)) {
        return next();
    }

    return res.status(400).json({Failed: 'This is email already registed'});
}


const allUsers = [];

server.post('/register-users', verifyUserAlready, (req, res) => {
    const user = req.body;

    allUsers.push(user);

    localStorage.setItem('users', JSON.stringify(allUsers));

    return res.json({user});
});

server.get('/users', (req, res) => {
    const users = JSON.parse(localStorage.getItem('users'));

    return res.json(users)
})
-- Criação do banco de dados cupcakes_store
-- CREATE DATABASE cupcakes_store;

-- Usar o banco de dados cupcakes_store
\c cupcakes_store;

-- Criação da tabela Endereco
CREATE TABLE Endereco (
    idEndereco SERIAL PRIMARY KEY,
    rua VARCHAR(255) NOT NULL,
    numero INT NOT NULL,
    complemento VARCHAR(100),
    cidade VARCHAR(100) NOT NULL,
    estado VARCHAR(2) NOT NULL,
    codigoPostal VARCHAR(10) NOT NULL
);

-- Criação da tabela Telefone
CREATE TABLE Telefone (
    idTelefone SERIAL PRIMARY KEY,
    numero VARCHAR(20) NOT NULL
);

-- Criação da tabela Usuario
CREATE TABLE Usuario (
    idUsuario SERIAL PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    senha VARCHAR(255) NOT NULL,
    endereco_id INT NOT NULL,
    telefone_id INT NOT NULL,
    sexo VARCHAR(10) NOT NULL,
    cpf VARCHAR(15) UNIQUE NOT NULL,
    nomeUsuario VARCHAR(255) NOT NULL,
    FOREIGN KEY (endereco_id) REFERENCES Endereco(idEndereco),
    FOREIGN KEY (telefone_id) REFERENCES Telefone(idTelefone)
);

-- Criação da tabela Cliente
CREATE TABLE Cliente (
    idCliente SERIAL PRIMARY KEY,
    usuario_id INT UNIQUE NOT NULL,
    FOREIGN KEY (usuario_id) REFERENCES Usuario(idUsuario)
);

-- Criação da tabela Funcionario
CREATE TABLE Funcionario (
    idFuncionario SERIAL PRIMARY KEY,
    usuario_id INT UNIQUE NOT NULL,
    cargo VARCHAR(50) NOT NULL,
    salario NUMERIC(10, 2) NOT NULL,
    FOREIGN KEY (usuario_id) REFERENCES Usuario(idUsuario)
);

-- Criação da tabela Gerente
CREATE TABLE Gerente (
    idGerente SERIAL PRIMARY KEY,
    usuario_id INT UNIQUE NOT NULL,
    departamento VARCHAR(50) NOT NULL,
    FOREIGN KEY (usuario_id) REFERENCES Usuario(idUsuario)
);

-- Criação da tabela Produto
CREATE TABLE Produto (
    idProduto SERIAL PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    descricao TEXT,
    preco NUMERIC(10, 2) NOT NULL,
    tamanho VARCHAR(50) NOT NULL,
    recheio VARCHAR(255) NOT NULL,
    cobertura VARCHAR(255) NOT NULL,
    massa VARCHAR(50) NOT NULL,
    peso NUMERIC(10, 2) NOT NULL,
    foto VARCHAR(255) NOT NULL,
    isStatus BOOLEAN
);

-- Criação da tabela Situacao
CREATE TABLE Situacao (
    idSituacao SERIAL PRIMARY KEY,
    situacao VARCHAR(50) NOT NULL
);

-- Criação da tabela Pedido
CREATE TABLE Pedido (
    idPedido SERIAL PRIMARY KEY,
    usuario_id INT NOT NULL,
    dataPedido DATE NOT NULL,
    situacao_id INT NOT NULL,
    FOREIGN KEY (usuario_id) REFERENCES Usuario(idUsuario),
    FOREIGN KEY (situacao_id) REFERENCES Situacao(idSituacao)
);

-- Criação da tabela Itens_de_Produto (para rastrear produtos em um pedido)
CREATE TABLE Itens_de_Produto (
    idItensProduto SERIAL PRIMARY KEY,
    pedido_id INT NOT NULL,
    produto_id INT NOT NULL,
    quantidade INT NOT NULL,
    precoTotal NUMERIC(10, 2) NOT NULL,
    FOREIGN KEY (pedido_id) REFERENCES Pedido(idPedido),
    FOREIGN KEY (produto_id) REFERENCES Produto(idProduto)
);

-- Defina o conjunto de caracteres padrão
ALTER DATABASE cupcakes_store SET client_encoding TO 'utf8';
ALTER DATABASE cupcakes_store SET default_transaction_isolation TO 'read committed';
ALTER DATABASE cupcakes_store SET timezone TO 'UTC';

-- Criação do banco de dados cupcakes_store
CREATE DATABASE cupcakes_store;

-- Usar o banco de dados cupcakes_store
USE cupcakes_store;

-- Criação da tabela Endereco
CREATE TABLE Endereco (
    idEndereco INT PRIMARY KEY AUTO_INCREMENT,
    rua VARCHAR(255) NOT NULL,
    numero INT NOT NULL,
    complemento VARCHAR(100),
    cidade VARCHAR(100) NOT NULL,
    estado VARCHAR(2) NOT NULL,
    codigoPostal VARCHAR(10) NOT NULL
);

-- Criação da tabela Telefone
CREATE TABLE Telefone (
    idTelefone INT PRIMARY KEY AUTO_INCREMENT,
    numero VARCHAR(20) NOT NULL
);

-- Criação da tabela Usuario
CREATE TABLE Usuario (
    idUsuario INT PRIMARY KEY AUTO_INCREMENT,
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
    idCliente INT PRIMARY KEY AUTO_INCREMENT,
    usuario_id INT UNIQUE NOT NULL,
    FOREIGN KEY (usuario_id) REFERENCES Usuario(idUsuario)
);

-- Criação da tabela Funcionario
CREATE TABLE Funcionario (
    idFuncionario INT PRIMARY KEY AUTO_INCREMENT,
    usuario_id INT UNIQUE NOT NULL,
    cargo VARCHAR(50) NOT NULL,
    salario DECIMAL(10, 2) NOT NULL,
    FOREIGN KEY (usuario_id) REFERENCES Usuario(idUsuario)
);

-- Criação da tabela Gerente
CREATE TABLE Gerente (
    idGerente INT PRIMARY KEY AUTO_INCREMENT,
    usuario_id INT UNIQUE NOT NULL,
    departamento VARCHAR(50) NOT NULL,
    FOREIGN KEY (usuario_id) REFERENCES Usuario(idUsuario)
);

-- Criação da tabela Produto
CREATE TABLE Produto (
    idProduto INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(255) NOT NULL,
    descricao TEXT,
    preco DECIMAL(10, 2) NOT NULL,
    tamanho VARCHAR(50) NOT NULL,
    recheio VARCHAR(255) NOT NULL,
    cobertura VARCHAR(255) NOT NULL,
    massa VARCHAR(50) NOT NULL,
    peso DECIMAL(10, 2) NOT NULL,
    foto VARCHAR(255) NOT NULL,
    isStatus BOOLEAN
);

-- Criação da tabela Situacao
CREATE TABLE Situacao (
    idSituacao INT PRIMARY KEY AUTO_INCREMENT,
    situacao VARCHAR(50) NOT NULL
);

-- Criação da tabela Pedido
CREATE TABLE Pedido (
    idPedido INT PRIMARY KEY AUTO_INCREMENT,
    usuario_id INT NOT NULL,
    dataPedido DATE NOT NULL,
    situacao_id INT NOT NULL,
    FOREIGN KEY (usuario_id) REFERENCES Usuario(idUsuario),
    FOREIGN KEY (situacao_id) REFERENCES Situacao(idSituacao)
);

-- Criação da tabela Itens_de_Produto (para rastrear produtos em um pedido)
CREATE TABLE Itens_de_Produto (
    idItensProduto INT PRIMARY KEY AUTO_INCREMENT,
    pedido_id INT NOT NULL,
    produto_id INT NOT NULL,
    quantidade INT NOT NULL,
    precoTotal DECIMAL(10, 2) NOT NULL,
    FOREIGN KEY (pedido_id) REFERENCES Pedido(idPedido),
    FOREIGN KEY (produto_id) REFERENCES Produto(idProduto)
);

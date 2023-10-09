# Acesso no Banco de dados postgreSQL

Acessar container docker
```sh
docker exec -it db_cupcakes bash
```
Entrar no banco de dados
```sh
psql -U cupcakes -d cupcakes
```

Listar databases
```sh
\l
```

Selecionar banco de dados
```sh
\c cupcakes;
```

Listar tabelas
```sh
\dt
```

Descrever uma tabela
```sh
\d public.produto
```

# Migration

Criando Migration
```sh
yarn sequelize migration:create --name=create-[nome da tanela]
```

Execultando Migration
```sh
yarn sequelize db:migrate
```

# Subir container
```sh
docker-compose -f docker-compose.yml up -d
```

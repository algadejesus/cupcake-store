

# Acesso no Banco de dados postgreSQL

Acessar container docker
```sh
docker exec -it db_cupcakes bash
```
Entrar no banco de dados
```sh
psql -U cupcakes_store -d cupcakes_store
```

Listar databases
```sh
\l
```

Selecionar banco de dados
```sh
\c cupcakes_store;
```

Listar tabelas
```sh
\dt
```

Descrever uma tabela
```sh
\d public.produto
```

docker run -p 5050:80 --name pgadmin4 -e PGADMIN_DEFAULT_EMAIL=agladejesus@gmail.com -e PGADMIN_DEFAULT_PASSWORD=cupcakes_store -d dpage/pgadmin4
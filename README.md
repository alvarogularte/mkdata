# Desafio técnico MK Data
Projeto do desafio técnico da MK Data

# Tecnologias utilizadas

## Backend
- Java
- Spring-boot
- Hibernate
- H2 database spring
- Docker

## Frontend
- Javascript
- React
- Redux
- React bootstrap
- Docker

Obs.: Desafio rodando localmente, mas com alguns bugs na hora do deploy.
Backend funcionando com as funcionalidades:

1) Criar tela de login, com usuário e senha (fixo).
2) Criar CRUD de cadastro de Grupo de Clientes contendo: nome e ativo.
3) Criar CRUD de cadastro de clientes contendo: 
      a) nome, obrigatório;
      b) tipo (pessoa física ou jurídica), obrigatório;
      c) CPF (se pessoa física) ou CNPJ (se pessoa jurídica), obrigatório;
      d) RG (se pessoa física) ou IE (se pessoa jurídica);
      e) Data de Cadastro;
      f) Grupo: Permitir selecionar somente uma opção.
      g) Ativo (se está ativo);     
      h) Ao gravar validar se já existe um cliente cadastrado com o CPF/CNPJ informado.

# Como iniciar o projeto

Primeiramente é necessário realizar o clone do projeto para sua máquina:
```
git clone git@github.com:alvarogularte/mkdata.git
```
Acesse a pasta do frontend:
```
cd frontend
```
Rode este comando para baixar as dependências necessárias:
```
npm install
```
Em seguida rode este comando para iniciar o projeto frontend:
```
npm start
```

Para iniciar o backend, primeiro volte à pasta raíz do projeto:
```
cd ..
```
Acesse a pasta do backend:
```
cd backend
```
Em seguida rode este comando para iniciar a aplicação spring:
```
mvn spring-boot:run
```

Pronto, o projeto já está rodando em sua máquina!
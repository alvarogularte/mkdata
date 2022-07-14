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
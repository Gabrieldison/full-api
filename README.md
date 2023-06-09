# Users API

## Technologies

- Node.js
- TypeScript
- Express
- MongoDB

## Concepts used

- SOLID
- Injeção de Dependência (Dependency Injection)
- Repository Pattern

## Entities

<pre>
User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}</pre>

## Routes

- GET /users - retorna os usuários salvos no banco
- POST /users - cria um usuário
- PATCH /users/:id - atualiza um usuário
- DELETE /users/:id - deleta um usuário

## Architecture

![Arquitetura](https://imgur.com/k5mXFoZ.png)

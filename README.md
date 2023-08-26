
# Paypal Technical Test Application

Esta é a aplicação Paypal Technical Test, desenvolvida como parte de um teste técnico. Ela consiste em uma aplicação fullstack com frontend e backend, onde o frontend é construído usando Vite, TypeScript, React, ContextAPI, React Router e Bootstrap, enquanto o backend é desenvolvido com TypeScript, Node.js, Nodemon, Dotenv, Axios e Cors.

## Visão Geral

A aplicação Paypal Technical Test é uma demonstração fullstack que ilustra a integração entre o frontend e o backend. Ela permite que os usuários realizem determinadas ações (descrição das funcionalidades específicas).

## Tecnologias Utilizadas

### Frontend

- Vite
- TypeScript
- React
- ContextAPI
- React Router
- Bootstrap

### Backend

- TypeScript
- Node.js
- Nodemon
- Dotenv
- Axios
- Cors
- Docker (opcional para facilitar a execução)

## Instalação e Uso

Para clonar e executar a aplicação localmente, siga as instruções abaixo:

### Frontend

1. Clone o repositório:

```bash ```
git clone https://github.com/Pjoabe/paypal-technical-test
cd paypal-technical-test/frontend

# Instale as dependências:
npm install

#deixe o site visivel no navegador
npm run dev

O frontend estará acessível em http://localhost:5173/


2. Backend

#Execute os serviços necessários (Docker):

```bash```
docker-compose up -d
docker exec -it paypal-back bash

#Dentro do terminal do bash, inicie o backend:
npm run dev

O backend estará rodando em http://localhost:3001.


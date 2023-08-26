# Paypal Technical Test Application

Welcome to the Paypal Technical Test Application, crafted as a part of a technical evaluation. This comprehensive fullstack application showcases both frontend and backend components. The frontend is built using Vite, TypeScript, React, ContextAPI, React Router, and Bootstrap. Meanwhile, the backend is fashioned using TypeScript, Node.js, Nodemon, Dotenv, Axios, and Cors.

## Overview

The Paypal Technical Test Application serves as a fullstack demonstration, highlighting the seamless integration between the frontend and backend components. Users can engage in a range of specific functionalities and actions (detailed in the description).

## Technologies Employed

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
- Docker (optional for streamlined execution)

## Installation and Usage

To clone and run the application locally, follow the steps below:

### Frontend

1. Clone the repository:

```bash ```
git clone https://github.com/Pjoabe/paypal-technical-test


cd paypal-technical-test/frontend

# Install dependencies:
npm install

# Launch the website in the browser:
npm run dev
The frontend will be accessible at http://localhost:5173/

# Inside the bash terminal, start the backend:

#Run the necessary services (Docker):
```bash```
docker-compose up -d

docker exec -it paypal-back bash

npm run dev
#The backend will be up and running at http://localhost:3001.

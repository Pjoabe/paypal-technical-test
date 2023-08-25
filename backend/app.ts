import express, { Express } from 'express';
import routes from './src/routes';

const app: Express = express();

app.use(express.json());

app.use("/paypal/order", routes.paypal)

export default app;
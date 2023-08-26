import express, { Express } from 'express';
import routes from './src/routes';
import cors from 'cors';

const app: Express = express();
app.use(cors());

app.use(express.json());

app.use("/paypal/order", routes.paypal)

export default app;
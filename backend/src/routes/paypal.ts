import { Router } from 'express';
import controller from '../controller';

const router = Router();

router.post('/capture', controller.paypal.captureOrder);

router.post('/create', controller.paypal.createOrder);

router.get("/", (req, res) => {res.status(200).json({mensage: "Hello, im working"})} )

export default router;
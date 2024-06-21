import express from 'express';
import orderController from '../controllers/orderController.js';
import authMiddleware from '../middlewares/authMiddleware.js';
import { orderSchema } from '../validators/orderValidator.js';
import validate from '../middlewares/validate.js';

const router = express.Router();

router.get('/', authMiddleware(['user', 'admin', 'superadmin']), orderController.getAllOrders);
router.get('/:id', authMiddleware(['user', 'admin', 'superadmin']), orderController.getOrderById);
router.post('/', authMiddleware(['user', 'admin', 'superadmin']), validate(orderSchema), orderController.createOrder);
router.put('/:id', authMiddleware(['admin', 'superadmin']), orderController.updateOrder);
router.delete('/:id', authMiddleware(['admin', 'superadmin']), orderController.deleteOrder);

export default router;

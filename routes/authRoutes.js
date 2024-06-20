import express from 'express';
import authController from '../controllers/authController.js';
import authMiddleware from '../middlewares/authMiddleware.js';

const router = express.Router();

router.post('/signup', authController.signup);
router.post('/verify-otp', authController.verifyOtp);
router.post('/signin', authController.signin);
router.get('/me', authMiddleware(), authController.getCurrentUser);
router.get('/logout', authMiddleware(), authController.logout);
router.post('/refresh-token', authController.refreshToken);

export default router;

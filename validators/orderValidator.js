// validators/orderValidator.js
import Joi from 'joi';

export const orderSchema = Joi.object({
  userId: Joi.string().uuid().required(),
  items: Joi.array().items(
    Joi.object({
      bookId: Joi.string().uuid().required(),
      quantity: Joi.number().integer().min(1).required(),
    })
  ).required(),
  totalPrice: Joi.number().precision(2).positive().required(),
  status: Joi.string().valid('pending', 'completed', 'canceled').required(),
});
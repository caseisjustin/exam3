// validators/bookValidator.js
import Joi from 'joi';

export const bookSchema = Joi.object({
  title: Joi.string().min(1).max(255).required(),
  authorId: Joi.string().uuid().required(),
  genreId: Joi.string().uuid().required(),
  price: Joi.number().precision(2).positive().required(),
  stock: Joi.number().integer().min(0).required(),
  publishedDate: Joi.date().required(),
  status: Joi.string().valid('available', 'out of stock', 'discontinued').required(),
  imageUrls: Joi.array().items(Joi.string().uri()).optional(),
  description: Joi.string().optional(),
});

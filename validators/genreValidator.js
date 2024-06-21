// validators/genreValidator.js
import Joi from 'joi';

export const genreSchema = Joi.object({
  name: Joi.string().min(1).max(100).required(),
  description: Joi.string().optional(),
});

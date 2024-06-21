import Joi from 'joi';

export const userSignupSchema = Joi.object({
  email: Joi.string().email().required(),
  username: Joi.string().min(3).max(30).required(),
  password: Joi.string().min(6).required(),
  role: Joi.string().valid('user', 'admin', 'superadmin').required(),
  first_name: Joi.string().required(),
  last_name: Joi.string().required(),
  phone_number: Joi.string().pattern(/^[0-9]{10}$/).required(),
  address: Joi.string().required(),
});

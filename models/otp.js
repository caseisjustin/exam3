import db from '../config/db.js';

const OtpModel = {
  create: (otpData) => db('otps').insert(otpData).returning('*'),
  findByUserId: (user_id) => db('otps').where({ user_id }).first(),
  deleteByUserId: (user_id) => db('otps').where({ user_id }).del(),
};

export default OtpModel;

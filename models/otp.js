import db from '../config/db.js';

const OtpModel = {
  create: (otpData) => db('otps').insert(otpData).returning('*'),
  findByUserId: (userId) => db('otps').where({ userId }).first(),
  deleteByUserId: (userId) => db('otps').where({ userId }).del(),
};

export default OtpModel;

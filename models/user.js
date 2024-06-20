import db from '../config/db.js';

const User = {
  findAll: () => db('users').select('*'),
  findById: (id) => db('users').where({ id }).first(),
  findByEmail: (email) => db('users').where({ email }).first(),
  create: (user) => db('users').insert(user).returning('*'),
  update: (id, user) => db('users').where({ id }).update(user).returning('*'),
  delete: (id) => db('users').where({ id }).del(),
};

export default User;

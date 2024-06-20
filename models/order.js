import db from '../config/db.js';

const Order = {
  findAll: () => db('orders').select('*'),
  findById: (id) => db('orders').where({ id }).first(),
  create: (order) => db('orders').insert(order).returning('*'),
  update: (id, order) => db('orders').where({ id }).update(order).returning('*'),
  delete: (id) => db('orders').where({ id }).del(),
};

export default Order;

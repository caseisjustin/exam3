import Order from '../models/order.js';

const getAllOrders = async () => {
  return await Order.findAll();
};

const getOrderById = async (id) => {
  return await Order.findById(id);
};

const createOrder = async (order) => {
  return await Order.create(order);
};

const updateOrder = async (id, order) => {
  return await Order.update(id, order);
};

const deleteOrder = async (id) => {
  return await Order.delete(id);
};

export default {
  getAllOrders,
  getOrderById,
  createOrder,
  updateOrder,
  deleteOrder,
};

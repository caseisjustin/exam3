import orderService from '../services/orderService.js';

const getAllOrders = async (req, res, next) => {
  try {
    const orders = await orderService.getAllOrders();
    res.json(orders);
  } catch (error) {
    next(error);
  }
};

const getOrderById = async (req, res, next) => {
  try {
    const order = await orderService.getOrderById(req.params.id);
    res.json(order);
  } catch (error) {
    next(error);
  }
};

const createOrder = async (req, res, next) => {
  try {
    const newOrder = await orderService.createOrder(req.body);
    res.status(201).json(newOrder);
  } catch (error) {
    next(error);
  }
};

const updateOrder = async (req, res, next) => {
  try {
    const updatedOrder = await orderService.updateOrder(req.params.id, req.body);
    res.json(updatedOrder);
  } catch (error) {
    next(error);
  }
};

const deleteOrder = async (req, res, next) => {
  try {
    await orderService.deleteOrder(req.params.id);
    res.status(204).end();
  } catch (error) {
    next(error);
  }
};

export default {
  getAllOrders,
  getOrderById,
  createOrder,
  updateOrder,
  deleteOrder,
};

import authService from '../services/authService.js';

const signup = async (req, res, next) => {
  try {
    const result = await authService.signup(req.body);
    res.status(201).json(result);
  } catch (error) {
    next(error);
  }
};

const verifyOtp = async (req, res, next) => {
  try {
    const result = await authService.verifyOtp(req.body.userId, req.body.otp);
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

const signin = async (req, res, next) => {
  try {
    const result = await authService.signin(req.body.email, req.body.password);
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

const getCurrentUser = async (req, res, next) => {
  try {
    const user = await authService.getCurrentUser(req.user.id);
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};

const logout = async (req, res, next) => {
  try {
    const result = await authService.logout();
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

const refreshToken = async (req, res, next) => {
  try {
    const result = await authService.refreshToken(req.body.refreshToken);
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

export default {
  signup,
  verifyOtp,
  signin,
  getCurrentUser,
  logout,
  refreshToken,
};

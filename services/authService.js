import User from '../models/user.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { v4 as uuidv4 } from 'uuid';
import sendOtp from '../utils/sendOtp.js';
import jwtConfig from '../config/jwt.js';

const signup = async (userData) => {
  const { email, username, password, role, firstName, lastName, phoneNumber, address } = userData;

  // Check if user already exists
  const existingUser = await User.findByEmail(email);
  if (existingUser) {
    throw new Error('User with this email already exists');
  }

  // Hash password
  const hashedPassword = await bcrypt.hash(password, 10);

  // Create user
  const newUser = {
    id: uuidv4(),
    email,
    username,
    password: hashedPassword,
    role,
    firstName,
    lastName,
    phoneNumber,
    address,
    status: 'inactive',
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  // Save user to database
  const [createdUser] = await User.create(newUser);

  // Generate OTP and send it to user's email
  const otp = Math.floor(100000 + Math.random() * 900000).toString();
  await sendOtp(email, otp);

  // Save OTP in database (implement OTP model and save logic)
  await OtpModel.create({ userId: createdUser.id, otp, createdAt: new Date() });

  return { userId: createdUser.id, otpSent: true };
};

const verifyOtp = async (userId, otp) => {
  // Fetch OTP from database
  const savedOtp = await OtpModel.findByUserId(userId);
  if (!savedOtp || savedOtp.otp !== otp) {
    throw new Error('Invalid OTP');
  }

  // Activate user account
  await User.update(userId, { status: 'active' });

  // Delete OTP from database
  await OtpModel.deleteByUserId(userId);

  return { message: 'OTP verified, account activated' };
};

const signin = async (email, password) => {
  const user = await User.findByEmail(email);
  if (!user || !await bcrypt.compare(password, user.password)) {
    throw new Error('Invalid email or password');
  }

  if (user.status !== 'active') {
    throw new Error('Account is not active');
  }

  const accessToken = jwt.sign({ id: user.id, role: user.role }, jwtConfig.secret, { expiresIn: '1h' });
  const refreshToken = jwt.sign({ id: user.id, role: user.role }, jwtConfig.secret, { expiresIn: '7d' });

  return { accessToken, refreshToken };
};

const getCurrentUser = async (userId) => {
  const user = await User.findById(userId);
  if (!user) {
    throw new Error('User not found');
  }
  return user;
};

const logout = async () => {
  // Implement logout logic if necessary (e.g., invalidate tokens)
  return { message: 'Logout successful' };
};

const refreshToken = async (token) => {
  const decoded = jwt.verify(token, jwtConfig.secret);
  const accessToken = jwt.sign({ id: decoded.id, role: decoded.role }, jwtConfig.secret, { expiresIn: '1h' });
  const refreshToken = jwt.sign({ id: decoded.id, role: decoded.role }, jwtConfig.secret, { expiresIn: '7d' });

  return { accessToken, refreshToken };
};

export default {
  signup,
  verifyOtp,
  signin,
  getCurrentUser,
  logout,
  refreshToken,
};

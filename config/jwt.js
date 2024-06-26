import dotenv from "dotenv"
dotenv.config()

export default {
    secret: process.env.JWT_SECRET,
    expiresIn: '1h',
    refreshTokenExpiresIn: '7d',
  };
  
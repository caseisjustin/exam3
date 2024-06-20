import express from 'express';
import expressWinston from 'express-winston';
import winston from 'winston';
import bookRoutes from './routes/bookRoutes.js';
import authorRoutes from './routes/authorRoutes.js';
import genreRoutes from './routes/genreRoutes.js';
import userRoutes from './routes/userRoutes.js';
import orderRoutes from './routes/orderRoutes.js';
import errorHandler from './middlewares/errorHandler.js';
import authRouter from "./routes/authRoutes.js"

const app = express();

app.use(express.json());
app.use(expressWinston.logger({
  transports: [
    new winston.transports.Console(),
  ],
  format: winston.format.combine(
    winston.format.colorize(),
    winston.format.json()
  ),
}));

app.use('/api/books', bookRoutes);
app.use('/api/authors', authorRoutes);
app.use('/api/genres', genreRoutes);
app.use('/api/users', userRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/auth', authRouter);

app.use(errorHandler);

export default app;

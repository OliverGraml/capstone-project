import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

import SpotRoutes from './routes/spot.routes.js';

dotenv.config();

const connectionString =
  process.env.DB_CONNECTION || 'mongodb://localhost:27017/nomad-spot';

mongoose.connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});
mongoose.set('returnOriginal', false);

const server = express();

server.use(cors());
server.use(express.json());

server.use(SpotRoutes);

server.get('/', (req, res) =>
  res.json({
    status: 'Server is running.',
  })
);

server.listen(4000);

import express from 'express';
import { errorHandler } from './middleware/errorHandler.js';

export function createApp() {
  const app = express();

  app.use(express.json());

  app.get('/', (_, res) => {
    res.status(200).json({
      message: 'Hello world',
    });
  });

  app.get('/health', (_, res) => {
    res.status(200).json({
      message: 'OK',
      date: new Date().toISOString(),
      uptime: process.uptime(),
    });
  });

  app.use(errorHandler);

  return app;
}

// server.ts
import { createServer } from 'http';
import express from 'express';
import { env } from '@common/config/dotenv';

export const server = async () => {
  const app = express();

  app.get('/', (req, res) => {
    res.send('Hello Under World!');
  });

  const server = createServer(app);

  server.listen(env.SERVER_PORT, () => {
    console.log(`Server running in ${env.SERVER_PORT}`);
  });
};

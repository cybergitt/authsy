import express, { Express, Request, Response } from "express";
// import { env } from './src/common/config/dotenv';



const app: Express = express();
const pino = require('pino-http')({ name: 'server start' });
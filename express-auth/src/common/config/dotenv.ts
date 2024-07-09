import { z } from 'zod';

const dotenv = require('dotenv');
dotenv.config();

const EnvSchema = z.object({
  NODE_ENV: z
    .enum(['development', 'staging', 'test', 'production'], {
      description: 'This gets updated depending on your environment',
    })
    .default('development'),

  APP_NAME: z
    .string({
      description: 'Application Name string',
      required_error: 'Please provide application name',
    })
    .default('API'),

  SERVER_NAME: z
    .string({
      description: 'Server Name string',
      required_error: 'Please provide server name',
    })
    .default('API'),

  SERVER_HOST: z
    .string({
      description: 'Server Host string',
      required_error: 'Please provide server host',
    })
    .min(3)
    .default('127.0.0.1'),

  SERVER_PORT: z.coerce
    .number({
      description:
        '.env files convert numbers to strings, therefoore we have to enforce them to be numbers',
    })
    .positive()
    .max(65536, `options.port should be >= 0 and < 65536`)
    .default(3000),

  SERVER_TIMEZONE: z
    .string({
      description: 'Server Timezone string',
      required_error: 'Please provide server timezone',
    })
    .default('UTC+7'),
});

export const env = EnvSchema.parse(process.env);

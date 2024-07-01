import { z } from "zod";

const dotenv = require('dotenv');
dotenv.config();

const EnvSchema = z.object({
    NODE_ENV: z.enum(
      [
        'development',
        'test',
        'staging',
        'production',
      ],
      {
        description: 'This gets updated depending on your environment',
      }
    ).default('development'),
    HOST: z.string({
        description: 'Server Host string',
        required_error: 'Please provide server host',
    })
    .url()
    .min(3)
    .default('127.0.0.1'),
    PORT: z.coerce
      .number({
        description: '.env files convert numbers to strings, therefoore we have to enforce them to be numbers',
    })
    .positive()
    .max(65536, `options.port should be >= 0 and < 65536`)
    .default(3000),
    DATABASE_URL: z.string({
        description: 'DB Connection string',
        required_error: 'Please provide a database URL',
    })
    .url()
    .min(3),
  });

  export const env = EnvSchema.parse(process.env);


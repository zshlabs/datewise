import { createEnv } from '@t3-oss/env-nextjs';

import { z } from 'zod';

export const env = createEnv({
  /**
   * Specify your server-side environment variables schema here. This way you can ensure the app
   * isn't built with invalid env vars.
   */

  server: {
    DATABASE_URL: z.string(),
    NODE_ENV: z.enum(['development', 'production']),
  },
  client: {
    NODE_ENV: z.enum(['development', 'production']),
  },

  runtimeEnv: {
    DATABASE_URL: process.env.DATABASE_URL, 
    NODE_ENV: process.env.NODE_ENV,
  },
  // skips validation in development and build mode
  skipValidation: !!process.env.SKIP_ENV_VALIDATION,

  emptyStringAsUndefined: true,
});
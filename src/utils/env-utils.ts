import type { EnvVars } from "@typings/config/env-types";

function loadEnv(): EnvVars {
  const keys: (keyof EnvVars)[] = ["BASE_URL"];

  const env = {} as EnvVars;

  for (const key of keys) {
    const value = process.env[key];
    if (!value) {
      throw new Error(`Missing environment variable: ${key}`);
    }
    env[key] = value;
  }

  return env;
}

export const env = loadEnv();

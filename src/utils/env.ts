import { z } from 'zod'

const envSchema = z.object({
  EPSILON6SENSE_API_KEY: z.string(),
  JAWG_ACCESS_TOKEN: z.string(),
  IPDATA_API_KEY: z.string(),
  IP2LOCATION_API_KEY: z.string(),
})

const _env = envSchema.safeParse(process.env)

if (_env.success === false) {
  console.error('Invalid environment variables', _env.error.format())

  throw new Error('Invalid environment variables')
}

export const env = _env.data

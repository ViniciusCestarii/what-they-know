import { headers } from 'next/headers'

const header = headers()
const forwardedFor = header.get('x-forwarded-for')

export const userIp =
  forwardedFor != null && forwardedFor !== '::1'
    ? forwardedFor.split(',')[0]
    : '8.8.4.4'

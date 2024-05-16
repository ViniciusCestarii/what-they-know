import { headers } from 'next/headers'

export const fetchUserIp = async () => {
  const header = headers()
  const forwardedFor = header.get('x-forwarded-for')

  const userIp =
    forwardedFor != null && forwardedFor !== '::1'
      ? forwardedFor.split(',')[0]
      : '8.8.4.4'

  return userIp
}

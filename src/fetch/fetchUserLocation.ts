import { IpLocation } from '@/types/ipLocationTypes'
import { env } from '@/utils/env'
import { userIp } from '@/utils/userIp'

export const fetchUserLocation = async () => {
  const userIpLocationRequest = await fetch(
    `https://api.ipgeolocation.io/ipgeo?apiKey=${env.IPGEOLOCATION_API_KEY}&ip=${userIp}`,
  )
  const userIpLocation: IpLocation = await userIpLocationRequest.json()

  return userIpLocation
}

import { IpLocation } from '@/types/ipLocationTypes'
import { env } from '@/utils/env'

export const fetchUserLocation = async (ip: string) => {
  const userIpLocationRequest = await fetch(
    `https://api.ipgeolocation.io/ipgeo?apiKey=${env.IPGEOLOCATION_API_KEY}&ip=${ip}`,
  )
  const userIpLocation: IpLocation = await userIpLocationRequest.json()

  return userIpLocation
}

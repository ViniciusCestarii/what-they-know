import { env } from '@/utils/env'
import { IpDataDetails } from '@/types/ipDetailsTypes'

export const fetchUserIpDetails = async (ip: string) => {
  const userIpDetailsRequest = await fetch(
    `https://api.ipdata.co/${ip}?api-key=${env.IPDATA_API_KEY}`,
  )
  const ipDataDetails: IpDataDetails = await userIpDetailsRequest.json()

  return ipDataDetails
}

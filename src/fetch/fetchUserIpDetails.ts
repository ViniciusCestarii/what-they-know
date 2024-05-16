import { env } from '@/utils/env'
import { userIp } from '@/utils/userIp'
import { IpDataDetails } from '@/types/ipDetailsTypes'

export const fetchUserIpDetails = async () => {
  const userIpDetailsRequest = await fetch(
    `https://api.ipdata.co/${userIp}?api-key=${env.IPDATA_API_KEY}`,
  )
  const ipDataDetails: IpDataDetails = await userIpDetailsRequest.json()

  return ipDataDetails
}

import { Company } from '@/types/companyTypes'
import { env } from '@/utils/env'

export const fetchUserWork = async () => {
  const userCompanyInfoRequest = await fetch(
    'https://epsilon.6sense.com/v3/company/details',
    {
      headers: {
        Authorization: env.EPSILON6SENSE_API_KEY,
      },
    },
  )

  const userCompanyInfo: Company = await userCompanyInfoRequest.json()

  return userCompanyInfo
}

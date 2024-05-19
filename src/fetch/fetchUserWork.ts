'use client'
import { Company } from '@/types/companyTypes'

export const fetchUserWork = async (EPSILON6SENSE_API_KEY: string) => {
  // needs to run on client side
  const userCompanyInfoRequest = await fetch(
    'https://epsilon.6sense.com/v3/company/details',
    {
      headers: {
        Authorization: EPSILON6SENSE_API_KEY,
      },
    },
  )

  const userCompanyInfo: Company = await userCompanyInfoRequest.json()

  return userCompanyInfo
}

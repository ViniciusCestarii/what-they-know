import React from 'react'
import ConfidenceBar from '../ui/ConfidenceBar'
import Link from 'next/link'
import { Company } from '@/types/companyTypes'
import { env } from '@/utils/env'

const WhereYouWork = async () => {
  const userCompanyInfoRequest = await fetch(
    'https://epsilon.6sense.com/v3/company/details',
    {
      headers: {
        Authorization: env.EPSILON6SENSE_API_KEY,
      },
    },
  )

  const userCompanyInfo: Company = await userCompanyInfoRequest.json()

  return (
    <section className="flex flex-col">
      <h2>Where you work</h2>
      <ConfidenceBar
        confidence={userCompanyInfo.confidence}
        className="ml-auto"
      />
      <ul>
        <li>
          <Link href={'https://' + userCompanyInfo.company.domain}>
            {userCompanyInfo.company.name}
          </Link>{' '}
          | {userCompanyInfo.company.industry} company
        </li>
        <li>{userCompanyInfo.company.address}</li>
        <li>
          {userCompanyInfo.company.city}, {userCompanyInfo.company.state}{' '}
          {userCompanyInfo.company.zip}
        </li>
        <li>{userCompanyInfo.company.country}</li>
        <li>{userCompanyInfo.company.phone}</li>
      </ul>
    </section>
  )
}

export default WhereYouWork

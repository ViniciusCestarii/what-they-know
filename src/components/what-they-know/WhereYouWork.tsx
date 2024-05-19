import React from 'react'
import ConfidenceBar from '../ui/ConfidenceBar'
import TypographyH2 from '../ui/TypographyH2'
import Card from '../ui/Card'
import { fetchUserWork } from '@/fetch/fetchUserWork'
import Badge from '../ui/Badge'
import Image from 'next/image'

interface WhereYouWorkProps {
  ip: string
}

const WhereYouWork = async ({ ip }: WhereYouWorkProps) => {
  const userCompanyInfo = await fetchUserWork()

  if (!userCompanyInfo?.company) {
    return null
  }

  return (
    <section className="flex flex-col">
      <ConfidenceBar
        confidence={userCompanyInfo.confidence}
        className="ml-auto"
      />
      <Card>
        <article className="space-y-4">
          <div className="flex items-center justify-between flex-wrap gap-2">
            <TypographyH2 className="capitalize flex items-center gap-2">
              Where you work
            </TypographyH2>
            <Badge className="ml-auto sm:ml-0">IP: {ip}</Badge>
          </div>
          <ul className="grid grid-cols-3 sm:grid-cols-4 gap-4">
            <li>
              <div className="text-sm font-bold">Company name</div>
              <div className="text-lg ">{userCompanyInfo.company.name}</div>
            </li>
            <li className="col-span-2">
              <div className="text-sm font-bold">Company domain</div>
              <div className="text-lg break-all">
                {userCompanyInfo.company.domain}
              </div>
            </li>
            <li>
              <div className="text-sm font-bold">Company employee count</div>
              <div className="text-lg">
                {userCompanyInfo.company.employee_count}
              </div>
            </li>
            <li className="row-span-2 col-span-2 sm:col-span-1">
              <Card className="p-0 h-16 sm:h-full w-full">
                <Image
                  className="rounded-md object-cover h-full w-full"
                  src={`https://source.unsplash.com/random/1000/?${userCompanyInfo.company.industry.split(' ')[0]}`}
                  alt="duck"
                  height={1000}
                  width={1000}
                />
              </Card>
            </li>
            <li className="col-span-2">
              <div className="text-sm font-bold">Company address</div>
              <div className="text-lg">{userCompanyInfo.company.address}</div>
            </li>
            <li>
              <div className="text-sm font-bold">Company phone</div>
              <div className="text-lg">{userCompanyInfo.company.phone}</div>
            </li>
            <li className="col-span-2">
              <div className="text-sm font-bold">Company industry</div>
              <div className="text-lg">{userCompanyInfo.company.industry}</div>
            </li>
            <li>
              <div className="text-sm font-bold">Company revenue range</div>
              <div className="text-lg">
                {userCompanyInfo.company.revenue_range}
              </div>
            </li>
          </ul>
        </article>
      </Card>
    </section>
  )
}

export default WhereYouWork

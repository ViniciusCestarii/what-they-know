import React from 'react'
import ConfidenceBar from '../ui/ConfidenceBar'
import { env } from '@/utils/env'
import Image from 'next/image'
import Card from '../ui/Card'
import dynamic from 'next/dynamic'
import Badge from '../ui/Badge'
import { Info, Languages } from 'lucide-react'
import TypographyH2 from '../ui/TypographyH2'
import Tooltip from '../ui/Tooltip'
import TypographyP from '../ui/TypographyP'
import { fetchUserLocation } from '@/fetch/fetchUserLocation'
import { fetchUserIpDetails } from '@/fetch/fetchUserIpDetails'
import Incovenience from './Incovenience'

const LeafletMap = dynamic(() => import('@/components/ui/Map'), {
  ssr: false,
  loading: () => <Card className="h-[266px] p-1" />,
})

interface WhereYouAreProps {
  ip: string
}

const WhereYouAre = async ({ ip }: WhereYouAreProps) => {
  const userIpLocation = await fetchUserLocation(ip)
  const ipDataDetails = await fetchUserIpDetails(ip)

  if (!ipDataDetails?.languages || !userIpLocation?.city) {
    return <Incovenience />
  }

  return (
    <>
      <section className="flex flex-col">
        <ConfidenceBar confidence="High" className="ml-auto" />
        <Card>
          <article className="space-y-4">
            <div className="flex items-center justify-between flex-wrap gap-2">
              <TypographyH2 className="capitalize flex items-center gap-2">
                Where you are{' '}
                <Info className="text-primary" id="where-you-are-icon" />
                <Tooltip anchorSelect="#where-you-are-icon" clickable>
                  <TypographyP className="normal-case">
                    This info is gathered based on your IP provider location.
                  </TypographyP>
                </Tooltip>
              </TypographyH2>
              <Badge className="ml-auto sm:ml-0">IP: {ip}</Badge>
            </div>
            <ul className="grid grid-cols-3 sm:grid-cols-4 gap-4">
              <li>
                <div className="text-sm font-bold">Region</div>
                <div className="text-lg">{userIpLocation.state_prov}</div>
              </li>
              <li className="col-span-2 sm:col-span-3 row-span-3">
                <div className="text-sm font-bold">
                  Your IP provider location
                </div>
                <LeafletMap
                  lat={parseFloat(userIpLocation.latitude)}
                  lng={parseFloat(userIpLocation.longitude)}
                  jawgAccessToken={env.JAWG_ACCESS_TOKEN}
                />
              </li>
              <li>
                <div className="text-sm font-bold">Country</div>
                <div className="text-lg">{userIpLocation.country_name}</div>
                <figure className="relative h-20 max-w-16 mx-auto">
                  <Image
                    alt={`${userIpLocation.country_name} flag`}
                    src={userIpLocation.country_flag}
                    fill={true}
                    sizes="63px"
                    className="object-contain"
                  />
                </figure>
              </li>
              <li>
                <div className="text-sm font-bold flex flex-wrap gap-1">
                  Language{' '}
                  {ipDataDetails.languages[0].name.toLowerCase() !==
                    'english' && (
                    <>
                      <Languages className="text-primary" id="language-icon" />
                      <Tooltip anchorSelect="#language-icon" clickable>
                        <TypographyP>
                          Sorry, I didn&apos;t tranlate this page into &quot;
                          {ipDataDetails.languages[0].native}&quot;.
                        </TypographyP>
                      </Tooltip>
                    </>
                  )}
                </div>
                <div className="text-lg flex items-center gap-2 flex-wrap">
                  {' '}
                  {ipDataDetails.languages[0].name}
                </div>
              </li>
            </ul>
          </article>
        </Card>
      </section>
    </>
  )
}

export default WhereYouAre

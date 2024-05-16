import React from 'react'
import ConfidenceBar from '../ui/ConfidenceBar'
import { env } from '@/utils/env'
import Image from 'next/image'
import Card from '../ui/Card'
import dynamic from 'next/dynamic'
import Badge from '../ui/Badge'
import { Info } from 'lucide-react'
import TypographyH2 from '../ui/TypographyH2'
import Tooltip from '../ui/Tooltip'
import TypographyP from '../ui/TypographyP'
import { fetchUserLocation } from '@/fetch/fetchUserLocation'
import { fetchUserIpDetails } from '@/fetch/fetchUserIpDetails'
import Incovenience from './Incovenience'

const LeafletMap = dynamic(() => import('@/components/ui/Map'), {
  ssr: false,
  loading: () => <Card className="h-[210px] p-1" />,
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
      <section className="flex flex-col max-w-xl mx-auto">
        <ConfidenceBar confidence="High" className="ml-auto" />
        <Card>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <TypographyH2 className="capitalize flex items-center gap-2">
                Where you are{' '}
                <Info className="text-primary" id="where-you-are-icon" />
                <Tooltip anchorSelect="#where-you-are-icon" clickable>
                  <TypographyP className="normal-case">
                    This info is gathered based on your IP provider location.
                  </TypographyP>
                </Tooltip>
              </TypographyH2>
              <Badge>IP: {ip}</Badge>
            </div>
            <div className="grid grid-cols-4 gap-4">
              <div>
                <div className="text-sm font-bold">Region</div>
                <div className="text-lg">{userIpLocation.state_prov}</div>
              </div>
              <div className="col-span-3 row-span-2">
                <div className="text-sm font-bold">
                  Your IP provider location
                </div>
                <LeafletMap
                  lat={parseFloat(userIpLocation.latitude)}
                  lng={parseFloat(userIpLocation.longitude)}
                  jawgAccessToken={env.JAWG_ACCESS_TOKEN}
                />
              </div>
              <div>
                <div className="text-sm font-bold">Country</div>
                <div className="text-lg">{userIpLocation.country_name}</div>
                <div className="relative h-20 max-w-16 mx-auto">
                  <Image
                    alt={`${userIpLocation.country_name} flag`}
                    src={userIpLocation.country_flag}
                    fill={true}
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </Card>
        <ul>
          <li>City: {userIpLocation.city}</li>
          <li>Region: {userIpLocation.state_prov}</li>
          <li>Country: {userIpLocation.country_name}</li>
          <li>
            You probably speak: {ipDataDetails.languages[0].name} |{' '}
            {ipDataDetails.languages[0].native}
          </li>
        </ul>
      </section>
      <section className="flex flex-col">
        <h2>How you are browsing</h2>
        <ConfidenceBar confidence="Very High" className="ml-auto" />
        <ul>
          <li>IP: {ipDataDetails.ip}</li>
          <li>City: {userIpLocation.city}</li>
          <li>Region: {userIpLocation.state_prov}</li>
          <li>Country: {userIpLocation.country_name}</li>
          <li>Postal: {ipDataDetails.postal}</li>
          <li>Timezone: {userIpLocation.time_zone.name}</li>
          <li>ASN: {ipDataDetails.asn.asn}</li>
          <li>ASN Name: {ipDataDetails.asn.name}</li>
          <li>ASN Domain: {ipDataDetails.asn.domain}</li>
          <li>ASN Route: {ipDataDetails.asn.route}</li>
          <li>ASN Type: {ipDataDetails.asn.type}</li>
          <li>
            Are you a threat:{' '}
            {ipDataDetails.threat.is_known_abuser ||
            ipDataDetails.threat.is_threat ||
            ipDataDetails.threat.is_known_attacker
              ? "Yes, you're a threat"
              : 'No'}
          </li>
          <li>Proxy: {ipDataDetails.threat.is_proxy ? 'True' : 'False'}</li>
          {ipDataDetails.threat.is_proxy ||
            ipDataDetails.threat.is_tor ||
            (ipDataDetails.threat.is_anonymous && (
              <Image
                className="rounded-full mx-auto max-w-60 max-h-60"
                src="/vpn.jpeg"
                width={1024}
                height={1024}
                alt="lock representing anonymity"
              />
            ))}
        </ul>
      </section>
    </>
  )
}

export default WhereYouAre

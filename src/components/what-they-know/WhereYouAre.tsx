import React from 'react'
import ConfidenceBar from '../ui/ConfidenceBar'
import { env } from '@/utils/env'
import Image from 'next/image'
import { IpDataDetails } from '@/types/ipDetailsTypes'
import Card from '../ui/Card'
import dynamic from 'next/dynamic'
import { IpLocation } from '@/types/ipLocationTypes'

interface WhereYouAreProps {
  ip: string
}

const LeafletMap = dynamic(() => import('@/components/ui/Map'), {
  ssr: false,
  loading: () => <Card className="h-[410px] p-1" />,
})

const WhereYouAre = async ({ ip }: WhereYouAreProps) => {
  const userIpLocationRequest = await fetch(
    `https://api.ip2location.io/?key=${env.IP2LOCATION_API_KEY}&ip=${ip}&format=json`,
  )
  const userIpLocation: IpLocation = await userIpLocationRequest.json()
  const userIpDetailsRequest = await fetch(
    `https://api.ipdata.co/${ip}?api-key=${env.IPDATA_API_KEY}`,
  )
  const ipDataDetails: IpDataDetails = await userIpDetailsRequest.json()

  if (!ipDataDetails?.languages || !userIpLocation?.city_name) {
    return (
      <p>
        Apologies for the inconvenience, but it appears that this website&apos;s
        quota has been reached. Please try again tomorrow!
      </p>
    )
  }

  return (
    <>
      <section className="flex flex-col">
        <h2>Where you are</h2>
        <ConfidenceBar confidence="High" className="ml-auto" />
        <LeafletMap
          lat={userIpLocation.latitude}
          lng={userIpLocation.longitude}
          jawgAccessToken={env.JAWG_ACCESS_TOKEN}
        />
        <ul>
          <li>City: {userIpLocation.city_name}</li>
          <li>Region: {userIpLocation.region_name}</li>
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
          <li>City: {userIpLocation.city_name}</li>
          <li>Region: {userIpLocation.region_name}</li>
          <li>Country: {userIpLocation.country_name}</li>
          <li>Postal: {ipDataDetails.postal}</li>
          <li>Timezone: {userIpLocation.time_zone}</li>
          <li>ASN: {ipDataDetails.asn.asn}</li>
          <li>ASN Name: {ipDataDetails.asn.name}</li>
          <li>ASN Domain: {ipDataDetails.asn.domain}</li>
          <li>ASN Route: {ipDataDetails.asn.route}</li>
          <li>ASN Type: {ipDataDetails.asn.type}</li>
          <li>
            Are you a threat:{' '}
            {ipDataDetails.threat.is_known_abuser ||
              ipDataDetails.threat.is_threat ||
              ipDataDetails.threat.is_known_attacker}
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

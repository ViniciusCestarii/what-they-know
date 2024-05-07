import { IpInfoDetails } from '@/types/ipDetailsTypes'
import React from 'react'
import ConfidenceBar from '../ui/ConfidenceBar'
import LeafletMap from '../ui/Map'
import { env } from '@/utils/env'
import Image from 'next/image'

interface WhereYouAreProps {
  ip: string
}

const WhereYouAre = async ({ ip }: WhereYouAreProps) => {
  const userIpDetailsRequest = await fetch(
    `https://ipinfo.io/widget/demo/${ip}`,
  )
  const { data: userIpInfoDetails }: IpInfoDetails =
    await userIpDetailsRequest.json()

  return (
    <>
      <section className="flex flex-col">
        <h2>Where you are</h2>
        <ConfidenceBar confidence="Very High" className="ml-auto" />
        <LeafletMap
          lat={parseFloat(userIpInfoDetails.loc.split(',')[0])}
          lng={parseFloat(userIpInfoDetails.loc.split(',')[1])}
          jawgAccessToken={env.JAWG_ACCESS_TOKEN}
        />
        <ul>
          <li>City: {userIpInfoDetails.city}</li>
          <li>Region: {userIpInfoDetails.region}</li>
          <li>Country: {userIpInfoDetails.country}</li>
          <li>Postal: {userIpInfoDetails.postal}</li>
        </ul>
      </section>
      <section className="flex flex-col">
        <h2>How you are browsing</h2>
        <ConfidenceBar confidence="Very High" className="ml-auto" />
        <ul>
          <li>IP: {userIpInfoDetails.ip}</li>
          <li>Hostname: {userIpInfoDetails.hostname}</li>
          <li>City: {userIpInfoDetails.city}</li>
          <li>Region: {userIpInfoDetails.region}</li>
          <li>Country: {userIpInfoDetails.country}</li>
          <li>Postal: {userIpInfoDetails.postal}</li>
          <li>Timezone: {userIpInfoDetails.timezone}</li>
          <li>ASN: {userIpInfoDetails.asn.asn}</li>
          <li>ASN Name: {userIpInfoDetails.asn.name}</li>
          <li>ASN Domain: {userIpInfoDetails.asn.domain}</li>
          <li>ASN Route: {userIpInfoDetails.asn.route}</li>
          <li>ASN Type: {userIpInfoDetails.asn.type}</li>
          <li>Vpn: {userIpInfoDetails.privacy.vpn ? 'True' : 'False'}</li>
          {userIpInfoDetails.privacy.vpn && (
            <Image
              className="rounded-full mx-auto max-w-60 max-h-60"
              src="/vpn.jpeg"
              width={1024}
              height={1024}
              alt="lock representing vpn"
            />
          )}
        </ul>
      </section>
    </>
  )
}

export default WhereYouAre

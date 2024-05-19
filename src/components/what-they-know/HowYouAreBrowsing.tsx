import React from 'react'
import ConfidenceBar from '../ui/ConfidenceBar'
import Card from '../ui/Card'
import TypographyH2 from '../ui/TypographyH2'
import Badge from '../ui/Badge'
import { fetchUserIpDetails } from '@/fetch/fetchUserIpDetails'
import Image from 'next/image'

interface HowYouAreBrowsingProps {
  ip: string
}

const HowYouAreBrowsing = async ({ ip }: HowYouAreBrowsingProps) => {
  const ipDataDetails = await fetchUserIpDetails(ip)

  if (!ipDataDetails?.languages) {
    return null
  }

  return (
    <>
      <section className="flex flex-col">
        <ConfidenceBar confidence="Very High" className="ml-auto" />
        <Card>
          <article className="space-y-4">
            <div className="flex items-center justify-between flex-wrap gap-2">
              <TypographyH2 className="capitalize flex items-center gap-2">
                How you are browsing
              </TypographyH2>
              <Badge className="ml-auto sm:ml-0">IP: {ip}</Badge>
            </div>
            <ul className="grid grid-cols-3 sm:grid-cols-4 gap-4">
              <li className="col-span-2">
                <div className="text-sm font-bold">Network provider</div>
                <div className="text-lg">{ipDataDetails.asn.name}</div>
              </li>
              <li>
                <div className="text-sm font-bold">Navigating using VPN</div>
                <div className="text-lg">
                  {ipDataDetails.threat.is_proxy ? 'Yes' : 'No'}
                </div>
              </li>
              <li>
                <div className="text-sm font-bold">Navigating using iCloud</div>
                <div className="text-lg">
                  {ipDataDetails.threat.is_icloud_relay ? 'Yes' : 'No'}
                </div>
              </li>
              <li>
                <div className="text-sm font-bold">Navigating using tor</div>
                <div className="text-lg">
                  {ipDataDetails.threat.is_tor ? 'Yes' : 'No'}
                </div>
              </li>
              <li>
                <div className="text-sm font-bold">Navigating using proxy</div>
                <div className="text-lg">
                  {ipDataDetails.threat.is_proxy ? 'Yes' : 'No'}
                </div>
              </li>
              <li>
                <div className="text-sm font-bold">Navigating anonimously</div>
                <div className="text-lg">
                  {ipDataDetails.threat.is_anonymous ? 'Yes' : 'No'}
                </div>
              </li>
              <li className="col-span-2 sm:col-span-1">
                <div className="text-sm font-bold">
                  Navigating using datacenter
                </div>
                <div className="text-lg">
                  {ipDataDetails.threat.is_datacenter ? 'Yes' : 'No'}
                </div>
              </li>
            </ul>
          </article>
        </Card>
      </section>
      <section className="flex flex-col">
        <ConfidenceBar confidence="Very High" className="ml-auto" />
        <Card>
          <article className="space-y-4">
            <div className="flex items-center justify-between flex-wrap gap-2">
              <TypographyH2 className="capitalize flex items-center gap-2">
                How dangerous you are
              </TypographyH2>
              <Badge className="ml-auto sm:ml-0">IP: {ip}</Badge>
            </div>
            <ul className="grid grid-cols-3 sm:grid-cols-4 gap-4">
              <li>
                <div className="text-sm font-bold">Are you an abuser</div>
                <div className="text-lg">
                  {ipDataDetails.threat.is_known_abuser ? 'Yes' : 'No'}
                </div>
              </li>
              <li>
                <div className="text-sm font-bold">Are you an attacker</div>
                <div className="text-lg">
                  {ipDataDetails.threat.is_known_attacker ? 'Yes' : 'No'}
                </div>
              </li>
              <li>
                <div className="text-sm font-bold">Are you a threat</div>
                <div className="text-lg">
                  {ipDataDetails.threat.is_threat ? 'Yes' : 'No'}
                </div>
              </li>
              <li className="col-span-3 sm:col-span-1">
                <Card className="p-0 h-20 w-full">
                  <Image
                    className="rounded-md object-cover h-full w-full"
                    src="https://source.unsplash.com/random/1000x1000/?disorder"
                    alt="dangerous"
                    height={1000}
                    width={1000}
                  />
                </Card>
              </li>
            </ul>
          </article>
        </Card>
      </section>
    </>
  )
}

export default HowYouAreBrowsing

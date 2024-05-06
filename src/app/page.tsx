import { Company } from '@/types/companyTypes'
import { IpDetails } from '@/types/ipDetailsTypes'
import { env } from '@/utils/env'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import Badge from '@/components/ui/Badge'
import ConfidenceBar from '@/components/ui/ConfidenceBar'
import Card from '@/components/ui/Card'

const LeafletMap = dynamic(() => import('@/components/ui/Map'), {
  ssr: false,
})

const Home = async () => {
  const userCompanyInfoRequest = await fetch(
    'https://epsilon.6sense.com/v3/company/details',
    {
      headers: {
        Authorization: env.EPSILON6SENSE_API_KEY,
      },
    },
  )

  const userCompanyInfo: Company = await userCompanyInfoRequest.json()

  const response = await fetch('https://ipinfo.io/json', {
    headers: {
      Accept: 'application/json',
    },
  })
  const userIpInfo = await response.json()
  const userIpDetailsRequest = await fetch(
    `https://ipinfo.io/widget/demo/${userIpInfo.ip}`,
  )
  const userIpInfoDetails: IpDetails = await userIpDetailsRequest.json()

  return (
    <main className="min-h-screen flex flex-col gap-4">
      <h1>What they know about you</h1>
      <section className="flex flex-col">
        <h2>Where you are</h2>
        <ConfidenceBar confidence="Very High" className="ml-auto" />
        <LeafletMap
          lat={parseFloat(userIpInfo.loc.split(',')[0])}
          lng={parseFloat(userIpInfo.loc.split(',')[1])}
        />
        <ul>
          <li>City: {userIpInfo.city}</li>
          <li>Region: {userIpInfo.region}</li>
          <li>Country: {userIpInfo.country}</li>
          <li>Postal: {userIpInfo.postal}</li>
        </ul>
      </section>
      <section className="flex flex-col">
        <h2>How you are browsing</h2>
        <ConfidenceBar confidence="Very High" className="ml-auto" />
        <ul>
          <li>IP: {userIpInfo.ip}</li>
          <li>Hostname: {userIpInfo.hostname}</li>
          <li>City: {userIpInfo.city}</li>
          <li>Region: {userIpInfo.region}</li>
          <li>Country: {userIpInfo.country}</li>
          <li>Postal: {userIpInfo.postal}</li>
          <li>Timezone: {userIpInfo.timezone}</li>
          <li>ASN: {userIpInfoDetails.data.asn.asn}</li>
          <li>ASN Name: {userIpInfoDetails.data.asn.name}</li>
          <li>ASN Domain: {userIpInfoDetails.data.asn.domain}</li>
          <li>ASN Route: {userIpInfoDetails.data.asn.route}</li>
          <li>ASN Type: {userIpInfoDetails.data.asn.type}</li>
        </ul>
      </section>
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
      {/* style prototype */}
      <div className="flex min-h-screen items-center justify-center bg-gray-900 p-4 text-green-500">
        <Card className="max-w-md">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h1 className="text-2xl font-bold">User Profile</h1>
              <Badge>ID: 12345</Badge>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <div className="text-sm font-bold">Name</div>
                <div className="text-lg">John Doe</div>
              </div>
              <div>
                <div className="text-sm font-bold">Email</div>
                <div className="text-lg">john.doe@example.com</div>
              </div>
              <div>
                <div className="text-sm font-bold">Phone</div>
                <div className="text-lg">+1 (555) 555-5555</div>
              </div>
              <div>
                <div className="text-sm font-bold">Address</div>
                <div className="text-lg">123 Main St, Anytown USA</div>
              </div>
            </div>
            <div className="flex justify-between">
              <div className="text-sm font-bold">Joined</div>
              <div className="text-lg">2023-04-01</div>
            </div>
          </div>
        </Card>
      </div>
    </main>
  )
}

export default Home

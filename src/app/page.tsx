import { IpDetails } from '@/types/ipDetailsTypes'
import { env } from '@/utils/env'
import dynamic from 'next/dynamic'
import Badge from '@/components/ui/Badge'
import ConfidenceBar from '@/components/ui/ConfidenceBar'
import Card from '@/components/ui/Card'
import Image from 'next/image'
import { headers } from 'next/headers'
const LeafletMap = dynamic(() => import('@/components/ui/Map'), {
  ssr: false,
  loading: () => <Card className="h-[410px] p-1" />,
})

const Home = async () => {
  const header = headers()
  const forwardedFor = header.get('x-forwarded-for')
  const ip =
    forwardedFor != null && forwardedFor !== '::1'
      ? forwardedFor.split(',')[0]
      : '8.8.4.4'
  console.log('ip: ' + ip)

  // const userCompanyInfoRequest = await fetch(
  //   'https://epsilon.6sense.com/v3/company/details',
  //   {
  //     headers: {
  //       Authorization: env.EPSILON6SENSE_API_KEY,
  //     },
  //   },
  // )

  // const userCompanyInfo: Company = await userCompanyInfoRequest.json()

  const userIpDetailsRequest = await fetch(
    `https://db-ip.com/demo/home.php?s=${ip}`,
  )
  const { demoInfo: userIpInfoDetails }: IpDetails =
    await userIpDetailsRequest.json()

  if (userIpInfoDetails.error) {
    return "Sorry looks like the server passed it's API quota. Please try again later."
  }

  console.log('userIpInfoDetails: ', userIpInfoDetails)

  return (
    <div className="flex flex-col gap-4">
      {ip}
      <h1>What they know about you</h1>
      <section className="flex flex-col">
        <h2>Where you are</h2>
        <ConfidenceBar confidence="Very High" className="ml-auto" />
        <LeafletMap
          lat={userIpInfoDetails.latitude}
          lng={userIpInfoDetails.longitude}
          jawgAccessToken={env.JAWG_ACCESS_TOKEN}
        />
        <ul>
          <li>City: {userIpInfoDetails.city}</li>
          <li>Region: {userIpInfoDetails.stateProv}</li>
          <li>Country: {userIpInfoDetails.countryName}</li>
          <li>Continent: {userIpInfoDetails.continentName}</li>
          <li>You probably speak: {userIpInfoDetails.languages[0]}</li>
        </ul>
      </section>
      <section className="flex flex-col">
        <h2>How you are browsing</h2>
        <ConfidenceBar confidence="Very High" className="ml-auto" />
        <ul>
          <li>IP: {userIpInfoDetails.ipAddress}</li>
          <li>ISP: {userIpInfoDetails.isp}</li>
          <li>Organization: {userIpInfoDetails.organization}</li>
          <li>Threat Level: {userIpInfoDetails.threatLevel}</li>
          <li>
            Are you a Bot: {userIpInfoDetails.isCrawler ? 'True' : 'False'}
          </li>
          <li>
            Are you using Proxy: {userIpInfoDetails.isProxy ? 'True' : 'False'}
          </li>
          {userIpInfoDetails.isProxy && (
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
      {/* <section className="flex flex-col">
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
      </section> */}
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
    </div>
  )
}

export default Home

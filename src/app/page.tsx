import Badge from '@/components/ui/Badge'
import Card from '@/components/ui/Card'
import WhereYouAre from '@/components/what-they-know/WhereYouAre'
import { headers } from 'next/headers'

const Home = async () => {
  const header = headers()
  const forwardedFor = header.get('x-forwarded-for')
  const ip =
    forwardedFor != null && forwardedFor !== '::1'
      ? forwardedFor.split(',')[0]
      : '8.8.4.4'

  return (
    <div className="flex flex-col gap-4">
      <WhereYouAre ip={ip} />
      {/* <WhereYouWork /> */}
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

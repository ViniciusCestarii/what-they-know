import Hero from '@/components/Hero'
import WhatTheyKnow from '@/components/what-they-know/WhatTheyKnow'

const IpInfo = async ({ params }: { params: { ip: string } }) => {
  const { ip } = params
  return (
    <div className="flex flex-col gap-4">
      <Hero />
      <WhatTheyKnow ip={ip} />
    </div>
  )
}

export default IpInfo

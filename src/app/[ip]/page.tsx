import WhatTheyKnow from '@/components/WhatTheyKnow'

const IpInfo = async ({ params }: { params: { ip: string } }) => {
  const { ip } = params
  return <WhatTheyKnow ip={ip} />
}

export default IpInfo

import React from 'react'
import WhereYouAre from './WhereYouAre'
// import Card from '../ui/Card'
// import Badge from '../ui/Badge'
import { fetchUserIp } from '@/fetch/fetchUserIp'
import HowYouAreBrowsing from './HowYouAreBrowsing'
import WhereYouWork from './WhereYouWork'

export interface WhatTheyKnowMainProps {
  ip?: string
}

const WhatTheyKnowMain = async ({ ip: ipProp }: WhatTheyKnowMainProps) => {
  const ip = ipProp ?? (await fetchUserIp())
  return (
    <>
      <WhereYouAre ip={ip} />
      <WhereYouWork ip={ip} />
      <HowYouAreBrowsing ip={ip} />
    </>
  )
}

export default WhatTheyKnowMain

import React from 'react'
import WhereYouAre from './WhereYouAre'
// import Card from '../ui/Card'
// import Badge from '../ui/Badge'
import { fetchUserIp } from '@/fetch/fetchUserIp'
import HowYouAreBrowsing from './HowYouAreBrowsing'
import WhereYouWork from './WhereYouWork'
import { env } from '@/utils/env'

export interface WhatTheyKnowMainProps {
  ip?: string
}

const WhatTheyKnowMain = async ({ ip: ipProp }: WhatTheyKnowMainProps) => {
  const ip = ipProp ?? (await fetchUserIp())
  return (
    <>
      <WhereYouAre ip={ip} />
      <HowYouAreBrowsing ip={ip} />
      <WhereYouWork ip={ip} EPSILON6SENSE_API_KEY={env.EPSILON6SENSE_API_KEY} />
    </>
  )
}

export default WhatTheyKnowMain

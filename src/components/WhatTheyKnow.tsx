import React from 'react'
import Hero from './what-they-know/Hero'
import WhatTheyKnowMain, {
  WhatTheyKnowMainProps,
} from './what-they-know/WhatTheyKnowMain'
import FetchOtherIp from './what-they-know/FetchOtherIp'

const WhatTheyKnow = (props: WhatTheyKnowMainProps) => {
  return (
    <div className="flex flex-col gap-4">
      <Hero />
      <div className="max-w-xl mx-auto">
        <WhatTheyKnowMain {...props} />
        <FetchOtherIp />
      </div>
    </div>
  )
}

export default WhatTheyKnow

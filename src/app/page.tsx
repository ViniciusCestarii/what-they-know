import Hero from '@/components/Hero'
import WhatTheyKnow from '@/components/what-they-know/WhatTheyKnow'

const Home = async () => {
  return (
    <div className="flex flex-col gap-4">
      <Hero />
      <WhatTheyKnow />
    </div>
  )
}

export default Home

import React from 'react'
import TypographyH1 from '../ui/TypographyH1'
import { TypewriterEffect } from '../ui/TypeWrighther'

const Hero = () => {
  return (
    <section>
      <TypographyH1>
        <TypewriterEffect
          words={[
            { text: 'What' },
            { text: 'they' },
            { text: 'know' },
            { text: 'about' },
            { text: 'you', className: 'underline' },
          ]}
        />
      </TypographyH1>
    </section>
  )
}

export default Hero

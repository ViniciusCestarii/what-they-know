import Image from 'next/image'
import TypographyP from '../ui/TypographyP'

const Incovenience = () => {
  return (
    <section className="flex flex-col gap-2">
      <TypographyP>
        Apologies for the inconvenience, but it appears that this website&apos;s
        quota has been reached (I can&apos;t pay for it 😿). Please try again
        tomorrow!
      </TypographyP>
      <div className="mx-auto">
        <Image
          className="rounded-md"
          src={'https://source.unsplash.com/random/500×500/?duck'}
          alt="duck"
          height={500}
          width={500}
        />
        <span>Here, see a duck for the Incovenience</span>
      </div>
    </section>
  )
}

export default Incovenience

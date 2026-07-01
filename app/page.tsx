import Nav         from '@/components/Nav'
import Hero        from '@/components/Hero'
import Ticker      from '@/components/Ticker'
import Persona     from '@/components/Persona'
import Story       from '@/components/Story'
import Calibration from '@/components/Calibration'
import Raise       from '@/components/Raise'
import Footer      from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Ticker />
        <Persona />
        <Story />
        <Calibration />
        <Raise />
      </main>
      <Footer />
    </>
  )
}

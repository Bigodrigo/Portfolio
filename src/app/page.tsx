import Image from 'next/image'
import Hero from './components/Hero'
import Projects from './components/Projects'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-palet-two-pri">
      <Hero heading='Full-Stack Developer Jr' message='I am a highly articulate individual who possesses a fervent interest in both music and technology. Moreover, my dynamic personality drives me to constantly seek expedient solutions that uphold optimum standards of quality in my professional endeavors.' />
      <Projects />
    </main>
  )
}

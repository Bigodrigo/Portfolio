import React from 'react';
import Hero from './components/Hero';
import Projects from './components/Projects';

export default function Home() {
  return (
    <main className="flex min-h-screen min-w-screen flex-col items-center justify-between p-2 lg:p-24 bg-palet-two-pri">
      <Hero
        heading="Full-Stack Developer Jr"
        // message="I am a highly articulate individual who possesses a fervent interest in both music and technology. Moreover, my dynamic personality drives me to constantly seek expedient solutions that uphold optimum standards of quality in my professional endeavors."
        message="Sou uma pessoa bastante comunicativa, apaixonado por música e tecnologia, com uma personalidade inquieta, sempre em busca de soluções profissionais rápidas que mantenham uma qualidade satisfatória."
        desktopClass="text-5xl"
        mobileClass="text-2xl my-8 py-8"
      />
      <Projects desktopClass="my-4" mobileClass="my-4" />
    </main>
  );
}

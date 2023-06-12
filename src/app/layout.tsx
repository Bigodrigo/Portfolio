import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from './components/Navbar';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Rodrigo Boquer Portfolio',
  description: 'Portfolio with contact and experiences of a Full-stack Jr Developer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}

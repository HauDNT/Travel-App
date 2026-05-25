// https://travel-app-three-rho.vercel.app/
// @ts-ignore
import './globals.css'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Thomas Travel App',
  description: 'Travel And Camping',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar/>
        <main className='relative overflow-hidden'>
          {children}
        </main>
        <Footer/>
      </body>
    </html>
  )
}

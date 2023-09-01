import '@styles/globals.css'
import 'remixicon/fonts/remixicon.css'
import Image from 'next/image'

import Navbar from '@components/Navbar'
import Footer from '@components/Footer'
import Abovefooter from '@components/Abovefooter'


export const metadata = {
  title: 'Cross Atlantic Software',
  description: 'Clone created by Devansh',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/assets/icons/favicon.ico" />
      </head>
      <body >
        <main>
        
          <Navbar />
          {children}
          <Abovefooter/>
          <Footer/>
        </main>
      </body>
    </html>
  )
}

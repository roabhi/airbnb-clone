import { Nunito } from 'next/font/google'
import NavBar from './components/Navbar/Navbar'

import './globals.css'

export const metadata = {
  title: 'Airbnb Clone',
  description: 'Airbnb Clone made in Next13',
}

const font = Nunito({
  subsets: ['latin'],
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <NavBar />
        {children}
      </body>
    </html>
  )
}

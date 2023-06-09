import './globals.css'
import { Nunito } from 'next/font/google'
import NavBar from './components/Navbar/Navbar'
import RegisterModal from './components/Modals/RegisterModal'
import RentModal from './components/Modals/RentModal'
import ToasterProvider from './providers/ToasterProvider'
import LoginModal from './components/Modals/LoginModal'
import getCurrentUser from './actions/getCurrentUser'

export const metadata = {
  title: 'Airbnb Clone',
  description: 'Airbnb Clone made in Next13',
}

const font = Nunito({
  subsets: ['latin'],
})

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const currentUser = await getCurrentUser()

  return (
    <html lang="en">
      <body className={font.className}>
        <ToasterProvider />
        <RentModal />
        <LoginModal />
        <RegisterModal />
        <NavBar currentUser={currentUser} />
        <div
          className="
          pb-20 pt-28
        "
        >
          {children}
        </div>
      </body>
    </html>
  )
}

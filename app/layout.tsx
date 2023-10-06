import Footer from '@/components/footer'
import './globals.css'
import type { Metadata } from 'next'
import { Urbanist } from 'next/font/google'
import Navbar from '@/components/navbar'
import ModalProvider from '@/providers/modal-provider'
import ToastProvider from '@/providers/toast-provider'
import { ThemeProvider } from '@/providers/theme-provider'

const urbanist = Urbanist({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Store Front',
  description: 'Access our products',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={urbanist.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
        >
        <ModalProvider/>
        <ToastProvider/>
        <Navbar />
        {children}
        <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}

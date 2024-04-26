import type { Metadata } from 'next'
import {  Nunito_Sans } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from './context/theme'

const inter = Nunito_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'iamtbay | Portfolio',
  description: 'iamtbay developer portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
  }) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <ThemeProvider>
        {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

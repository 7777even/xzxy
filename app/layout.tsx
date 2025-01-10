import type { Metadata } from 'next'
import './globals.css'
import { Header } from '@/components/header'
import { Sidebar } from '@/components/sidebar'

export const metadata: Metadata = {
  title: 'xzxy',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <main>
          {children}
        </main>
      </body>
    </html>
  )
}

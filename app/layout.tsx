import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Ricardo Roberts | Founder, LCS Engine',
  description:
    'Ricardo Roberts is the founder of LCS Engine — a decision intelligence platform for investing. Startup advisor, EIR at LaunchNY, Columbia EMBA, Tufts IR.',
  openGraph: {
    title: 'Ricardo Roberts | Founder, LCS Engine',
    description:
      'Decision intelligence through the lens of investing. Building LCS Engine — the platform that scores your judgment, not just your returns.',
    url: 'https://jrricardoroberts.com',
    siteName: 'Ricardo Roberts',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ricardo Roberts | Founder, LCS Engine',
    description:
      'Decision intelligence through the lens of investing.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  )
}

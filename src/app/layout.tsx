import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "BikodaInfo — Vibecoding & Testing",
  description: "Games, apps, business solutions, QA. Pair in Cursor or hand me the spec—either way, we ship.",
  metadataBase: new URL("https://bikoda.dev"),
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
  openGraph: {
    title: "BikodaInfo",
    description: "Vibecoding studio by Juan Francisco Maggi.",
    url: "https://bikoda.dev",
    siteName: "BikodaInfo",
    images: ["/og.jpg"],
    locale: "en_US",
    type: "website",
  },
  twitter: { 
    card: "summary_large_image", 
    creator: "@bikoda" 
  },
  alternates: { 
    canonical: "https://bikoda.dev" 
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

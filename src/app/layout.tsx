import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'S&D株式会社 | FA設備設計・ITコンサルティング',
  description: 'S&D株式会社は、FA設備の電気設計・ソフト設計およびITコンサルティングを提供する企業です。',
  keywords: ['FA設備', '電気設計', 'ソフト設計', 'PLC', 'ITコンサルティング', 'DX'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

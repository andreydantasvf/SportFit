import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'SportFit',
  description: 'Transforme seu Corpo na SportFit: Estética em Foco',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-zinc-900 text-white p-6 pt-0 flex flex-col items-center justify-center">{children}</body>
    </html>
  )
}

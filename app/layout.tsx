import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Divyanshu Goyal',
  description: 'Created with v0',
  generator: 'v0.dev',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <header></header>
        <main
         className="min-h-screen overflow-x-hidden max-w-7xl mx-auto px-4 dark:bg-gray-900 dark:text-white"> 
          {children}
        </main>
      </body>
    </html>
  )
}

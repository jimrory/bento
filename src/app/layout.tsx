import type { Metadata } from 'next'
import { Work_Sans } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from './theme-provider'

const workSans = Work_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  // 网页标题
  title: 'jim luo', 
  // 网页描述
  description: 'Jim Luo\'s personal bento site.', 
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html suppressHydrationWarning lang="en">
      <body className={workSans.className}>
        <ThemeProvider attribute="class" disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

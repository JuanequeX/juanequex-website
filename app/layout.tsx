import type { Metadata } from 'next';
import '@/styles/application.scss';

export const metadata: Metadata = {
  title: 'Juanequex',
  description: 'Oficial website of Juanequex ✨',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <div id="root">{children}</div>
      </body>
    </html>
  )
}

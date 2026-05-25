import type { Metadata, Viewport } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css'; // Global styles

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-space' });

export const viewport: Viewport = {
  themeColor: '#fcfbf8',
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://www.orindle.com'),
  title: 'ORINDLE — Website Development, Social Media & AI Automation Agency India',
  description: 'ORINDLE helps Indian businesses grow with website development, social media management, digital marketing, video editing, and AI automation. Build your digital growth system today.',
  robots: {
    index: true,
    follow: true,
  },
  authors: [{ name: 'ORINDLE' }],
  openGraph: {
    type: 'website',
    siteName: 'ORINDLE',
    locale: 'en_IN',
    url: 'https://www.orindle.com',
    title: 'ORINDLE — Website, Marketing & AI Automation Agency India',
    description: 'ORINDLE helps Indian businesses grow with websites, social media, digital marketing, video editing, and AI automation built for leads and scale.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ORINDLE — Website, Marketing & AI Automation Agency India',
    description: 'ORINDLE helps Indian businesses grow with websites, social media, digital marketing, video editing, and AI automation built for leads and scale.',
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} w-full max-w-[100vw] overflow-x-clip`}>
      <head>
        <link rel="icon" href="/favicon.png" type="image/png" />
      </head>
      <body suppressHydrationWarning className="font-sans antialiased text-[#111111] bg-[#fcfbf8] w-full max-w-[100vw] overflow-x-clip">{children}</body>
    </html>
  );
}

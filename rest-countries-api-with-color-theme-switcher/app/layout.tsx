import type { Metadata } from 'next';
import { Nunito_Sans } from 'next/font/google';
import Header from './components/Header';
import './globals.css';

const nunitoSans = Nunito_Sans({
  weight: ['400', '600', '700', '800'],
  variable: '--font-nunito-sans',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'REST Countries',
  description: 'REST Countries API with color theme switcher',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className={`${nunitoSans.className} no-scrollbar`}>
      <body
        className={`${nunitoSans.variable} antialiased bg-[#fafafa] dark:bg-[#202C37] dark:text-white`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}

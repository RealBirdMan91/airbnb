import Navbar from '@/components/shared/navbar/Navbar';
import './globals.css';
import { Nunito } from 'next/font/google';
import Providers from './provider';
import RegisterModal from '@/components/shared/modals/RegisterModal';
import LoginModal from '@/components/shared/modals/LoginModal';

const nunito = Nunito({ subsets: ['latin'] });

export const metadata = {
  title: 'Airbnb',
  description:
    'Airbnb: Vacation Rentals, Cabins, Beach Houses, Unique Homes & Experiences',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        <Providers>
          {/* @ts-expect-error Server Component */}
          <Navbar />
          {children}
          <RegisterModal />
          <LoginModal />
        </Providers>
      </body>
    </html>
  );
}

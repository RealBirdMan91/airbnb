import Navbar from '@/components/shared/navbar/Navbar';
import './globals.css';
import { Nunito } from 'next/font/google';
import Providers from './provider';
import RegisterModal from '@/components/shared/modals/RegisterModal';

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
          <Navbar />
          {children}
          <RegisterModal />
        </Providers>
      </body>
    </html>
  );
}

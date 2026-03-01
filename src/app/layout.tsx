import './globals.css';
import { Inter } from 'next/font/google';
import Navbar from '@/components/Navbar';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata = {
  title: 'SAPNXT Solution | Enterprise SAP BTP & AI Excellence',
  description: 'Leading SAP Solutions provider specializing in Business Technology Platform (BTP) and Business AI integration.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable}`}>
        <Navbar />
        <main>{children}</main>
        <footer className="py-12 glass mt-20">
          <div className="container text-center">
            <p className="text-muted">© 2026 SAPNXT Solution. All rights reserved.</p>
            <p className="text-muted" style={{ fontSize: '0.8rem', marginTop: '0.5rem' }}>SAPNXT SOLUTIONS LLP</p>
          </div>
        </footer>
      </body>
    </html>
  );
}

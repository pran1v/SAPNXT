import './globals.css';
import { Inter } from 'next/font/google';
import Navbar from '@/components/Navbar';
import CookieBanner from '@/components/CookieBanner';
import Link from 'next/link';


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
        <footer className="py-12 glass mt-20" style={{ padding: '4rem 0' }}>
          <div className="container text-center">
            <p className="text-muted">© 2026 SAPNXT Solution. All rights reserved.</p>
            <p className="text-muted" style={{ fontSize: '0.8rem', marginTop: '0.5rem' }}>SAPNXT SOLUTIONS LLP</p>
            <div style={{ marginTop: '1.5rem', display: 'flex', justifyContent: 'center', gap: '2rem', fontSize: '0.9rem' }}>
              <Link href="/privacy" className="nav-link">Privacy Policy</Link>
              <a href="https://linkedin.com/company/sapnxt" target="_blank" rel="noopener noreferrer" className="nav-link">LinkedIn</a>
            </div>
          </div>
        </footer>
        <CookieBanner />
      </body>
    </html>
  );
}

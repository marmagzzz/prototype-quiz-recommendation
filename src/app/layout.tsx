import './globals.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import CustomNavbar from '@/components/CustomNavbar/CustomNavbar.component';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Prototype | Quiz with Course Recommendation',
    description: 'A prototype of quiz with mock learning course recommendation',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang='en' className={inter.className}>
            <body>
                <CustomNavbar />
                {children}
            </body>
        </html>
    );
}

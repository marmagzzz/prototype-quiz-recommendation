import './globals.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

import type { Metadata } from 'next';
import CustomNavbar from '@/components/CustomNavbar/CustomNavbar.component';
import { fontOpenSans } from '@/fonts';

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
        <html lang='en'>
            <body className={fontOpenSans.className}>
                <CustomNavbar />
                {children}
            </body>
        </html>
    );
}

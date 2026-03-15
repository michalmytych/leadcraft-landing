import {nohemi, switzer} from '@/assets/fonts/fonts';
import '@/app/globals.css';

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html className={`${nohemi.variable} ${switzer.variable}`}>
      <body>{children}</body>
    </html>
  );
}
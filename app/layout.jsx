import './globals.css';
import { Poppins } from 'next/font/google';
import Header from './components/Header';

const poppins = Poppins({
  weight: ['400', '700'],
  subsets: ['latin'],
});

export const metadata = {
  title: 'RayTech',
  description: 'Web Development',
  keywords:
    'web development, web design, javascript, react, node, html,css,tailwindcss, ',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={poppins.className}>
        <Header />
        <main className='container'>{children}</main>
      </body>
    </html>
  );
}

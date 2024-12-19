import 'react-toastify/dist/ReactToastify.css';
import "./globals.css";
import Navbar from '@/components/nav-bar/Navbar';
import Footer from '@/components/footer/Footer';
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

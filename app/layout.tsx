import "@styles/global.scss";
import Provider from "@modules/Provider";
import Nav from "@components/Nav";
import Footer from "@components/Footer";
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-poppins',
})

type RootLayoutType = {
  children: React.ReactNode;
};

const RootLayout = ({ children }: RootLayoutType) => {
  return (
    <html lang="en" className={poppins.variable}>
      <body>
        <Provider>
          <main className="main">
            <Nav />
            {children}
          <Footer />
          </main>
        </Provider>
      </body>
    </html>
  );
};

export default RootLayout;

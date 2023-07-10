import "@styles/global.scss";
import Provider from "@modules/Provider";
import Nav from "@components/Nav";
import Footer from "@components/Footer";

type RootLayoutType = {
  children: React.ReactNode;
};

const RootLayout = ({ children }: RootLayoutType) => {
  return (
    <html lang="en">
      <body>
        <Provider>
          <main className="main">
            <Nav />
            {children}
          </main>
          <Footer />
        </Provider>
      </body>
    </html>
  );
};

export default RootLayout;

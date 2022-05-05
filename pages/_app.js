import Header from '../components/Header';
import Footer from '../components/Footer';

import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <main className="w-[95%] max-w-6xl mx-auto">
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  );
}

export default MyApp;

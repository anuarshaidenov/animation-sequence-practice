import Header from '../components/Header';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <main className="w-[95%] max-w-5xl mx-auto py-32">
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default MyApp;

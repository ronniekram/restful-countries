import Header from '../components/Header';
import { CountriesContextProvider } from '../store/countries-context';

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <CountriesContextProvider>
        <Header />
        <Component {...pageProps} />
      </CountriesContextProvider>
    </div>
  )
}

export default MyApp

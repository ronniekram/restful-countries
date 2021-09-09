import { ThemeProvider } from "next-themes";
import Header from "../components/Header";
import Search from '../components/Search';
import { CountriesContextProvider } from "../store/countries-context";
import "../styles/style.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider
        defaultTheme="system"
        enableSystem={true}
        themes={["light", "dark"]}
        attribute="data-theme"
      >
        <CountriesContextProvider>
          <Header />
          <Component {...pageProps} />
        </CountriesContextProvider>
      </ThemeProvider>
    </>
  );
}

export default MyApp;

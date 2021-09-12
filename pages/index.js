import { useContext } from 'react';
import Head from 'next/head';

import Queries from '../components/Queries';
import Countries from '../components/Countries';
import CountriesContext from '../store/countries-context';

const Home = () => {
  const countriesCtx = useContext(CountriesContext);
  const { filtered } = countriesCtx;

  return (
    <>
      <Head>
        <title>RESTful Countries</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Queries />
      <Countries countries={filtered} />
    </>
  );
};

export default Home;

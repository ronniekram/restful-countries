import { createContext, useState, useEffect } from 'react';
import axios from 'axios';

const CountriesContext = createContext({
  countries: [],
});

export function CountryContextProvider(props) {
  const [countries, setCountries] = useState(null);

  const getCountries = async () => {
    const response = await axios.get('https://restcountries.eu/rest/v2/all');
  };

  useEffect(() => {

  });

  const context = {
    countries: countries
  };

  return (
    <CountriesContext.Provider value={context}>
      {props.children}
    </CountriesContext.Provider>
  );
};

export default CountriesContext;
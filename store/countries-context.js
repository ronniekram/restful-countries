import { createContext, useState, useEffect } from 'react';
import axios from 'axios';

const CountriesContext = createContext({
  countries: [],
  filterCountries: () => {},
  setCountries: () => {}
});

export function CountriesContextProvider(props) {
  const [countries, setCountries] = useState();

  const getCountries = async () => {
    const response = await axios.get('https://restcountries.eu/rest/v2/all');
    setCountries(response.data);
  };

  const filterCountries = (region) => {
    if (countries) {
      if (region !== "") {
        return countries.filter(country => country.region === region);
      } else {
        return countries;
      };
    }
  };

  useEffect(() => {
    getCountries();
  }, []);

  const context = {
    countries: countries,
    filterCountries: filterCountries
  };

  return (
    <CountriesContext.Provider value={context}>
      {props.children}
    </CountriesContext.Provider>
  );
};

export default CountriesContext;
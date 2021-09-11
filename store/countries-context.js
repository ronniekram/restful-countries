import { createContext, useState, useEffect } from 'react';
import axios from 'axios';

const CountriesContext = createContext({
  countries: [],
  filterCountries: () => {},
  getCountries: () => {}
});

export function CountriesContextProvider(props) {
  const [countries, setCountries] = useState();

  const getCountries = async () => {
    const response = await axios.get('https://restcountries.eu/rest/v2/all');
    const data = await response.data
    setCountries(data);
  };

  const filterCountries = (region) => {
    if (countries && region !== "") {
      setCountries(countries.filter(country => country.region === region))
    };
  };

  useEffect(() => {
    getCountries();
  }, [])

  const context = {
    countries: countries,
    filterCountries: filterCountries,
    getCountries: getCountries
  };

  return (
    <CountriesContext.Provider value={context}>
      {props.children}
    </CountriesContext.Provider>
  );
};

export default CountriesContext;
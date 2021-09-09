import { createContext, useState, useEffect } from 'react';
import axios from 'axios';

const CountriesContext = createContext({
  countries: [],
});

export function CountryContextProvider(props) {
  const [countries, setCountries] = useState();

  const getCountries = async () => {
    const response = await axios.get('https://restcountries.eu/rest/v2/all');
    const results = await response.json();
    return results;
  };

  useEffect(() => {
    setCountries(getCountries());
  }, [countries]);

  const getRegions = () => {
    const regions = [];

    for (let country of countries) {
      if (!regions.includes(country.region) && country.region !== "" && country.region !== "Polar") {
        regions.push(country.region)
      };
    };

    return regions;
  };

  const context = {
    countries: countries,
    getRegions: getRegions
  };

  return (
    <CountriesContext.Provider value={context}>
      {props.children}
    </CountriesContext.Provider>
  );
};

export default CountriesContext;
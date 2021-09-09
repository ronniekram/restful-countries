import { createContext, useState, useEffect } from 'react';
import axios from 'axios';

const CountriesContext = createContext({
  countries: [],
});

export function CountriesContextProvider(props) {
  const [countries, setCountries] = useState();

  const getCountries = async () => {
    const response = await axios.get('https://restcountries.eu/rest/v2/all');
    // debugger
    const results = await response.data
    return results;
  };

  useEffect(() => {
    setCountries(getCountries());
  }, []);

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
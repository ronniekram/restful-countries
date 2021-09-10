import { createContext, useState, useEffect } from 'react';
import axios from 'axios';

const CountriesContext = createContext({
  countries: [],
  getRegions: () => {},
  filterCountries: () => {},
  setCountries: () => {}
});

export function CountriesContextProvider(props) {
  const [countries, setCountries] = useState();

  const getCountries = async () => {
    const response = await axios.get('https://restcountries.eu/rest/v2/all');
    setCountries(response.data)
  };

  const filterCountries = (region) => {
    if (region !== "") {
      const filteredCountries = countries.filter(country => country.region === region);

      setCountries(filteredCountries);
    }
    // return countries;
  };

  const getRegions = () => {
    if (countries) {
      const regions = [];

      for (let country of countries) {
        if (!regions.includes(country.region) && country.region !== "" && country.region !== "Polar") {
          regions.push(country.region)
        };
      };
  
      return regions;
    };
  };

  useEffect(() => {
    getCountries();
    getRegions();
  }, []);

  const context = {
    countries: countries,
    getRegions: getRegions,
    filterCountries: filterCountries,
    setCountries: setCountries
  };

  return (
    <CountriesContext.Provider value={context}>
      {props.children}
    </CountriesContext.Provider>
  );
};

export default CountriesContext;
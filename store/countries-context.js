import { createContext, useState, useEffect } from 'react';
import axios from 'axios';

const CountriesContext = createContext({
  countries: [],
  selected: '',
  setSelected: () => {},
  filterCountries: () => {},
  getCountries: () => {}
});

export function CountriesContextProvider(props) {
  const [countries, setCountries] = useState();

  const [selected, setSelected] = useState('');
  const [filtered, setFiltered] = useState([]);

  const [query, setQuery] = useState('');

  const [searchParam] = useState(["capital", "name"]);

  const getCountries = async () => {
    const response = await axios.get('https://restcountries.eu/rest/v2/all');
    const data = await response.data
    setCountries(data);
  };

  useEffect(() => {
    getCountries();
  }, [filtered]);

  const filterCountries = () => {
    if (filtered && selected !== '') {
      setFiltered(countries.filter(country => country.region === selected));
    } else {
      setSelected('');
      setFiltered(countries);
    };
  };

  const searchCountries = () => {
    if (filtered && query !== '') {
      setFiltered(countries.filter(country => {
        if (country.name.toLowerCase().includes(query.toLowerCase()) || country.capital.toLowerCase().includes(query.toLowerCase())) {
          return country;
        };
      }));
    } else {
      setQuery('');
      setFiltered(countries);
    };
  };

  const context = {
    countries: countries,
    selected: selected,
    filtered: filtered,
    query: query,
    setQuery: setQuery,
    setSelected: setSelected,
    filterCountries: filterCountries,
    getCountries: getCountries,
    searchCountries: searchCountries
  };

  return (
    <CountriesContext.Provider value={context}>
      {props.children}
    </CountriesContext.Provider>
  );
};

export default CountriesContext;
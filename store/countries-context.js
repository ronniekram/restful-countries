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

  const getCountries = async () => {
    const response = await axios.get('https://restcountries.eu/rest/v2/all');
    const data = await response.data
    setCountries(data);
    // setFiltered(data);
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

  const context = {
    countries: countries,
    selected: selected,
    filtered: filtered,
    setSelected: setSelected,
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
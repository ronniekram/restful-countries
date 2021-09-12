/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useContext } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import CountriesContext from '../store/countries-context';

import styles from './css/search.module.css';

const Search = () => {
  const countriesCtx = useContext(CountriesContext);
  const { query, setQuery, searchCountries } = countriesCtx;

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  useEffect(() => {
    searchCountries();
  }, [query]);
  
  return (
    <div className={styles.container}>
      <label htmlFor="search" aria-label="Search Countries"></label>
      <input 
        type="text" 
        name="search"
        value={query} 
        placeholder="Search for a country..."
        onChange={handleChange} 
      />
    </div>
  )
};

export default Search;
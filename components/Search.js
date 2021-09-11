/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import styles from './css/search.module.css';

const Search = ({ query, setQuery, searchCountries }) => {
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
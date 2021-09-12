import { useEffect, useContext } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

import CountriesContext from '../store/countries-context';
import styles from './css/filter.module.css';

const Filter = () => {
  const countriesCtx = useContext(CountriesContext);
  const { selected, setSelected, filterCountries } = countriesCtx;

  const handleSelect = (e) => {
    setSelected(e.target.value);
  };

  useEffect(() => {
    filterCountries();
  }, [selected])

  return (
    <div className={styles.container}>
      <label htmlFor="filter" aria-label="Filter Countries By Region"></label>
      <select name="filter" onChange={handleSelect} value={selected}>
        <option value="">Filter By Region</option>
        <option value="Africa">Africa</option>
        <option value="Asia">Asia</option>
        <option value="Americas">Americas</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    </div>
  );
};

export default Filter;
import { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import CountriesContext from "../store/countries-context";
import styles from './css/search.module.css';

const Search = () => {
  const countriesCtx = useContext(CountriesContext);
  
  return (
    <div className={styles.container}>
      <label htmlFor="search" aria-label="Search Countries"></label>
      <input type="text" name="search" placeholder="Search for a Country..." />
    </div>
  )
};

export default Search;
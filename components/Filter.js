import { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import CountriesContext from "../store/countries-context";
import styles from './css/filter.module.css';

const Filter = () => {
  const countriesCtx = useContext(CountriesContext);
  const regions = countriesCtx.getRegions();

  return (
    <div className={styles.container}>
      <label htmlFor="filter" aria-label="Filter Countries By Region"></label>
      <select name="filter">
        <option value="">Filter By Region</option>
        {regions && regions.map((region) => (
          <option value={region} key={region}>
            {region}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Filter;
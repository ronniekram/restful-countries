import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

import styles from './css/filter.module.css';

const Filter = ({ filterCountries, regions }) => {
  const [selected, setSelected] = useState("");
  // const regions = [...regionsList];

  const handleSelect = (e) => {
    setSelected(e.target.value);
    filterCountries(e.target.value)
  };


  return (
    <div className={styles.container}>
      <label htmlFor="filter" aria-label="Filter Countries By Region"></label>
      <select name="filter" onChange={handleSelect} value={selected}>
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
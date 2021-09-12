/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import styles from './css/country.module.css';

const Country = ({ country }) => {
  const { flag, name, population, region, capital } = country;
  const formatNum = population.toLocaleString("en-US");
  // debugger
  return (
    <div className={styles.card}>
      <img src={flag} alt={`Flag of ${name}`} className={styles.flag} />
      <div className={styles.info}>
        <h1>{name}</h1>

        <p><span>Population:</span> {formatNum} </p>
        <p><span>Region:</span> {region}</p>
        <p><span>Capital:</span> {capital} </p>
      </div>
    </div>
  );
};

export default Country;
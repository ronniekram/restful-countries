import { useContext } from 'react';
import CountriesContext from '../store/countries-context';

const Header = () => {
  const countriesCtx = useContext(CountriesContext);

  console.log(countriesCtx);

  return (
    <div>
      hi
    </div>
  );
};

export default Header;
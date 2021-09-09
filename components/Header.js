import { useContext, useState } from 'react';
import Image from 'next/image';
import CountriesContext from '../store/countries-context';

import { moon, sun } from 'ionicons/icons';

const Header = () => {
  const [theme, setTheme] = useState('dark');

  // debugger
  const toggleTheme = () => theme === 'dark' ? setTheme('light') : setTheme('dark');

  // const countries = useContext(CountriesContext).countries;

  return (
    <div>
      <h1>Where In The World?</h1>
      <h2>
        <Image 
          src={moon} 
          width="20" 
          height="20" 
          alt="SVG of crescent moon" 
        />
      </h2>
    </div>
  );
};

export default Header;
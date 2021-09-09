import { useTheme } from 'next-themes';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const {theme, setTheme} = useTheme();

  const toggleTheme = () => theme === 'dark' ? setTheme('light') : setTheme('dark'); 

  return (
    <div>
      <h1>Where In The World?</h1>
      <h2>
        <FontAwesomeIcon icon={faMoon} onClick={toggleTheme} />
      </h2>
    </div>
  );
};

export default Header;
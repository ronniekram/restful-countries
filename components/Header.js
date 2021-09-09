import { useTheme } from "next-themes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import styles from './css/header.module.css';

const Header = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () =>
    theme === "dark" ? setTheme("light") : setTheme("dark");

  return (
    <div className={styles.container}>
      <div>Where In The World?</div>
      <div>
        <FontAwesomeIcon icon={faMoon} onClick={toggleTheme} className={styles.icon} />
      </div>
    </div>
  );
};

export default Header;

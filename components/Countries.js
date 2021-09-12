import Country from '../components/Country';

const Countries = ({ countries }) => {

  const renderCountries = () => {
    return countries && countries.map(country => <Country key={country.name} country={country} />);
  };

  return (
    <div className="">
      {renderCountries()}
    </div>
  );
};

export default Countries;
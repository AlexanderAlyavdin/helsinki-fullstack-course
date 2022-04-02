import CountryDetails from "./CountryDetails";

const Countries = ({ countries }) => {
  const count = countries.length;
  const shouldShowList = count > 1 && count <= 10;
  const shouldShowDetails = count === 1;
  const isTooMany = count > 10;

  return (
    <div>
      {shouldShowList ? (
        countries.map(({ name }) => <div key={name.common}>{name.common}</div>)
      ) : shouldShowDetails ? (
        <CountryDetails {...countries[0]} />
      ) : isTooMany ? (
        "Too many matches, specify another filter"
      ) : (
        "No countries found"
      )}
    </div>
  );
};

export default Countries;

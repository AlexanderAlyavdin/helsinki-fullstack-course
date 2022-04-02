import { useEffect, useState } from "react";
import CountryDetails from "./CountryDetails";
import CountryList from "./CountryList";

const Countries = ({ countries }) => {
  const [selectedCountry, setSelectedCountry] = useState(undefined);

  const count = countries.length;
  const shouldShowList = count > 1 && count <= 10;
  const shouldShowDetails = count === 1;
  const isTooMany = count > 10;

  useEffect(() => {
    setSelectedCountry(undefined);
  }, [countries]);

  return (
    <div>
      {shouldShowList ? (
        <CountryList
          countries={countries}
          onShowClick={(country) => setSelectedCountry(country)}
        />
      ) : shouldShowDetails ? (
        <CountryDetails {...countries[0]} />
      ) : isTooMany ? (
        "Too many matches, specify another filter"
      ) : (
        "No countries found"
      )}
      {selectedCountry && <CountryDetails {...selectedCountry} />}
    </div>
  );
};

export default Countries;

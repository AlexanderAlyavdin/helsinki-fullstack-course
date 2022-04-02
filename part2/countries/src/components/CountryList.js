const CountryList = ({ countries, onShowClick }) => {
  return countries.map((country) => {
    const name = country.name.common;
    return (
      <div key={name}>
        {name}{" "}
        <button
          type="button"
          onClick={() => {
            onShowClick(country);
          }}
        >
          show
        </button>
      </div>
    );
  });
};

export default CountryList;

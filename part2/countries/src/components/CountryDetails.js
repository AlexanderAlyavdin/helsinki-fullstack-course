const CountryDetails = ({ name, capital, area, languages, flags }) => {
  return (
    <div>
      <h1>{name.common}</h1>
      <div>capital {capital.join(" ")}</div>
      <div>area {area}</div>

      <h2>languages:</h2>
      <ul>
        {Object.values(languages).map((language) => (
          <li key={language}>{language}</li>
        ))}
      </ul>
      <img src={flags.png} alt="Coar of Arms" />
    </div>
  );
};

export default CountryDetails;

import { useEffect, useState } from "react";
import axios from "axios";
import Filter from "./components/Filter";
import Countries from "./components/Countries";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all").then((response) => {
      setCountries(response.data);
    });
  }, []);

  const filtered = countries.filter(({ name }) => {
    return name.common.toLowerCase().includes(filter.toLowerCase());
  });

  return (
    <div>
      <h2>find countries</h2>
      <Filter value={filter} onChange={setFilter} />

      {countries.length > 0 && <Countries countries={filtered} />}
    </div>
  );
};

export default App;

import { useEffect, useState } from "react";
import axios from "axios";
import Filter from "./components/Filter";
import Persons from "./components/Persons";
import PersonForm from "./components/PersonForm";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newPhone, setNewPhone] = useState("");
  const [filter, setFilter] = useState("");

  useEffect(() => {
    axios.get("http://localhost:3001/persons").then((response) => {
      setPersons(response.data);
    });
  }, []);

  const filtered = persons.filter(({ name }) =>
    name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter value={filter} onChange={setFilter} />

      <h3>Add a new</h3>
      <PersonForm
        persons={persons}
        newName={newName}
        newPhone={newPhone}
        onNewNameChange={setNewName}
        onNewPhoneChange={setNewPhone}
        onAdd={(newPersons) => {
          setPersons(newPersons);
          setNewName("");
          setNewPhone("");
        }}
      />

      <h3>Numbers</h3>
      <Persons persons={filtered} />
    </div>
  );
};

export default App;

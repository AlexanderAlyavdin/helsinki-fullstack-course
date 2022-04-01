import { useState } from "react";
import Filter from "./components/Filter";
import Persons from "./components/Persons";
import PersonForm from "./components/PersonForm";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);
  const [newName, setNewName] = useState("");
  const [newPhone, setNewPhone] = useState("");
  const [filter, setFilter] = useState("");

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

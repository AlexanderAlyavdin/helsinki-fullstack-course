import "./index.css";
import { useEffect, useState } from "react";
import Filter from "./components/Filter";
import PersonList from "./components/Persons";
import PersonForm from "./components/PersonForm";
import Notification from "./components/Notification";
import personService from "./services/personService";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newPhone, setNewPhone] = useState("");
  const [filter, setFilter] = useState("");
  const [notification, setNotification] = useState(undefined);

  useEffect(() => {
    personService.getAll().then((allPersons) => {
      setPersons(allPersons);
    });
  }, []);

  const filtered = persons.filter(({ name }) =>
    name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <h2>Phonebook</h2>
      {notification && <Notification notification={notification} />}

      <Filter value={filter} onChange={setFilter} />

      <h3>Add a new</h3>
      <PersonForm
        persons={persons}
        newName={newName}
        newPhone={newPhone}
        onNewNameChange={setNewName}
        onNewPhoneChange={setNewPhone}
        onAdd={(newPerson) => {
          personService.add(newPerson).then((addedPerson) => {
            setPersons(persons.concat(addedPerson));
            setNewName("");
            setNewPhone("");
            setNotification({
              message: `Added ${addedPerson.name}`,
              isError: false,
            });
            setTimeout(() => {
              setNotification(undefined);
            }, 5000);
          });
        }}
        onUpdate={(person) => {
          personService
            .update(person)
            .then((updatedPerson) => {
              setPersons(
                persons.map((item) =>
                  item.id === updatedPerson.id ? updatedPerson : item
                )
              );
            })
            .catch((error) => {
              setNotification({
                message: `Information of ${person.name} has already been removed from server`,
                isError: true,
              });
              setPersons(persons.filter((item) => item.id !== person.id));
            });
        }}
      />

      <h3>Numbers</h3>
      <PersonList
        onDelete={(person) => {
          personService.delete(person).then(() => {
            setPersons(persons.filter((item) => item !== person));
          });
        }}
        persons={filtered}
      />
    </div>
  );
};

export default App;

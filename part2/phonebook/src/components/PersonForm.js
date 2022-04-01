const PersonForm = ({
  persons,
  onAdd,
  newName,
  newPhone,
  onNewNameChange,
  onNewPhoneChange,
}) => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (!persons.find(({ name }) => name === newName)) {
          onAdd(persons.concat({ name: newName, number: newPhone }));
        } else {
          alert(`${newName} is already added to phonebook`);
        }
      }}
    >
      <div>
        name:{" "}
        <input
          value={newName}
          onChange={({ target }) => onNewNameChange(target.value)}
        />
      </div>
      <div>
        number:{" "}
        <input
          value={newPhone}
          onChange={({ target }) => onNewPhoneChange(target.value)}
        />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};

export default PersonForm;

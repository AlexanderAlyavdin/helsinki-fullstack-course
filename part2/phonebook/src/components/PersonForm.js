const PersonForm = ({
  persons,
  onAdd,
  onUpdate,
  newName,
  newPhone,
  onNewNameChange,
  onNewPhoneChange,
}) => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const user = { name: newName, number: newPhone };
        const existing = persons.find(({ name }) => name === newName);
        if (!existing) {
          onAdd(user);
        } else {
          if (
            window.confirm(
              `${user.name} is already added to phonebook, replace the old number with a new one?`
            )
          ) {
            onUpdate({ ...existing, number: newPhone });
          }
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

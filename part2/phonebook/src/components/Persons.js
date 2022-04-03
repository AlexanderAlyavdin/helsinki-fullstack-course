const PersonList = ({ persons, onDelete }) => {
  return (
    <div>
      {persons.map((person) => {
        const { name, number } = person;
        return (
          <div key={name}>
            {name} {number}{" "}
            <button
              onClick={() => {
                if (window.confirm(`Delete ${name}?`)) {
                  onDelete(person);
                }
              }}
            >
              delete
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default PersonList;

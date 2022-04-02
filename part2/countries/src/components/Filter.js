const Filter = ({ value, onChange }) => (
  <div>
    filter shown with{" "}
    <input value={value} onChange={({ target }) => onChange(target.value)} />
  </div>
);

export default Filter;

export default function SearchBar({ value, onChange }) {
  return (
    <div>
      <label className="label">Search Projects</label>
      <input
        className="input"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Type to filter projects..."
      />
    </div>
  );
}

import "./Dropdown.scss";

type Props = {
  label: string;
  options: { label: string; value: string }[];
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

export default function SimpleDropdown({
  label,
  options,
  value,
  onChange,
}: Props) {
  return (
    <div className="dropdown">
      <label className="dropdown__label">{label}</label>
      <select className="dropdown__select" value={value} onChange={onChange}>
        <option value="" disabled>
          Select...
        </option>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
}

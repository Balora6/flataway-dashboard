import "./Input.scss";

interface Props {
  title: string;
  value: string;
  onChange: (value: string) => void;
  type?: "url" | "text";
}

const Input = ({ title, value, onChange, type = "text" }: Props) => {
  return (
      <div className="input-wrapper">
        <label htmlFor="url">{title}</label>
        <input value={value} onChange={(e) => onChange(e.target.value)} type={type} />
      </div>
  );
};

export default Input;
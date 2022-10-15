import { TextFieldProps } from "../../../types/input-fields";
import block from "bem-cn";
import { useId } from "react";
import "./styles.css";

const b = block("text-field");

export const TextField = (props: TextFieldProps) => {
  const { error, label, name, placeholder, value, onChange } = props;
  const id = useId();

  return (
    <div className={b()}>
      <label className={b("label")} htmlFor={id}>{label}</label>
      <input
        className={b("input")}
        id={id}
        type="text"
        onChange={(e) => onChange(e.target.value)}
        value={value}
        placeholder={placeholder}
        name={name}
      />
      {error && <div>{error}</div>}
    </div>
  );
};

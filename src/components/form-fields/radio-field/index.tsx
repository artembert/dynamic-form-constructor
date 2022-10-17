import block from "bem-cn";
import { RadioFieldProps } from "../../../types/input-fields";
import { ValidationMessage } from "../../validation-message";
import "./styles.css";

const b = block("radio-field");
const getId = (name: string, value: string) => `${name}-${value}`;

export const RadioField = (props: RadioFieldProps) => {
  const { error, label, name, value, onChange, options } = props;

  return (
    <fieldset className={b()}>
      <legend className={b("title")}>{label}</legend>

      {options.map((option) => (
        <div className={b("item")} key={option.value}>
          <input
            type="radio"
            className={b("item-input")}
            name={name}
            value={option.value}
            id={getId(name, option.value)}
            checked={value === option.value}
            onChange={(e) => onChange(e.target.value)}
          />
          <label
            className={b("item-label")}
            htmlFor={getId(name, option.value)}
          >
            {option.title}
          </label>
        </div>
      ))}

      <div className={b("validation-container")}>
        {error && <ValidationMessage>{error}</ValidationMessage>}
      </div>
    </fieldset>
  );
};

import { useId } from "react";
import block from "bem-cn";
import { NumberFieldProps } from "../../../types/input-fields";
import { ValidationMessage } from "../../validation-message";
import "./styles.css";

const b = block("number-field");

export const NumberField = (props: NumberFieldProps) => {
  const { error, label, name, placeholder, value, onChange } = props;
  const id = useId();

  return (
    <div className={b()}>
      <label className={b("label")} htmlFor={id}>
        {label}
      </label>
      <input
        className={b("input")}
        id={id}
        type="text"
        inputMode="numeric"
        onChange={(e) => onChange(parseInt(e.target.value, 10))}
        value={value}
        placeholder={placeholder}
        pattern="\d*"
        name={name}
      />
      <div className={b("validation-container")}>
        {error && <ValidationMessage>{error}</ValidationMessage>}
      </div>
    </div>
  );
};

import { useId } from "react";
import block from "bem-cn";
import { TextareaFieldProps } from "../../../types/input-fields";
import { ValidationMessage } from "../../validation-message";
import "./styles.css";

const b = block("textarea-field");

export const TextareaField = (props: TextareaFieldProps) => {
  const { error, label, name, placeholder, value, onChange, rows } = props;
  const id = useId();

  return (
    <div className={b()}>
      <label className={b("label")} htmlFor={id}>
        {label}
      </label>
      <textarea
        className={b("input")}
        id={id}
        onChange={(e) => onChange(e.target.value)}
        value={value}
        rows={rows || 3}
        placeholder={placeholder}
        name={name}
      />
      <div className={b("validation-container")}>
        {error && <ValidationMessage>{error}</ValidationMessage>}
      </div>
    </div>
  );
};

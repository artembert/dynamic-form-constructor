import { useId } from "react";
import block from "bem-cn";
import { CheckboxFieldProps } from "../../../types/input-fields";
import { ValidationMessage } from "../../validation-message";
import "./styles.css";

const b = block("checkbox-field");

export const CheckboxField = (props: CheckboxFieldProps) => {
  const { error, label, name, value, onChange } = props;
  const id = useId();

  return (
    <div className={b()}>
      <div className={b("container")}>
        <input
          className={b("input")}
          id={id}
          type="checkbox"
          onChange={(e) => onChange(e.target.checked)}
          checked={value}
          name={name}
        />
        <label className={b("label")} htmlFor={id}>
          {label}
        </label>
      </div>
      <div className={b("validation-container")}>
        {error && <ValidationMessage>{error}</ValidationMessage>}
      </div>
    </div>
  );
};

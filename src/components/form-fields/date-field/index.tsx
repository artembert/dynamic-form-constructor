import { ChangeEvent, useId } from "react";
import block from "bem-cn";
import { DateFieldProps } from "../../../types/input-fields";
import { ValidationMessage } from "../../validation-message";
import "./styles.css";

const b = block("date-field");
const UsFormatter = new Intl.DateTimeFormat("en-CA");

export const DateField = (props: DateFieldProps) => {
  const { error, label, name, value, onChange } = props;
  const id = useId();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.valueAsDate;

    if (inputValue) {
      onChange(inputValue.toISOString());
    }
  };

  return (
    <div className={b()}>
      <label className={b("label")} htmlFor={id}>
        {label}
      </label>
      <input
        className={b("input")}
        id={id}
        type="date"
        value={UsFormatter.format(new Date(value || Date.now()))}
        onChange={handleChange}
        name={name}
      />
      <div className={b("validation-container")}>
        {error && <ValidationMessage>{error}</ValidationMessage>}
      </div>
    </div>
  );
};

import { useCallback } from "react";
import block from "bem-cn";
import memoize from "fast-memoize";
import { FormFieldMemoized } from "../form-fields/form-field";
import { ControlButton } from "../control-button";
import { OutputProps } from "./types";
import "./styles.css";

const b = block("output");

export const Output = (props: OutputProps) => {
  const { title, formFields, onChange, controls } = props;
  const handleChange = useCallback(
    memoize((fieldName) => (value) => onChange(fieldName, value)),
    [onChange]
  );

  return (
    <form method="POST" target="_blank" className={b()}>
      <fieldset>
        {title ? <legend>{title}</legend> : null}
        <div className={b("fields-list")}>
          {formFields.map((field) => (
            <div className={b("field-item")} key={field.name}>
              <FormFieldMemoized
                {...(field as any)}
                onChange={handleChange(field.name)}
              />
            </div>
          ))}
        </div>
        <div className={b("controls-list")}>
          {controls.map((control) => (
            <div key={control.title} className={b("control-item")}>
              <ControlButton {...control} />
            </div>
          ))}
        </div>
      </fieldset>
    </form>
  );
};

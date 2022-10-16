import { useCallback } from "react";
import block from "bem-cn";
import memoize from "fast-memoize";
import { FormFieldMemoized } from "../form-fields/form-field";
import { OutputProps } from "./types";
import "./styles.css";

const b = block("output");

export const Output = (props: OutputProps) => {
  const { title, formFields, onChange } = props;
  const handleChange = useCallback(
    memoize((fieldName) => (value) => onChange(fieldName, value)),
    [onChange]
  );

  return (
    <form method="POST" target="_blank" className={b()}>
      <section>
        {title ? <h3 className={b("title")}>{title}</h3> : null}
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
      </section>
    </form>
  );
};

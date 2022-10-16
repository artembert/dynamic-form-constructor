import block from "bem-cn";
import { FormField } from "../form-fields/form-field";
import { OutputProps } from "./types";

import "./styles.css";

const b = block("output");

export const Output = (props: OutputProps) => {
  const { formFields, onChange } = props;

  return (
    <form method="POST" target="_blank" className={b()}>
      <div className={b("fields-list")}>
        {formFields.map((field) => (
          <div className={b("field-item")} key={field.name}>
            <FormField
              {...(field as any)}
              onChange={(value) => onChange(field.name, value)}
            />
          </div>
        ))}
      </div>
    </form>
  );
};

import block from "bem-cn";
import { FormField } from "../form-fields/form-field";
import { OutputProps } from "./types";

import "./styles.css";

const b = block("output");

export const Output = (props: OutputProps) => {
  const { formFields } = props;

  const handleFieldChange = (e: any) => e;

  return (
    <form method="POST" target="_blank" className={b()}>
      <div className={b("fields-list")}>
        {formFields.map((field) => (
          <div className={b("field-item")}>
            <FormField
              key={field.name}
              {...(field as any)}
              onChange={handleFieldChange}
            />
          </div>
        ))}
      </div>
    </form>
  );
};

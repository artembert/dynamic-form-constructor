import { OutputProps } from "./types";
import { FormField } from "../form-fields/form-field";

export const Output = (props: OutputProps) => {
  const { formFields } = props;
  return (
    <>
      {formFields.map((field) => (
        <FormField key={field.name} {...(field as any)} onChange={(e) => {}} />
      ))}
    </>
  );
};

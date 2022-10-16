import { FormFieldConfig, InputValue } from "../../types/input-fields";

export type OutputProps = {
  formFields: FormFieldConfig[];
  onChange: (name: string, value: InputValue) => void;
};

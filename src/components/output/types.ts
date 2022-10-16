import { FormFieldConfig, InputValue } from "../../types/input-fields";

export type OutputProps = {
  title?: string;
  formFields: FormFieldConfig[];
  onChange: (name: string, value: InputValue) => void;
};

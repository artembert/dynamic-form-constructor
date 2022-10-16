import { FormFieldConfig, InputValue } from "../../types/input-fields";
import { ControlProps } from "../../types/controls";

export type OutputProps = {
  title?: string;
  formFields: FormFieldConfig[];
  controls: ControlProps[];
  onChange: (name: string, value: InputValue) => void;
};

import { FormFieldConfig } from "./input-fields";
import { ControlProps } from "./controls";

export type FormConfig = {
  title: string;
  fields: FormFieldConfig[];
  controls: ControlProps[];
};

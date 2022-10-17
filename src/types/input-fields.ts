export type InputValue = string | number | boolean;

export type InputChangeHandler<T extends InputValue> = (value: T) => void;

export type RadioInputOption = {
  value: string;
  title: string;
};

type BaseInputFieldProps<T extends InputValue> = {
  value?: T;
  type: string;
  name: string;
  label: string;
  onChange: InputChangeHandler<T>;
  error?: string;
};

export type TextFieldProps = BaseInputFieldProps<string> & {
  type: "text";
  pattern?: string;
  placeholder?: string;
};

export type TextareaFieldProps = BaseInputFieldProps<string> & {
  type: "textarea";
  placeholder?: string;
  rows?: number;
};

export type CheckboxFieldProps = BaseInputFieldProps<boolean> & {
  type: "checkbox";
};

export type RadioFieldProps = BaseInputFieldProps<string> & {
  type: "radio";
  options: RadioInputOption[];
};

export type NumberFieldProps = BaseInputFieldProps<number> & {
  type: "number";
  placeholder?: string;
};

export type DateFieldProps = BaseInputFieldProps<string> & {
  type: "date";
};

export type FormFieldProps =
  | TextFieldProps
  | TextareaFieldProps
  | CheckboxFieldProps
  | RadioFieldProps
  | NumberFieldProps
  | DateFieldProps;

export type FormFieldConfig = Omit<FormFieldProps, "onChange">;

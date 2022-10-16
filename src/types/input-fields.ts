export type InputValue = string | number | boolean | Date;

export type InputChangeHandler<T extends InputValue> = (value: T) => void;

type BaseInputFieldProps<T extends InputValue> = {
  value: T;
  type: string;
  name: string;
  label: string;
  onChange: InputChangeHandler<T>;
  error?: string;
};

export type TextFieldProps = BaseInputFieldProps<string> & {
  type: "text";
  placeholder?: string;
};

export type TextAreaFieldProps = BaseInputFieldProps<string> & {
  type: "textarea";
  placeholder?: string;
  rows?: number;
};

export type CheckboxFieldProps = BaseInputFieldProps<boolean> & {
  type: "checkbox";
};

export type RadioFieldProps = BaseInputFieldProps<string> & {
  type: "radio";
  options: string[];
};

export type NumberFieldProps = BaseInputFieldProps<number> & {
  type: "number";
};

export type DateFieldProps = BaseInputFieldProps<Date> & {
  type: "date";
};

export type FormFieldProps =
  | TextFieldProps
  | TextAreaFieldProps
  | CheckboxFieldProps
  | RadioFieldProps
  | NumberFieldProps
  | DateFieldProps;

export type FormFieldConfig = Omit<FormFieldProps, "onChange">;

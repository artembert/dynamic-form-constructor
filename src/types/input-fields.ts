type BaseInputFieldProps = {
  type: string;
  name: string;
  label: string;
  error?: string;
};

export type TextFieldProps = BaseInputFieldProps & {
  type: "text";
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
};

export type TextAreaFieldProps = BaseInputFieldProps & {
  type: "textarea";
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  rows?: number;
};

export type CheckboxFieldProps = BaseInputFieldProps & {
  value: boolean;
  type: "checkbox";
  onChange: (value: boolean) => void;
};

export type RadioFieldProps = BaseInputFieldProps & {
  type: "radio";
  value: string;
  options: string[];
  onChange: (value: string) => void;
};

export type NumberFieldProps = BaseInputFieldProps & {
  type: "number";
  value: string;
  onChange: (value: number) => void;
};

export type DateFieldProps = BaseInputFieldProps & {
  type: "date";
  value: Date;
  onChange: (value: Date) => void;
};

export type FormFieldProps =
  | TextFieldProps
  | TextAreaFieldProps
  | CheckboxFieldProps
  | RadioFieldProps
  | NumberFieldProps
  | DateFieldProps;

export type FormFieldConfig = Omit<FormFieldProps, "onChange">;

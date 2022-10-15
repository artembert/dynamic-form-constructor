type BaseInputFieldProps = {
  name: string;
  label: string;
  value: string;
  onChange: (value: unknown) => void;
  error?: string;
};

export type InputFieldProps = BaseInputFieldProps & {
  type: "text";
  onChange: (value: string) => void;
  placeholder?: string;
};

export type TextAreaFieldProps = BaseInputFieldProps & {
  type: "textarea";
  onChange: (value: string) => void;
  placeholder?: string;
  rows?: number;
};

export type CheckboxFieldProps = BaseInputFieldProps & {
  type: "checkbox";
  value: boolean;
  onChange: (value: boolean) => void;
};

export type RadioFieldProps = BaseInputFieldProps & {
  type: "radio";
  options: string[];
  onChange: (value: string) => void;
};

export type NumberFieldProps = BaseInputFieldProps & {
  type: "number";
  onChange: (value: number) => void;
};

export type DateFieldProps = BaseInputFieldProps & {
  type: "date";
  value: Date;
  onChange: (value: Date) => void;
};

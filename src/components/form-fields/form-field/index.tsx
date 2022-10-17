import { memo } from "react";
import { TextField } from "../text-field";
import { FormFieldProps } from "../../../types/input-fields";
import { NumberField } from "../number-field";

const fieldMap = {
  text: TextField,
  number: NumberField,
};

export const FormField = (props: FormFieldProps) => {
  const { type } = props;
  const Component = fieldMap[type];

  if (Component === undefined) {
    throw new Error(`Unable to resolve component by type ${type}`);
  }

  return <Component {...props} />;
};

export const FormFieldMemoized = memo(FormField);

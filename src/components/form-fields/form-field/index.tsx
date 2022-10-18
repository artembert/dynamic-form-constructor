import { memo } from "react";
import { TextField } from "../text-field";
import { FormFieldProps } from "../../../types/input-fields";
import { NumberField } from "../number-field";
import { RadioField } from "../radio-field";
import { CheckboxField } from "../checkbox-field";
import { DateField } from "../date-field";
import { TextareaField } from "../textarea-field";
import { CodeSnippet } from "../../code-snippet";
import { FormFieldFallback } from "./form-field-fallback";

const fieldMap = {
  text: TextField,
  number: NumberField,
  radio: RadioField,
  checkbox: CheckboxField,
  date: DateField,
  textarea: TextareaField,
};

export const FormField = (props: FormFieldProps) => {
  const { type } = props;
  const Component = fieldMap[type];

  if (Component === undefined) {
    return (
      <FormFieldFallback>
        Unable to resolve component
        <br />
        <CodeSnippet>{JSON.stringify(props, null, 2)}</CodeSnippet>
      </FormFieldFallback>
    );
  }

  return <Component {...(props as any)} />;
};

export const FormFieldMemoized = memo(FormField);

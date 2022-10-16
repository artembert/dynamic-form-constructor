import { TextField } from "../text-field";
import { FormFieldProps } from "../../../types/input-fields";

const fieldMap = {
  text: TextField,
};

export const FormField = (props: FormFieldProps) => {
  const { type } = props;
  const Component = fieldMap[type];

  if (Component === undefined) {
    throw new Error(`Unable to resolve component by type ${type}`);
  }

  return <Component {...props} />;
};

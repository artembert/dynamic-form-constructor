import { FormConfig } from "../types/form-config";
import { NumberFieldProps, TextFieldProps } from "../types/input-fields";

export const formConfigMock: FormConfig = {
  title: "Payment Details",
  fields: [
    {
      type: "text",
      name: "email",
      label: "Email",
      value: "",
    },
    {
      type: "text",
      name: "cardholder-name",
      label: "Cardholder Name",
      value: "",
    },
    {
      type: "text",
      name: "card-number",
      label: "Card Number",
      pattern: "[0-9 ]+",
      value: "",
    } as Omit<TextFieldProps, "onChange">,
    {
      type: "text",
      name: "country",
      label: "Country",
      value: "",
      error: "Required field",
    },
    {
      type: "number",
      name: "zip",
      label: "ZIP",
      value: undefined,
      placeholder: "000000",
    } as Omit<NumberFieldProps, "onChange">,
    {
      type: "text",
      name: "state",
      label: "State/Region",
      value: "",
    },
    {
      type: "text",
      name: "discount-code",
      label: "Discount Code",
      value: "",
    },
  ],
  controls: [
    { type: "reset", title: "Cancel" },
    { type: "submit", title: "Save" },
  ],
};

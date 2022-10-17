import { FormConfig } from "../types/form-config";
import {
  NumberFieldProps,
  RadioFieldProps,
  TextFieldProps,
} from "../types/input-fields";

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
      type: "radio",
      name: "country",
      label: "Country",
      value: "USA",
      error: "Required field",
      options: [
        {
          value: "USA",
          title: "USA",
        },
        {
          value: "Canada",
          title: "Canada",
        },
        {
          value: "Mexico",
          title: "Mexico",
        },
        {
          value: "PuertoRico",
          title: "Puerto Rico",
        },
      ],
    } as Omit<RadioFieldProps, "onChange">,
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
    {
      type: "checkbox",
      name: "save-data",
      label: "save card details for later",
      value: true,
    },
  ],
  controls: [
    { type: "reset", title: "Cancel" },
    { type: "submit", title: "Save" },
  ],
};

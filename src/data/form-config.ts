import { FormFieldConfig } from "../types/input-fields";

export const formConfigMock: FormFieldConfig[] = [
  {
    type: "text",
    name: "first-name",
    label: "First Name",
    value: "",
  },
  {
    type: "text",
    name: "family-name",
    label: "Family Name",
    value: "",
  },
  {
    type: "text",
    name: "country",
    label: "Country",
    value: "",
    error: "Required field",
  },
  {
    type: "text",
    name: "city",
    label: "City",
    value: "",
  },
];

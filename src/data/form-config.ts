import { FormConfig } from "../types/form-config";

export const formConfigMock: FormConfig = {
  title: "Check-In",
  fields: [
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
  ],
  controls: [
    { type: "reset", title: "Cancel" },
    { type: "submit", title: "Save" },
  ],
};

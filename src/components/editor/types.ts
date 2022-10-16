import { FormConfig } from "../../types/form-config";

export type EditorProps = {
  config: FormConfig;
  onChange: (jsObject: object, error: boolean) => void;
};

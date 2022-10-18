import JSONInput from "react-json-editor-ajrm/es";
import locale from "react-json-editor-ajrm/locale/en";
import { EditorProps } from "./types";

export const Editor = (props: EditorProps) => {
  const { config, onChange } = props;

  const handleChange = ({ jsObject, error }) => {
    onChange(jsObject, error);
  };

  return (
    <JSONInput
      id="a_unique_id"
      placeholder={config}
      onChange={handleChange}
      confirmGood={false}
      locale={locale}
      theme="light_mitsuketa_tribute"
      colors={{
        default: "#090707",
        background: "#ffffff",
        background_warning: "#f9f9f9",
        string: "#057D19",
        number: "#ce33c0",
        colon: "#090707",
        keys: "#871094",
        keys_whiteSpace: "#AF74A5",
        primitive: "#0033B3",
        error: "red",
      }}
      height="550px"
    />
  );
};

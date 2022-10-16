import JSONInput from "react-json-editor-ajrm";
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
      style={{
        outerBox: {},
        warningBox: {},
      }}
      onChange={handleChange}
      confirmGood={false}
      locale={locale}
      theme="dark_vscode_tribute"
      height="550px"
    />
  );
};

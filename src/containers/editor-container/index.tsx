import { Editor } from "../../components/editor";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { setConfig } from "../../store/features/form";
import { FormConfig } from "../../types/form-config";

export const EditorContainer = () => {
  const dispatch = useAppDispatch();
  const config = useAppSelector((state) => state.form);
  const handleChange = (jsObject: object, error: boolean) => {
    if (!error) {
      dispatch(setConfig(jsObject as FormConfig));
    }
  };

  return <Editor config={config} onChange={handleChange} />;
};

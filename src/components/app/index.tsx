import { Notebook } from "../notebook";
import { OutputContainer } from "../../containers/output-container";
import { EditorContainer } from "../../containers/editor-container";

export const App = () => (
  <Notebook markup={<EditorContainer />} result={<OutputContainer />} />
);

import { Notebook } from "../notebook";
import { Editor } from "../editor";

export const App = () => <Notebook markup={<Editor />} result={<div></div>} />;

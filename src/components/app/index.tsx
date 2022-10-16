import { Notebook } from "../notebook";
import { OutputContainer } from "../../containers/output-container";

export const App = () => (
  <Notebook
    markup={<div />}
    result={
      <div>
        <OutputContainer />
      </div>
    }
  />
);

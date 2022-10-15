import { Notebook } from "../notebook";
import { Output } from "../output";
import { formConfigMock } from "../../data/form-config";

export const App = () => (
  <Notebook
    markup={<div />}
    result={
      <div>
        <Output formFields={formConfigMock} />
      </div>
    }
  />
);

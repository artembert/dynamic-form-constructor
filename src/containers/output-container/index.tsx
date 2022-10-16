import { useDispatch, useSelector } from "react-redux";
import { Output } from "../../components/output";
import { changeFormField } from "../../store/features/form";
import { RootState } from "../../store";

export const OutputContainer = () => {
  const dispatch = useDispatch();
  const config = useSelector((state: RootState) => state.form.fields);
  const fieldChangeHandler = (name, value) =>
    dispatch(changeFormField({ name, value }));

  return <Output formFields={config} onChange={fieldChangeHandler} />;
};

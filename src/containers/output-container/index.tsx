import { useDispatch, useSelector } from "react-redux";
import { StrictMode, useCallback } from "react";
import { Output } from "../../components/output";
import { changeFormField } from "../../store/features/form";
import { RootState } from "../../store";

export const OutputContainer = () => {
  const dispatch = useDispatch();
  const config = useSelector((state: RootState) => state.form.fields);
  const fieldChangeHandler = useCallback(
    (name, value) => dispatch(changeFormField({ name, value })),
    [dispatch, changeFormField]
  );

  return (
    <StrictMode>
      <Output formFields={config} onChange={fieldChangeHandler} />
    </StrictMode>
  );
};

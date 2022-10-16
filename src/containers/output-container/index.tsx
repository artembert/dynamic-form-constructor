import { StrictMode, useCallback } from "react";
import { Output } from "../../components/output";
import { changeFormField } from "../../store/features/form";
import { useAppDispatch, useAppSelector } from "../../hooks";

export const OutputContainer = () => {
  const dispatch = useAppDispatch();
  const config = useAppSelector((state) => state.form.fields);
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

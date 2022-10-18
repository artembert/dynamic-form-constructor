import { StrictMode, useCallback } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { Output } from "../../components/output";
import { changeFormField } from "../../store/features/form";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { OutputErrorFallback } from "../../components/output/output-error-fallback";

export const OutputContainer = () => {
  const dispatch = useAppDispatch();
  const config = useAppSelector((state) => state.form.fields);
  const title = useAppSelector((state) => state.form.title);
  const controls = useAppSelector((state) => state.form.controls);
  const fieldChangeHandler = useCallback(
    (name, value) => dispatch(changeFormField({ name, value })),
    [dispatch, changeFormField]
  );

  return (
    <StrictMode>
      <ErrorBoundary FallbackComponent={OutputErrorFallback}>
        <Output
          title={title}
          formFields={config}
          onChange={fieldChangeHandler}
          controls={controls}
        />
      </ErrorBoundary>
    </StrictMode>
  );
};

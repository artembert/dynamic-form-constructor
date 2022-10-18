import { ReactNode } from "react";

export const FormFieldFallback = ({ children }: { children: ReactNode }) => (
  <div className="terminal-alert terminal-alert-error">{children}</div>
);

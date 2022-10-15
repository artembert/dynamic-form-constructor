import block from "bem-cn";
import { ValidationMessageProps } from "./types";
import "./styles.css";

const b = block("validation-message");

export const ValidationMessage = ({ children }: ValidationMessageProps) => (
  <div className={b()}>
    <span>{children}</span>
  </div>
);

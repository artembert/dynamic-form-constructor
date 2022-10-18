import { ReactNode } from "react";
import block from "bem-cn";

import "./styles.css";

const b = block("code-snippet");

export const CodeSnippet = ({ children }: { children: ReactNode }) => (
  <div className={b()}>{children}</div>
);

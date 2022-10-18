import block from "bem-cn";
import "./styles.css";

const b = block("output-error-fallback");

const NBSP = "\u00A0";

export const OutputErrorFallback = () => (
  <section className={b()}>
    <h2 className={b("title")}>
      ⚠️Please check the{NBSP}validity of{NBSP}JSON Config and{NBSP}reload the
      {NBSP}page
    </h2>
  </section>
);

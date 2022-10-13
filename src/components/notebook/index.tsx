import block from "bem-cn";
import "./styles.css";

const b = block("notebook");

export const Notebook = (props: {
  markup: JSX.Element;
  result: JSX.Element;
}) => {
  const { markup, result } = props;
  return (
    <main className={b()}>
      <section>
        <h2 className={b("title")}>Structure</h2>
        <div>{markup}</div>
      </section>
      <section>
        <h2 className={b("title")}>Result</h2>
        <div>{result}</div>
      </section>
    </main>
  );
};

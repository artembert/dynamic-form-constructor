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
      <h1 className={b("heading")}>Dynamic form constructor</h1>
      <section className={b("side")}>
        <h2 className={b("title")}>Config</h2>
        <div>{markup}</div>
      </section>
      <section className={b("side")}>
        <h2 className={b("title")}>Form</h2>
        {result}
      </section>
    </main>
  );
};

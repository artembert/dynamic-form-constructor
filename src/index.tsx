import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./store";
import { App } from "./components/app";
import "./styles.css";

const container = document.getElementById("root");
const root = createRoot(container!);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

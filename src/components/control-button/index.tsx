import { ButtonType, ControlProps } from "../../types/controls";

const resolveClassName = (type: ButtonType) => {
  switch (type) {
    case "submit":
      return "btn btn-primary";
    case "reset":
      return "btn btn-default btn-ghost";
    case "button":
    default:
      return "btn btn-default";
  }
};

export const ControlButton = (props: ControlProps) => {
  const { type, title } = props;
  const className = resolveClassName(type);

  return (
    <button type={type} className={className}>
      {title}
    </button>
  );
};

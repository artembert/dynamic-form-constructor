import { ControlProps } from "../../types/controls";

export const ControlButton = (props: ControlProps) => {
  const { type, title } = props;

  return <button type={type}>{title}</button>;
};

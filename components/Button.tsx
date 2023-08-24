import { MouseEventHandler } from "react";

type Props = {
  title: string;
  type?: "button" | "submit";
  leftIcon?: string;
  rightIcon?: string;
  handleClick?: MouseEventHandler;
  isSubmitting?: boolean;
  bgColor?: string;
  textColor?: string;
};
export const Button = ({
  title,
  type,
  leftIcon,
  rightIcon,
  handleClick,
  isSubmitting,
  bgColor,
  textColor,
}: Props) => {
  return <button>{title}</button>;
};

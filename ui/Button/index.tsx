import { MouseEventHandler } from "react";
import styles from "./styles.module.scss";

type buttonProps = {
  text: string;
  className?: string;
  type?: "submit" | "button";
  handleClick?: MouseEventHandler<HTMLButtonElement>;
};

const Button = ({ text, type, className, handleClick }: buttonProps) => {
  return (
    <button type={type} className={`${styles.btn} ${className}`} onClick={handleClick}>
      {text}
    </button>
  );
};

export default Button;

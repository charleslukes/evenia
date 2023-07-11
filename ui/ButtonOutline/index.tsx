import styles from "./styles.module.scss";

type buttonOutlineProps = {
  text: string;
  className?: string;
  handleClick: () => void;
};

const ButtonOutline = ({
  text,
  className,
  handleClick,
}: buttonOutlineProps) => {
  return (
    <button className={`${styles.btn} ${className}`} onClick={handleClick}>
      {text}
    </button>
  );
};

export default ButtonOutline;

import styles from "./styles.module.scss";

type buttonType = {
  text: string;
  handleClick: () => void;
};

const Button = ({ text, handleClick }: buttonType) => {
  return (
    <button className={styles.btn} onClick={handleClick}>
      {text}
    </button>
  );
};

export default Button;

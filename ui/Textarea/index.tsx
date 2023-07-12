import { JSX, ClassAttributes, TextareaHTMLAttributes } from "react";
import styles from "./styles.module.scss";

const Textarea = (
  {register}: any
) => {
  return (
    <textarea
      className={styles.desc}
      placeholder="Description"
      {...register}
    ></textarea>
  );
};

export default Textarea;
